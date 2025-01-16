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
            
            return $user->newSubscription('default', $priceId)
                ->allowPromotionCodes()
                ->checkout([
                    'success_url' => route('membership.success'),
                    'cancel_url' => route('membership.cancel'),
                ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
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
