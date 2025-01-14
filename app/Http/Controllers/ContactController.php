<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmission;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'topic' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'message' => 'required|string',
            'acceptTerms' => 'required|accepted'
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator->errors());
        }

        try {
            // Send email
            Mail::to(config('mail.from.address'))->send(new ContactFormSubmission($request->all()));

            return back()->with('success', 'Thank you for your message. We will get back to you shortly.');
        } catch (\Exception $e) {
            report($e); // Log the error
            
            return back()->with('error', 'Sorry, there was an error sending your message. Please try again later.');
        }
    }
}
