<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('play_dates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('host_id')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->text('description')->nullable();
            $table->date('date');
            $table->time('tee_time');
            $table->string('location');
            $table->string('course_name');
            $table->integer('max_guests')->default(2);
            $table->integer('spots_remaining')->default(2);
            $table->decimal('guest_fee', 8, 2);
            $table->enum('status', ['draft', 'open', 'full', 'cancelled', 'completed'])->default('draft');
            $table->json('additional_info')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('play_dates');
    }
}; 