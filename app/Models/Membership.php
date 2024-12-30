<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Membership extends Model
{
    protected $fillable = [
        'user_id',
        'club_level',
        'current_average_score',
        'verified_handicap',
        'last_tournament_date',
        'tournament_count',
        'play_date_count',
        'last_play_date',
        'is_active',
        'special_notes',
    ];

    protected $casts = [
        'current_average_score' => 'decimal:1',
        'verified_handicap' => 'decimal:1',
        'last_tournament_date' => 'date',
        'last_play_date' => 'date',
        'is_active' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function determineClubLevel(float $score): string
    {
        if ($score <= 70) return '70';
        if ($score <= 80) return '80';
        if ($score <= 90) return '90';
        return '100';
    }

    public function needsParticipation(): bool
    {
        if (!$this->last_play_date) return true;
        
        $sixMonthsAgo = now()->subMonths(6);
        return $this->play_date_count < 2 && $this->last_play_date->lt($sixMonthsAgo);
    }

    public function isEligibleForPromotion(float $tournamentAverage): bool
    {
        return $tournamentAverage < match($this->club_level) {
            '100' => 91,
            '90' => 81,
            '80' => 71,
            default => PHP_FLOAT_MAX,
        };
    }

    public function isEligibleForDemotion(float $tournamentAverage): bool
    {
        return $tournamentAverage > match($this->club_level) {
            '70' => 70,
            '80' => 80,
            '90' => 90,
            default => 100,
        };
    }
}
