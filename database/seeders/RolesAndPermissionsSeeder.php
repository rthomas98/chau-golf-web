<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        $permissions = [
            // User management
            'view users',
            'create users',
            'edit users',
            'delete users',
            'invite users',
            
            // Tournament management
            'view tournaments',
            'create tournaments',
            'edit tournaments',
            'delete tournaments',
            'manage tournament players',
            
            // Course management
            'view courses',
            'create courses',
            'edit courses',
            'delete courses',
            
            // Score management
            'view scores',
            'create scores',
            'edit scores',
            'delete scores',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Create roles and assign permissions
        Role::create(['name' => 'player'])
            ->givePermissionTo([
                'view tournaments',
                'view courses',
                'view scores',
                'create scores',
                'edit scores',
            ]);

        Role::create(['name' => 'tournament_manager'])
            ->givePermissionTo([
                'view tournaments',
                'create tournaments',
                'edit tournaments',
                'manage tournament players',
                'view courses',
                'view scores',
                'create scores',
                'edit scores',
                'delete scores',
            ]);

        Role::create(['name' => 'course_manager'])
            ->givePermissionTo([
                'view courses',
                'create courses',
                'edit courses',
                'delete courses',
                'view scores',
            ]);

        // Super Admin role
        $superAdmin = Role::create(['name' => 'super_admin']);
        $superAdmin->givePermissionTo(Permission::all());
    }
}
