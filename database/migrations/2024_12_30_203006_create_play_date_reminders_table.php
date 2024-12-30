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
        Schema::create('play_date_reminders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('play_date_id')->constrained()->onDelete('cascade');
            $table->integer('hours_before');
            $table->timestamp('sent_at');
            $table->timestamps();

            // Ensure we don't send duplicate reminders for the same hour mark
            $table->unique(['play_date_id', 'hours_before']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('play_date_reminders');
    }
};
