<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RolesAndPermissionsSeeder::class,
        ]);

        // Create default super admin users
        $admins = [
            [
                'name' => 'Super Admin',
                'email' => 'admin@chaugolfapp.com',
                'password' => 'password',
            ],
            [
                'name' => 'Rob Thomas',
                'email' => 'robt84@gmail.com',
                'password' => 'G00dBoySpot!!1013',
            ],
        ];

        foreach ($admins as $adminData) {
            $admin = User::create([
                'name' => $adminData['name'],
                'email' => $adminData['email'],
                'password' => Hash::make($adminData['password']),
                'email_verified_at' => now(),
            ]);

            $admin->assignRole('super_admin');
        }
    }
}
