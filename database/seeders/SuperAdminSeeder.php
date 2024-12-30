<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SuperAdminSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'robt84@gmail.com'],
            [
                'name' => 'Rob Thomas',
                'password' => Hash::make('G00dBoySpot!!1013'),
                'email_verified_at' => now(),
                'is_admin' => true,
            ]
        );
    }
}
