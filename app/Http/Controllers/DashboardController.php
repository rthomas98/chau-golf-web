<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Dashboard', [
            'auth' => [
                'user' => $request->user(),
            ],
            'hasMembership' => $request->user()->membership()->exists(),
        ]);
    }

    public function registrations(Request $request)
    {
        $user = $request->user();

        // Get user's registered play dates
        $registeredPlayDates = $user->playDateGuests()
            ->with(['playDate' => function ($query) {
                $query->with('host');
            }])
            ->whereHas('playDate', function ($query) {
                $query->where('date', '>=', Carbon::today())
                    ->orderBy('date', 'asc')
                    ->orderBy('tee_time', 'asc');
            })
            ->whereIn('status', ['confirmed', 'pending'])
            ->get()
            ->map(function ($registration) {
                return [
                    'id' => $registration->id,
                    'status' => $registration->status,
                    'guest_name' => $registration->guest_name,
                    'guest_email' => $registration->guest_email,
                    'guest_phone' => $registration->guest_phone,
                    'is_member' => $registration->is_member,
                    'play_date' => [
                        'id' => $registration->playDate->id,
                        'title' => $registration->playDate->title,
                        'description' => $registration->playDate->description,
                        'date' => $registration->playDate->date,
                        'tee_time' => $registration->playDate->tee_time,
                        'course_name' => $registration->playDate->course_name,
                        'location' => $registration->playDate->location,
                        'guest_fee' => $registration->playDate->guest_fee,
                        'host' => [
                            'name' => $registration->playDate->host->name,
                        ],
                    ],
                ];
            });

        // Get user's registered tournaments
        $registeredTournaments = $user->tournamentRegistrations()
            ->with(['tournament'])
            ->whereHas('tournament', function ($query) {
                $query->where('date', '>=', Carbon::today())
                    ->orderBy('date', 'asc')
                    ->orderBy('start_time', 'asc');
            })
            ->whereIn('status', ['confirmed', 'pending'])
            ->get()
            ->map(function ($registration) {
                return [
                    'id' => $registration->id,
                    'status' => $registration->status,
                    'tournament' => [
                        'id' => $registration->tournament->id,
                        'title' => $registration->tournament->title,
                        'description' => $registration->tournament->description,
                        'date' => $registration->tournament->date,
                        'start_time' => $registration->tournament->start_time,
                        'venue' => $registration->tournament->venue,
                        'entry_fee' => $registration->tournament->entry_fee,
                    ],
                ];
            });

        return Inertia::render('Dashboard/Registrations', [
            'registeredPlayDates' => $registeredPlayDates,
            'registeredTournaments' => $registeredTournaments,
        ]);
    }
} 