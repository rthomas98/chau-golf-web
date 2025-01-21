<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Stripe Keys
    |--------------------------------------------------------------------------
    |
    | The Stripe publishable key and secret key give you access to Stripe's
    | API. The "publishable" key is typically used when interacting with
    | Stripe.js while the "secret" key accesses private API endpoints.
    |
    */
    'key' => env('STRIPE_KEY'),
    'secret' => env('STRIPE_SECRET'),

    /*
    |--------------------------------------------------------------------------
    | Stripe Webhooks
    |--------------------------------------------------------------------------
    |
    | Your Stripe webhook secret is used to prevent unauthorized requests to
    | your Stripe webhook handling controllers. The tolerance setting will
    | check the drift between the current time and the signed request's.
    |
    */
    'webhook' => [
        'secret' => env('STRIPE_WEBHOOK_SECRET'),
        'tolerance' => env('STRIPE_WEBHOOK_TOLERANCE', 300),
    ],

    /*
    |--------------------------------------------------------------------------
    | Stripe Currency
    |--------------------------------------------------------------------------
    |
    | This is the default currency that will be used when generating charges
    | from your application. Of course, you are welcome to use any of the
    | various world currencies that are currently supported via Stripe.
    |
    */
    'currency' => env('STRIPE_CURRENCY', 'usd'),

    /*
    |--------------------------------------------------------------------------
    | Stripe Environment
    |--------------------------------------------------------------------------
    |
    | This value determines if you're in test mode or live mode. This helps
    | ensure you don't accidentally use test keys in production or vice versa.
    |
    */
    'environment' => env('STRIPE_ENV', 'test'),

    /*
    |--------------------------------------------------------------------------
    | Stripe Products
    |--------------------------------------------------------------------------
    |
    | These are the product IDs for the different membership types available
    | in the application. These IDs correspond to products created in your
    | Stripe dashboard.
    |
    */
    'products' => [
        'memberships' => [
            'individual' => 'prod_RbTNfGvgw1sC82',
            'business' => 'prod_RbTNNQneqd',
        ],
    ],
];
