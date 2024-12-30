<?php

namespace App\Http\Controllers;

use App\Models\PlayDate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\PlayDateInvitation;
use App\Mail\PlayDateConfirmation;
use App\Mail\PlayDateCancellation;
use App\Models\User;
use Illuminate\Support\Facades\Notification;
use App\Notifications\PlayDateRegistrationChanged;
use App\Services\CalendarService;
use Symfony\Component\HttpFoundation\Response;
use App\Services\WeatherService;

class PlayDateController extends Controller
{
    protected $calendarService;
    protected $weatherService;

    public function __construct(CalendarService $calendarService, WeatherService $weatherService)
    {
        $this->calendarService = $calendarService;
        $this->weatherService = $weatherService;
    }

    public function index(Request $request)
    {
        $query = PlayDate::with('host')
            ->where('status', 'open')
            ->where('date', '>=', now());

        // Apply search filter
        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%")
                    ->orWhere('course_name', 'like', "%{$search}%")
                    ->orWhere('location', 'like', "%{$search}%");
            });
        }

        // Apply date range filter
        if ($request->filled('date_range')) {
            $dateRange = $request->input('date_range');
            switch ($dateRange) {
                case 'this_week':
                    $query->whereBetween('date', [Carbon::now(), Carbon::now()->endOfWeek()]);
                    break;
                case 'next_week':
                    $query->whereBetween('date', [Carbon::now()->nextWeek(), Carbon::now()->nextWeek()->endOfWeek()]);
                    break;
                case 'this_month':
                    $query->whereBetween('date', [Carbon::now(), Carbon::now()->endOfMonth()]);
                    break;
            }
        }

        // Apply location filter
        if ($request->filled('location')) {
            $query->where('location', $request->input('location'));
        }

        // Apply sorting
        $sortBy = $request->input('sort_by', 'date');
        $sortDirection = $request->input('sort_direction', 'asc');
        $query->orderBy($sortBy, $sortDirection);

        $playDates = $query->paginate(9)->withQueryString();

        return Inertia::render('PlayDates/Index', [
            'playDates' => $playDates,
            'filters' => $request->only(['search', 'date_range', 'location', 'sort_by', 'sort_direction']),
        ]);
    }

    public function show(PlayDate $playDate)
    {
        $playDate->load(['host', 'guests']);

        // Fetch weather data for the play date
        $weather = $this->getWeatherForecast($playDate->location, $playDate->date);

        return Inertia::render('PlayDates/Show', [
            'playDate' => array_merge($playDate->toArray(), [
                'weather' => $weather,
            ]),
        ]);
    }

    private function getWeatherForecast($location, $date)
    {
        return $this->weatherService->getDetailedForecast($location, Carbon::parse($date));
    }

    public function register(Request $request, PlayDate $playDate)
    {
        // Check if play date is still open
        if ($playDate->status !== 'open') {
            return back()->withErrors(['error' => 'This play date is no longer accepting registrations.']);
        }

        // Check if play date hasn't passed
        if (Carbon::parse($playDate->date)->isPast()) {
            return back()->withErrors(['error' => 'This play date has already passed.']);
        }

        $validated = $request->validate([
            'guest_name' => 'required|string|max:255',
            'guest_email' => 'required|email|max:255',
            'guest_phone' => ['required', 'string', 'max:20', 'regex:/^([0-9\s\-\+\(\)]*)$/'],
            'guest_count' => [
                'required',
                'integer',
                'min:1',
                'max' => function($attribute, $value, $fail) use ($playDate) {
                    $maxAllowed = min(2, $playDate->spots_remaining);
                    if ($value > $maxAllowed) {
                        $fail("You can only register up to {$maxAllowed} guests.");
                    }
                },
            ],
            'additional_guests' => 'array|required_if:guest_count,2',
            'additional_guests.*.name' => 'required_with:additional_guests|string|max:255',
            'additional_guests.*.email' => 'required_with:additional_guests|email|max:255',
        ], [
            'guest_phone.regex' => 'Please enter a valid phone number.',
            'guest_count.max' => 'Only ' . min(2, $playDate->spots_remaining) . ' spots available.',
            'additional_guests.*.name.required_with' => 'Please provide the name for all additional guests.',
            'additional_guests.*.email.required_with' => 'Please provide the email for all additional guests.',
        ]);

        if (!$playDate->canAddGuests($validated['guest_count'])) {
            return back()->withErrors(['error' => 'Not enough spots remaining for this play date.']);
        }

        try {
            DB::beginTransaction();

            // Register primary guest
            $primaryGuest = $playDate->addGuest([
                'guest_name' => $validated['guest_name'],
                'guest_email' => $validated['guest_email'],
                'guest_phone' => $validated['guest_phone'],
                'guest_count' => 1,
                'user_id' => $request->user()?->id,
                'status' => 'pending',
                'payment_status' => 'pending',
                'is_member' => $request->user()?->membership()->exists() ?? false,
            ]);

            // Track primary guest registration
            $this->trackRegistrationChanges($primaryGuest, 'registered');

            // Register additional guests if any
            if (!empty($validated['additional_guests'])) {
                foreach ($validated['additional_guests'] as $additionalGuest) {
                    $guest = $playDate->addGuest([
                        'guest_name' => $additionalGuest['name'],
                        'guest_email' => $additionalGuest['email'],
                        'guest_phone' => null,
                        'guest_count' => 1,
                        'status' => 'invited',
                        'payment_status' => 'pending',
                        'is_member' => false,
                    ]);

                    // Track additional guest invitation
                    $this->trackRegistrationChanges($guest, 'invited');

                    // Send invitation email
                    Mail::to($additionalGuest['email'])->queue(new PlayDateInvitation(
                        $playDate,
                        $primaryGuest,
                        $guest
                    ));
                }
            }

            DB::commit();

            // Send confirmation email to primary guest
            Mail::to($validated['guest_email'])->queue(new PlayDateConfirmation(
                $playDate,
                $primaryGuest
            ));

            return redirect()->route('play-dates.show', $playDate)
                ->with('success', 'Successfully registered for the play date! Check your email for confirmation details.');
        } catch (\Exception $e) {
            DB::rollBack();
            report($e);
            return back()->withErrors(['error' => 'An error occurred while processing your registration. Please try again.']);
        }
    }

    public function resendInvitation(PlayDate $playDate, PlayDateGuest $guest)
    {
        try {
            if (!$guest->canResendInvitation()) {
                return back()->withErrors(['error' => 'Cannot resend invitation at this time. Please wait 24 hours between resend attempts.']);
            }

            $guest->resendInvitation();

            // Resend invitation email
            Mail::to($guest->guest_email)->queue(new PlayDateInvitation(
                $playDate,
                $guest->playDate->guests()->where('status', 'confirmed')->first(),
                $guest
            ));

            return back()->with('success', 'Invitation has been resent successfully.');
        } catch (\Exception $e) {
            report($e);
            return back()->withErrors(['error' => 'Failed to resend invitation. Please try again.']);
        }
    }

    public function acceptInvitation(Request $request, PlayDate $playDate, PlayDateGuest $guest)
    {
        try {
            if ($request->input('token') !== encrypt($guest->id)) {
                return back()->withErrors(['error' => 'Invalid invitation token.']);
            }

            if ($guest->isInvitationExpired()) {
                return back()->withErrors(['error' => 'This invitation has expired.']);
            }

            $guest->acceptInvitation();
            
            // Track invitation acceptance
            $this->trackRegistrationChanges($guest, 'accepted');

            return redirect()->route('play-dates.show', $playDate)
                ->with('success', 'You have successfully accepted the invitation!');
        } catch (\Exception $e) {
            report($e);
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function cancelRegistration(PlayDate $playDate, PlayDateGuest $guest)
    {
        try {
            $guest->cancelRegistration();

            // Track cancellation
            $this->trackRegistrationChanges($guest, 'cancelled');

            // Send cancellation email
            Mail::to($guest->guest_email)->queue(new PlayDateCancellation(
                $playDate,
                $guest
            ));

            return back()->with('success', 'Your registration has been cancelled successfully.');
        } catch (\Exception $e) {
            report($e);
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function updateRegistration(Request $request, PlayDate $playDate, PlayDateGuest $guest)
    {
        try {
            $validated = $request->validate([
                'guest_name' => 'sometimes|required|string|max:255',
                'guest_email' => 'sometimes|required|email|max:255',
                'guest_phone' => ['sometimes', 'required', 'string', 'max:20', 'regex:/^([0-9\s\-\+\(\)]*)$/'],
            ]);

            // Track changes
            $changes = [];
            foreach ($validated as $field => $value) {
                if ($guest->$field !== $value) {
                    $changes[$field] = [
                        'from' => $guest->$field,
                        'to' => $value,
                    ];
                }
            }

            $guest->updateRegistration($validated);

            // Track update if there were changes
            if (!empty($changes)) {
                $this->trackRegistrationChanges($guest, 'updated', $changes);
            }

            return back()->with('success', 'Your registration has been updated successfully.');
        } catch (\Exception $e) {
            report($e);
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function export(PlayDate $playDate)
    {
        $this->authorize('viewAny', PlayDate::class);

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="play-date-' . $playDate->id . '-registrations.csv"',
            'Pragma' => 'no-cache',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Expires' => '0',
        ];

        $callback = function() use ($playDate) {
            $file = fopen('php://output', 'w');

            // Add headers
            fputcsv($file, [
                'Guest Name',
                'Email',
                'Phone',
                'Status',
                'Payment Status',
                'Is Member',
                'Registration Date',
                'Invitation Status',
                'Invitation Sent',
                'Invitation Expires',
            ]);

            // Add registration data
            foreach ($playDate->guests as $guest) {
                fputcsv($file, [
                    $guest->guest_name,
                    $guest->guest_email,
                    $guest->guest_phone,
                    $guest->status,
                    $guest->payment_status,
                    $guest->is_member ? 'Yes' : 'No',
                    $guest->created_at->format('Y-m-d H:i:s'),
                    $guest->invitation_status,
                    $guest->invitation_sent_at?->format('Y-m-d H:i:s'),
                    $guest->invitation_expires_at?->format('Y-m-d H:i:s'),
                ]);
            }

            // Add summary
            fputcsv($file, []); // Empty line
            fputcsv($file, ['Registration Summary']);
            fputcsv($file, ['Total Registered', $playDate->registration_metrics['total_registered']]);
            fputcsv($file, ['Confirmed', $playDate->registration_metrics['confirmed']]);
            fputcsv($file, ['Cancelled', $playDate->registration_metrics['cancelled']]);
            fputcsv($file, ['Pending', $playDate->registration_metrics['pending']]);
            fputcsv($file, ['Fill Rate', $playDate->registration_metrics['fill_rate'] . '%']);
            
            fputcsv($file, []); // Empty line
            fputcsv($file, ['Invitation Summary']);
            fputcsv($file, ['Total Invitations', $playDate->invitation_metrics['total']]);
            fputcsv($file, ['Accepted', $playDate->invitation_metrics['accepted']]);
            fputcsv($file, ['Expired', $playDate->invitation_metrics['expired']]);
            fputcsv($file, ['Pending', $playDate->invitation_metrics['pending']]);
            fputcsv($file, ['Acceptance Rate', $playDate->invitation_metrics['acceptance_rate'] . '%']);

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

    private function trackRegistrationChanges($guest, $action, $changes = [])
    {
        // Notify all admins
        $admins = User::role(['admin', 'super_admin'])->get();
        Notification::send($admins, new PlayDateRegistrationChanged(
            $guest->playDate,
            $guest,
            $action,
            $changes
        ));
    }

    public function exportIcal(PlayDate $playDate)
    {
        $calendar = $this->calendarService->generateICalForPlayDate($playDate);
        
        return response($calendar)
            ->header('Content-Type', 'text/calendar; charset=utf-8')
            ->header('Content-Disposition', 'attachment; filename="play-date.ics"');
    }

    public function googleCalendarUrl(PlayDate $playDate)
    {
        $url = $this->calendarService->generateGoogleCalendarUrl($playDate);
        
        return response()->json(['url' => $url]);
    }

    public function suggestReschedule(PlayDate $playDate)
    {
        $weather = $this->weatherService->getDetailedForecast($playDate->location, Carbon::parse($playDate->date));
        
        // Only suggest rescheduling for poor conditions
        if (!in_array($weather['play_conditions']['overall_rating'], ['Poor', 'Challenging'])) {
            return response()->json([
                'needs_reschedule' => false,
                'message' => 'Current conditions are suitable for play.',
            ]);
        }

        // Find alternative dates in the next 7 days
        $alternatives = collect(range(1, 7))
            ->map(function ($daysAhead) use ($playDate) {
                $date = Carbon::parse($playDate->date)->addDays($daysAhead);
                $weather = $this->weatherService->getDetailedForecast($playDate->location, $date);
                
                return [
                    'date' => $date->format('Y-m-d'),
                    'conditions' => $weather['play_conditions']['overall_rating'],
                    'recommendation' => $weather['play_conditions']['recommendation'],
                    'best_time' => $weather['play_conditions']['best_time'] ?? null,
                ];
            })
            ->filter(function ($day) {
                return in_array($day['conditions'], ['Excellent', 'Good', 'Fair']);
            })
            ->values();

        return response()->json([
            'needs_reschedule' => true,
            'current_conditions' => [
                'rating' => $weather['play_conditions']['overall_rating'],
                'recommendation' => $weather['play_conditions']['recommendation'],
            ],
            'alternative_dates' => $alternatives,
        ]);
    }
} 