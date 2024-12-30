<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GuestParticipant extends Model
{
    protected $fillable = [
        'tournament_id',
        'name',
        'email',
        'phone',
        'registration_code',
        'status',
        'payment_status',
        'score',
    ];

    public function tournament(): BelongsTo
    {
        return $this->belongsTo(Tournament::class);
    }
} 