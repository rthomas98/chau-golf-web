<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PlayDate;
use App\Models\User;
use Carbon\Carbon;

class PlayDateSeeder extends Seeder
{
    public function run(): void
    {
        // Get member users to be hosts
        $memberUsers = User::role('member')->get();
        
        $playDates = [
            [
                'title' => 'Morning Round at Presidio',
                'description' => 'Join us for an early morning round at the historic Presidio Golf Course. Perfect for golfers looking to start their day with a challenging round.',
                'date' => Carbon::now()->addDays(7)->format('Y-m-d'),
                'tee_time' => '07:30:00',
                'location' => 'San Francisco, CA',
                'course_name' => 'Presidio Golf Course',
                'guest_fee' => 85.00,
                'spots_remaining' => 3,
                'max_guests' => 4,
                'status' => 'open',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Afternoon at Half Moon Bay',
                'description' => 'Experience the breathtaking ocean views while playing the renowned Ocean Course at Half Moon Bay Golf Links.',
                'date' => Carbon::now()->addDays(14)->format('Y-m-d'),
                'tee_time' => '14:00:00',
                'location' => 'Half Moon Bay, CA',
                'course_name' => 'Half Moon Bay Golf Links',
                'guest_fee' => 195.00,
                'spots_remaining' => 2,
                'max_guests' => 4,
                'status' => 'open',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Sunset Round at TPC Harding Park',
                'description' => 'End your day with a memorable round at TPC Harding Park, home to numerous PGA Tour events.',
                'date' => Carbon::now()->addDays(21)->format('Y-m-d'),
                'tee_time' => '16:30:00',
                'location' => 'San Francisco, CA',
                'course_name' => 'TPC Harding Park',
                'guest_fee' => 165.00,
                'spots_remaining' => 4,
                'max_guests' => 4,
                'status' => 'open',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Weekend at Pasatiempo',
                'description' => 'Play one of Alister MacKenzie\'s masterpieces at the world-renowned Pasatiempo Golf Club.',
                'date' => Carbon::now()->addDays(28)->format('Y-m-d'),
                'tee_time' => '09:00:00',
                'location' => 'Santa Cruz, CA',
                'course_name' => 'Pasatiempo Golf Club',
                'guest_fee' => 295.00,
                'spots_remaining' => 1,
                'max_guests' => 4,
                'status' => 'open',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Morning at Sharp Park',
                'description' => 'Enjoy a morning round at this historic Alister MacKenzie designed municipal course with ocean views.',
                'date' => Carbon::now()->addDays(35)->format('Y-m-d'),
                'tee_time' => '08:00:00',
                'location' => 'Pacifica, CA',
                'course_name' => 'Sharp Park Golf Course',
                'guest_fee' => 55.00,
                'spots_remaining' => 3,
                'max_guests' => 4,
                'status' => 'open',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Afternoon at Lake Merced',
                'description' => 'Experience one of Northern California\'s premier private clubs with a guest round at Lake Merced.',
                'date' => Carbon::now()->addDays(42)->format('Y-m-d'),
                'tee_time' => '13:30:00',
                'location' => 'Daly City, CA',
                'course_name' => 'Lake Merced Golf Club',
                'guest_fee' => 225.00,
                'spots_remaining' => 2,
                'max_guests' => 4,
                'status' => 'open',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($playDates as $index => $playDate) {
            // Assign a random member as host
            $playDate['host_id'] = $memberUsers[$index % count($memberUsers)]->id;
            PlayDate::create($playDate);
        }
    }
} 