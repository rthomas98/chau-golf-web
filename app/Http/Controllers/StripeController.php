<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Cashier\Exceptions\IncompletePayment;

class StripeController extends Controller
{
    public function createCheckoutSession(Request $request)
    {
        try {
            $user = auth()->user();
            $priceId = $request->price_id;
            
            \Log::info('Creating Stripe checkout session', [
                'user_id' => $user->id,
                'price_id' => $priceId
            ]);
            
            $checkout = $user->newSubscription('default', $priceId)
                ->allowPromotionCodes()
                ->checkout([
                    'success_url' => route('membership.success'),
                    'cancel_url' => route('membership.cancel'),
                    'mode' => 'subscription',
                    'subscription_data' => [
                        'metadata' => [
                            'user_id' => $user->id,
                        ],
                    ],
                ]);

            \Log::info('Stripe checkout session created', [
                'checkout_url' => $checkout->url
            ]);

            return redirect($checkout->url);
        } catch (\Exception $e) {
            \Log::error('Stripe checkout error', [
                'error' => $e->getMessage()
            ]);
            return back()->with('error', $e->getMessage());
        }
    }

    public function success()
    {
        return inertia('Membership/Success');
    }

    public function cancel()
    {
        return redirect()->route('membership.index')
            ->with('error', 'Membership subscription was cancelled.');
    }
}
