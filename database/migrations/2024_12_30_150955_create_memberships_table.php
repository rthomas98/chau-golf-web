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
        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('club_level', ['70', '80', '90', '100'])->default('100');
            $table->decimal('current_average_score', 4, 1)->nullable();
            $table->decimal('verified_handicap', 4, 1)->nullable();
            $table->date('last_tournament_date')->nullable();
            $table->integer('tournament_count')->default(0);
            $table->integer('play_date_count')->default(0);
            $table->date('last_play_date')->nullable();
            $table->boolean('is_active')->default(true);
            $table->text('special_notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memberships');
    }
};
