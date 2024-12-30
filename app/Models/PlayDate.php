<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PlayDate extends Model
{
    use HasFactory;

    protected $fillable = [
        'host_id',
        'title',
        'description',
        'date',
        'tee_time',
        'location',
        'course_name',
        'max_guests',
        'spots_remaining',
        'guest_fee',
        'status',
        'additional_info',
    ];

    protected $casts = [
        'date' => 'date',
        'tee_time' => 'datetime',
        'max_guests' => 'integer',
        'spots_remaining' => 'integer',
        'guest_fee' => 'decimal:2',
    ];

    public function host(): BelongsTo
    {
        return $this->belongsTo(User::class, 'host_id');
    }

    public function guests(): HasMany
    {
        return $this->hasMany(PlayDateGuest::class);
    }

    public function canAddGuests($count = 1): bool
    {
        return $this->spots_remaining >= $count;
    }

    public function addGuest(array $data): PlayDateGuest
    {
        $guest = $this->guests()->create($data);
        $this->decrement('spots_remaining', $data['guest_count']);

        return $guest;
    }

    public function removeGuest(PlayDateGuest $guest): void
    {
        $guest->delete();
        $this->increment('spots_remaining');
    }

    public function getInvitationMetricsAttribute()
    {
        $invitations = $this->guests()->where('status', 'invited')->get();
        $total = $invitations->count();
        $accepted = $invitations->where('invitation_status', 'accepted')->count();
        $expired = $invitations->filter->isInvitationExpired()->count();
        $pending = $invitations->where('invitation_status', 'sent')->count();

        return [
            'total' => $total,
            'accepted' => $accepted,
            'expired' => $expired,
            'pending' => $pending,
            'acceptance_rate' => $total > 0 ? round(($accepted / $total) * 100, 1) : 0,
        ];
    }

    public function getRegistrationMetricsAttribute()
    {
        $registrations = $this->guests;
        
        return [
            'total_registered' => $registrations->count(),
            'confirmed' => $registrations->where('status', 'confirmed')->count(),
            'cancelled' => $registrations->where('status', 'cancelled')->count(),
            'pending' => $registrations->where('status', 'pending')->count(),
            'spots_filled' => $this->max_guests - $this->spots_remaining,
            'fill_rate' => round((($this->max_guests - $this->spots_remaining) / $this->max_guests) * 100, 1),
        ];
    }

    public function remindersSent(): HasMany
    {
        return $this->hasMany(PlayDateReminder::class);
    }

    public function weatherAlertsSent(): HasMany
    {
        return $this->hasMany(PlayDateWeatherAlert::class);
    }

    protected $appends = ['invitation_metrics', 'registration_metrics'];
}
