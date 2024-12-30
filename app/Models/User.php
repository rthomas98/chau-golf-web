<?php

namespace App\Models;

use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Membership;
use App\Models\PlayDateGuest;
use App\Models\PlayDate;

class User extends Authenticatable implements FilamentUser
{
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Determine if the user can access the Filament admin panel.
     */
    public function canAccessPanel(Panel $panel): bool
    {
        return $this->is_admin;
    }

    /**
     * Get the home route for the user based on their role.
     */
    public function getHomeRoute(): string
    {
        if ($this->hasAnyRole(['super_admin', 'tournament_manager'])) {
            return '/admin';
        }

        return '/dashboard';
    }

    public function membership(): HasOne
    {
        return $this->hasOne(Membership::class);
    }

    public function playDateGuests()
    {
        return $this->hasMany(PlayDateGuest::class);
    }

    public function registeredPlayDates()
    {
        return $this->hasManyThrough(
            PlayDate::class,
            PlayDateGuest::class,
            'user_id',
            'id',
            'id',
            'play_date_id'
        );
    }
}
