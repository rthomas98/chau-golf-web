<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        // Create roles
        $roles = [
            'super_admin',
            'admin',
            'member',
            'guest',
        ];

        foreach ($roles as $role) {
            Role::create([
                'name' => $role,
                'guard_name' => 'web'
            ]);
        }

        // Create permissions
        $permissions = [
            'view_tournaments',
            'create_tournaments',
            'edit_tournaments',
            'delete_tournaments',
            'view_play_dates',
            'create_play_dates',
            'edit_play_dates',
            'delete_play_dates',
            'manage_users',
            'manage_roles',
        ];

        foreach ($permissions as $permission) {
            Permission::create([
                'name' => $permission,
                'guard_name' => 'web'
            ]);
        }

        // Assign permissions to roles
        $superAdmin = Role::findByName('super_admin');
        $admin = Role::findByName('admin');
        $member = Role::findByName('member');
        $guest = Role::findByName('guest');

        // Super Admin gets everything
        $superAdmin->givePermissionTo(Permission::all());

        // Admin gets most permissions except super admin specific ones
        $admin->givePermissionTo([
            'view_tournaments',
            'create_tournaments',
            'edit_tournaments',
            'delete_tournaments',
            'view_play_dates',
            'create_play_dates',
            'edit_play_dates',
            'delete_play_dates',
            'manage_users',
        ]);

        // Members get basic permissions
        $member->givePermissionTo([
            'view_tournaments',
            'view_play_dates',
            'create_play_dates',
        ]);

        // Guests get view-only permissions
        $guest->givePermissionTo([
            'view_tournaments',
            'view_play_dates',
        ]);
    }
} 