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
        Schema::create('tournaments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('location');
            $table->string('course_name');
            $table->integer('max_participants')->default(100);
            $table->decimal('entry_fee', 10, 2);
            $table->decimal('member_price', 10, 2)->nullable();
            $table->enum('status', ['draft', 'published', 'in_progress', 'completed', 'cancelled'])->default('draft');
            $table->string('format')->nullable();
            $table->string('image_url')->nullable();
            $table->json('prizes')->nullable();
            $table->json('schedule')->nullable();
            $table->json('rules')->nullable();
            $table->json('gallery')->nullable();
            $table->json('testimonials')->nullable();
            $table->json('packages')->nullable();
            $table->json('sponsors')->nullable();
            $table->json('faqs')->nullable();
            $table->text('registration_message')->nullable();
            $table->text('early_bird_offer')->nullable();
            $table->integer('spots_remaining')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournaments');
    }
};
