<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Partner extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'company_name',
        'email',
        'phone',
        'website',
        'description',
        'partnership_type',
        'status',
        'commission_rate',
        'benefits',
        'agreement_terms',
        'partnership_start',
        'partnership_end',
        'logo_url',
        'social_media',
        'notes',
    ];

    protected $casts = [
        'benefits' => 'array',
        'agreement_terms' => 'array',
        'social_media' => 'array',
        'partnership_start' => 'date',
        'partnership_end' => 'date',
        'commission_rate' => 'decimal:2',
    ];

    public function transactions(): HasMany
    {
        return $this->hasMany(PartnerTransaction::class);
    }

    public function commissionPayments(): HasMany
    {
        return $this->hasMany(PartnerCommissionPayment::class);
    }

    public function revenueReports(): HasMany
    {
        return $this->hasMany(PartnerRevenueReport::class);
    }

    public function activate(): void
    {
        $this->update(['status' => 'active']);
    }

    public function deactivate(): void
    {
        $this->update(['status' => 'inactive']);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeInactive($query)
    {
        return $query->where('status', 'inactive');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
} 