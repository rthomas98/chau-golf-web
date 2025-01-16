<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        Log::info('Newsletter subscription attempt', ['email' => $request->email]);

        $validated = $request->validate([
            'email' => 'required|email|unique:newsletters,email'
        ]);

        try {
            Newsletter::create([
                'email' => $validated['email'],
                'subscribed_at' => now(),
            ]);

            Log::info('Newsletter subscription successful', ['email' => $validated['email']]);

            return back()->with('success', 'Thank you for subscribing to our newsletter!');
        } catch (\Exception $e) {
            Log::error('Newsletter subscription failed', [
                'email' => $validated['email'],
                'error' => $e->getMessage()
            ]);

            return back()->withErrors(['email' => 'An error occurred while subscribing. Please try again.']);
        }
    }
}
