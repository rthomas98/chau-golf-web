<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PlayDateReminder extends Model
{
    protected $fillable = [
        'play_date_id',
        'hours_before',
        'sent_at',
    ];

    protected $casts = [
        'sent_at' => 'datetime',
    ];

    public function playDate(): BelongsTo
    {
        return $this->belongsTo(PlayDate::class);
    }
} 