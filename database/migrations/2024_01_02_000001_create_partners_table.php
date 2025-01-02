<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('company_name');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->string('website')->nullable();
            $table->text('description')->nullable();
            $table->string('partnership_type');
            $table->string('status')->default('pending');
            $table->decimal('commission_rate', 5, 2)->nullable();
            $table->json('benefits')->nullable();
            $table->json('agreement_terms')->nullable();
            $table->date('partnership_start')->nullable();
            $table->date('partnership_end')->nullable();
            $table->string('logo_url')->nullable();
            $table->json('social_media')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('partners');
    }
}; 