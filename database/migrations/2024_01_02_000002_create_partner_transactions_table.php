<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('partner_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('partner_id')->constrained()->onDelete('cascade');
            $table->string('transaction_type'); // referral, commission_payment, etc.
            $table->decimal('amount', 10, 2);
            $table->decimal('commission_amount', 10, 2);
            $table->string('status')->default('pending'); // pending, completed, cancelled
            $table->string('reference_number')->unique();
            $table->string('customer_name')->nullable();
            $table->string('customer_email')->nullable();
            $table->json('transaction_details')->nullable();
            $table->timestamp('processed_at')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('partner_commission_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('partner_id')->constrained()->onDelete('cascade');
            $table->decimal('amount', 10, 2);
            $table->string('payment_method');
            $table->string('payment_reference');
            $table->string('status')->default('pending');
            $table->date('payment_date');
            $table->text('notes')->nullable();
            $table->json('payment_details')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('partner_revenue_reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('partner_id')->constrained()->onDelete('cascade');
            $table->string('report_type'); // monthly, quarterly, annual
            $table->date('start_date');
            $table->date('end_date');
            $table->decimal('total_revenue', 10, 2);
            $table->decimal('total_commission', 10, 2);
            $table->integer('transaction_count');
            $table->json('report_data');
            $table->string('status')->default('draft');
            $table->timestamp('generated_at')->nullable();
            $table->timestamp('sent_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('partner_revenue_reports');
        Schema::dropIfExists('partner_commission_payments');
        Schema::dropIfExists('partner_transactions');
    }
}; 