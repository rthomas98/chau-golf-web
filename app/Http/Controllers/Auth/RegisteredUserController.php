<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Membership;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }

    /**
     * Handle an incoming registration request with plan selection.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function storeWithPlan(Request $request)
    {
        try {
            \Log::info('Registration with plan started', [
                'request_data' => $request->except(['password', 'password_confirmation'])
            ]);

            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
                'current_average_score' => ['required', 'numeric', 'min:0', 'max:200'],
                'verified_handicap' => ['nullable', 'numeric', 'min:-10', 'max:50'],
                'special_notes' => ['nullable', 'string', 'max:1000'],
                'plan_id' => ['required', 'string'],
            ]);

            // Convert empty string to null for verified_handicap
            if (isset($validated['verified_handicap']) && $validated['verified_handicap'] === '') {
                $validated['verified_handicap'] = null;
            }

            \Log::info('Validation passed, creating user');

            DB::beginTransaction();

            try {
                $user = User::create([
                    'name' => $validated['name'],
                    'email' => $validated['email'],
                    'password' => Hash::make($validated['password']),
                ]);

                \Log::info('User created', ['user_id' => $user->id]);

                // Determine club level based on average score
                $clubLevel = match(true) {
                    $validated['current_average_score'] <= 70 => '70',
                    $validated['current_average_score'] <= 80 => '80',
                    $validated['current_average_score'] <= 90 => '90',
                    default => '100',
                };

                // Create membership record
                $membership = Membership::create([
                    'user_id' => $user->id,
                    'club_level' => $clubLevel,
                    'current_average_score' => $validated['current_average_score'],
                    'verified_handicap' => $validated['verified_handicap'],
                    'special_notes' => $validated['special_notes'],
                    'is_active' => false, // Will be activated after payment
                ]);

                \Log::info('Membership created', ['membership_id' => $membership->id]);

                event(new Registered($user));

                Auth::login($user);

                \Log::info('Creating Stripe checkout session', [
                    'user_id' => $user->id,
                    'plan_id' => $validated['plan_id']
                ]);

                // Create Stripe checkout session
                $checkout = $user->newSubscription('default', $validated['plan_id'])
                    ->allowPromotionCodes()
                    ->checkout([
                        'success_url' => route('membership.success', [], true),
                        'cancel_url' => route('membership.cancel', [], true),
                        'payment_method_types' => ['card'],
                        'billing_address_collection' => 'required',
                        'subscription_data' => [
                            'metadata' => [
                                'user_id' => $user->id,
                            ],
                        ],
                        'client_reference_id' => (string) $user->id,
                    ]);

                DB::commit();

                \Log::info('Stripe checkout session created successfully', [
                    'checkout_url' => $checkout->url,
                    'success_url' => route('membership.success', [], true),
                    'cancel_url' => route('membership.cancel', [], true)
                ]);

                // Redirect to Stripe checkout URL using Inertia
                return Inertia::location($checkout->url);

            } catch (\Exception $e) {
                DB::rollBack();
                throw $e;
            }
        } catch (\Exception $e) {
            \Log::error('Registration error:', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            if ($e instanceof \Illuminate\Validation\ValidationException) {
                throw $e;
            }
            
            return Inertia::render('Auth/Register', [
                'error' => $e->getMessage()
            ])->with('error', $e->getMessage());
        }
    }
}
