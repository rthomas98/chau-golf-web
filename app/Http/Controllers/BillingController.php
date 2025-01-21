<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Cashier\Exceptions\CustomerAlreadyCreated;

class BillingController extends Controller
{
    /**
     * Redirect to the Stripe billing portal.
     */
    public function portal(Request $request)
    {
        // Ensure the user has a Stripe customer ID
        if (!$request->user()->stripe_id) {
            try {
                $request->user()->createAsStripeCustomer();
            } catch (CustomerAlreadyCreated $e) {
                // Customer already exists, continue
            }
        }

        return $request->user()->redirectToBillingPortal(route('dashboard'));
    }
}
