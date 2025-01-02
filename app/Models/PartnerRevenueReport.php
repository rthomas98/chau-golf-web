<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PartnerRevenueReport extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'partner_id',
        'report_type',
        'start_date',
        'end_date',
        'total_revenue',
        'total_commission',
        'transaction_count',
        'report_data',
        'status',
        'generated_at',
        'sent_at',
    ];

    protected $casts = [
        'report_data' => 'array',
        'start_date' => 'date',
        'end_date' => 'date',
        'generated_at' => 'datetime',
        'sent_at' => 'datetime',
        'total_revenue' => 'decimal:2',
        'total_commission' => 'decimal:2',
    ];

    public function partner(): BelongsTo
    {
        return $this->belongsTo(Partner::class);
    }

    public function markAsGenerated(): void
    {
        $this->update([
            'status' => 'generated',
            'generated_at' => now(),
        ]);
    }

    public function markAsSent(): void
    {
        $this->update([
            'status' => 'sent',
            'sent_at' => now(),
        ]);
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopeGenerated($query)
    {
        return $query->where('status', 'generated');
    }

    public function scopeSent($query)
    {
        return $query->where('status', 'sent');
    }

    public function scopeForPartner($query, $partnerId)
    {
        return $query->where('partner_id', $partnerId);
    }

    public function scopeOfType($query, $type)
    {
        return $query->where('report_type', $type);
    }

    public function scopeInPeriod($query, $startDate, $endDate)
    {
        return $query->whereBetween('start_date', [$startDate, $endDate]);
    }

    public function generateReport(): void
    {
        // Calculate totals from transactions
        $transactions = PartnerTransaction::forPartner($this->partner_id)
            ->completed()
            ->inDateRange($this->start_date, $this->end_date)
            ->get();

        $this->transaction_count = $transactions->count();
        $this->total_revenue = $transactions->sum('amount');
        $this->total_commission = $transactions->sum('commission_amount');

        // Prepare report data
        $this->report_data = [
            'summary' => [
                'total_transactions' => $this->transaction_count,
                'total_revenue' => $this->total_revenue,
                'total_commission' => $this->total_commission,
                'average_transaction_value' => $this->transaction_count > 0 
                    ? $this->total_revenue / $this->transaction_count 
                    : 0,
            ],
            'transactions' => $transactions->map(function ($transaction) {
                return [
                    'date' => $transaction->created_at->format('Y-m-d'),
                    'reference' => $transaction->reference_number,
                    'amount' => $transaction->amount,
                    'commission' => $transaction->commission_amount,
                    'type' => $transaction->transaction_type,
                ];
            })->toArray(),
        ];

        $this->markAsGenerated();
    }
} 