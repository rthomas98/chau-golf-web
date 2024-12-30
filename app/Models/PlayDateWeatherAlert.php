<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PlayDateWeatherAlert extends Model
{
    protected $fillable = [
        'play_date_id',
        'sent_at',
        'conditions',
    ];

    protected $casts = [
        'sent_at' => 'datetime',
        'conditions' => 'array',
    ];

    public function playDate(): BelongsTo
    {
        return $this->belongsTo(PlayDate::class);
    }
} 