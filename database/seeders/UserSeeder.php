<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Create sample users for each role
        $users = [
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@chaugolf.com',
                'password' => Hash::make('password'),
                'role' => 'super_admin',
            ],
            [
                'name' => 'Admin User',
                'email' => 'admin@chaugolf.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ],
            [
                'name' => 'John Member',
                'email' => 'member@chaugolf.com',
                'password' => Hash::make('password'),
                'role' => 'member',
            ],
            [
                'name' => 'Guest Player',
                'email' => 'guest@chaugolf.com',
                'password' => Hash::make('password'),
                'role' => 'guest',
            ],
        ];

        foreach ($users as $userData) {
            $role = $userData['role'];
            unset($userData['role']);
            
            $user = User::create($userData);
            $user->assignRole($role);
        }

        // Create additional member users
        $memberNames = [
            'Alice Johnson',
            'Bob Wilson',
            'Carol Smith',
            'David Brown',
            'Emma Davis',
        ];

        foreach ($memberNames as $name) {
            $email = strtolower(str_replace(' ', '.', $name)) . '@chaugolf.com';
            $user = User::create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make('password'),
            ]);
            $user->assignRole('member');
        }
    }
} 