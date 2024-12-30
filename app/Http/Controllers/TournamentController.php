<?php

namespace App\Http\Controllers;

use App\Models\Tournament;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\TournamentRegistrationConfirmation;

class TournamentController extends Controller
{
    /**
     * Display the tournament listing page.
     */
    public function index(Request $request)
    {
        $query = Tournament::query()
            ->where(function($q) {
                $q->where('status', 'published')
                  ->orWhere('status', 'in_progress');
            });

        // Search
        if ($request->search) {
            $query->where(function($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                  ->orWhere('description', 'like', "%{$request->search}%")
                  ->orWhere('location', 'like', "%{$request->search}%");
            });
        }

        // Filter by status
        if ($request->status && in_array($request->status, ['published', 'in_progress'])) {
            $query->where('status', $request->status);
        }

        // Filter by date range
        if ($request->date_range) {
            switch ($request->date_range) {
                case 'this_month':
                    $query->whereMonth('start_date', now()->month);
                    break;
                case 'next_month':
                    $query->whereMonth('start_date', now()->addMonth()->month);
                    break;
                case 'next_3_months':
                    $query->whereBetween('start_date', [now(), now()->addMonths(3)]);
                    break;
            }
        }

        // Sort
        $sortField = $request->sort_by ?? 'start_date';
        $sortDirection = $request->sort_direction ?? 'asc';
        $query->orderBy($sortField, $sortDirection);

        $tournaments = $query->paginate(6)->withQueryString();

        return Inertia::render('Tournaments', [
            'tournaments' => $tournaments,
            'filters' => [
                'search' => $request->search,
                'status' => $request->status,
                'date_range' => $request->date_range,
                'sort_by' => $sortField,
                'sort_direction' => $sortDirection
            ]
        ]);
    }

    /**
     * Display the specified tournament.
     */
    public function show(Tournament $tournament)
    {
        // Ensure the tournament is either published or in progress
        abort_if(
            !in_array($tournament->status, ['published', 'in_progress']), 
            404
        );

        $tournament->load('participants');
        
        // Add registration deadline (2 days before tournament)
        $tournament->registration_deadline = $tournament->start_date->subDays(2)->format('Y-m-d');

        // Check if user has membership
        $hasMembership = auth()->check() ? auth()->user()->membership()->exists() : false;

        return Inertia::render('TournamentDetail', [
            'tournament' => $tournament,
            'hasMembership' => $hasMembership,
        ]);
    }

    /**
     * Register a user for a tournament.
     */
    public function register(Tournament $tournament)
    {
        // Validate registration
        if ($tournament->spots_remaining <= 0) {
            return back()->with('error', 'Sorry, this tournament is full.');
        }

        if ($tournament->start_date->subDays(2)->isPast()) {
            return back()->with('error', 'Registration deadline has passed.');
        }

        if (!in_array($tournament->status, ['published'])) {
            return back()->with('error', 'This tournament is not open for registration.');
        }

        // Check if user is already registered
        if ($tournament->participants()->where('user_id', auth()->id())->exists()) {
            return back()->with('error', 'You are already registered for this tournament.');
        }

        // Register user
        $tournament->participants()->attach(auth()->id(), [
            'status' => 'registered',
            'payment_status' => 'pending'
        ]);

        // Decrement spots remaining
        $tournament->decrement('spots_remaining');

        return redirect()->route('dashboard')->with('success', 'Successfully registered for tournament!');
    }

    /**
     * Register a guest for a tournament.
     */
    public function registerGuest(Tournament $tournament, Request $request)
    {
        // Validate guest registration
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
        ]);

        if ($tournament->spots_remaining <= 0) {
            return back()->with('error', 'Sorry, this tournament is full.');
        }

        if ($tournament->start_date->subDays(2)->isPast()) {
            return back()->with('error', 'Registration deadline has passed.');
        }

        if (!in_array($tournament->status, ['published'])) {
            return back()->with('error', 'This tournament is not open for registration.');
        }

        // Generate a unique registration code
        $registrationCode = strtoupper(substr(md5(uniqid()), 0, 8));

        // Create guest participant record
        $participant = $tournament->guestParticipants()->create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'registration_code' => $registrationCode,
            'status' => 'registered',
            'payment_status' => 'pending',
        ]);

        // Decrement spots remaining
        $tournament->decrement('spots_remaining');

        // Send confirmation email with payment instructions
        Mail::to($validated['email'])->send(new TournamentRegistrationConfirmation(
            $tournament,
            $participant,
            $registrationCode
        ));

        return back()->with('success', 'Registration successful! Please check your email for payment instructions and your registration code.');
    }
} 