<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tournament extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'location',
        'course_name',
        'max_participants',
        'entry_fee',
        'status',
        'format',
        'image_url',
        'prizes',
        'schedule',
        'rules',
        'gallery',
        'testimonials',
        'packages',
        'sponsors',
        'faqs',
        'registration_message',
        'early_bird_offer',
        'spots_remaining',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'prizes' => 'array',
        'schedule' => 'array',
        'rules' => 'array',
        'gallery' => 'array',
        'testimonials' => 'array',
        'packages' => 'array',
        'sponsors' => 'array',
        'faqs' => 'array',
        'entry_fee' => 'decimal:2',
        'spots_remaining' => 'integer',
    ];

    public function participants()
    {
        return $this->belongsToMany(User::class, 'tournament_participants')
            ->withTimestamps()
            ->withPivot('status', 'payment_status', 'score');
    }

    public function guestParticipants()
    {
        return $this->hasMany(GuestParticipant::class);
    }

    public function scopeUpcoming($query)
    {
        return $query->where('start_date', '>', now())
            ->where('status', 'published')
            ->orderBy('start_date');
    }

    public function scopeInProgress($query)
    {
        return $query->where('status', 'in_progress');
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }
}
