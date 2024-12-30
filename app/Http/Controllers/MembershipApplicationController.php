<?php

namespace App\Http\Controllers;

use App\Models\Membership;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MembershipApplicationController extends Controller
{
    public function create()
    {
        return Inertia::render('Membership/Apply', [
            'hasExistingMembership' => Auth::user()->membership()->exists(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'current_average_score' => ['required', 'numeric', 'min:0', 'max:200'],
            'verified_handicap' => ['nullable', 'numeric', 'min:-10', 'max:50'],
            'special_notes' => ['nullable', 'string', 'max:1000'],
        ]);

        // Determine club level based on average score
        $clubLevel = match(true) {
            $validated['current_average_score'] <= 70 => '70',
            $validated['current_average_score'] <= 80 => '80',
            $validated['current_average_score'] <= 90 => '90',
            default => '100',
        };

        $membership = Membership::create([
            'user_id' => Auth::id(),
            'club_level' => $clubLevel,
            'current_average_score' => $validated['current_average_score'],
            'verified_handicap' => $validated['verified_handicap'],
            'special_notes' => $validated['special_notes'],
            'is_active' => true,
        ]);

        return redirect()->route('dashboard')->with('success', 'Your membership application has been submitted successfully.');
    }
}
