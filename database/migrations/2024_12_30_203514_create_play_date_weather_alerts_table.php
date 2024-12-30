<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('play_date_weather_alerts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('play_date_id')->constrained()->onDelete('cascade');
            $table->timestamp('sent_at');
            $table->json('conditions');
            $table->timestamps();

            // Index for efficient querying of recent alerts
            $table->index(['play_date_id', 'sent_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('play_date_weather_alerts');
    }
};
