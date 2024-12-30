<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class PlayDateGuest extends Model
{
    use HasFactory;

    protected $fillable = [
        'play_date_id',
        'user_id',
        'guest_name',
        'guest_email',
        'guest_phone',
        'guest_count',
        'status',
        'payment_status',
        'is_member',
        'invitation_sent_at',
        'invitation_expires_at',
        'invitation_status',
    ];

    protected $casts = [
        'is_member' => 'boolean',
        'invitation_sent_at' => 'datetime',
        'invitation_expires_at' => 'datetime',
    ];

    public function playDate()
    {
        return $this->belongsTo(PlayDate::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function isInvitationExpired()
    {
        return $this->invitation_expires_at && $this->invitation_expires_at->isPast();
    }

    public function canResendInvitation()
    {
        return $this->invitation_sent_at &&
            $this->invitation_sent_at->addHours(24)->isPast() &&
            $this->invitation_status !== 'accepted';
    }

    public function resendInvitation()
    {
        $this->update([
            'invitation_sent_at' => now(),
            'invitation_expires_at' => now()->addHours(48),
            'invitation_status' => 'sent',
        ]);
    }

    public function acceptInvitation()
    {
        if ($this->isInvitationExpired()) {
            throw new \Exception('Invitation has expired.');
        }

        $this->update([
            'status' => 'confirmed',
            'invitation_status' => 'accepted',
        ]);
    }

    public function cancelRegistration()
    {
        // Check if cancellation is allowed (24 hours before tee time)
        if ($this->playDate->date->subHours(24)->isPast()) {
            throw new \Exception('Cancellations must be made at least 24 hours before the tee time.');
        }

        $this->update([
            'status' => 'cancelled',
            'invitation_status' => 'cancelled',
        ]);

        // Update spots remaining on play date
        $this->playDate->increment('spots_remaining', $this->guest_count);
    }

    public function updateRegistration(array $data)
    {
        // Check if modification is allowed (24 hours before tee time)
        if ($this->playDate->date->subHours(24)->isPast()) {
            throw new \Exception('Modifications must be made at least 24 hours before the tee time.');
        }

        $this->update($data);
    }
}
