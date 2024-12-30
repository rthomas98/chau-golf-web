<?php

namespace Database\Seeders;

use App\Models\Tournament;
use Illuminate\Database\Seeder;

class TournamentSeeder extends Seeder
{
    public function run(): void
    {
        $tournaments = [
            [
                'name' => 'Spring Championship 2024',
                'description' => 'Join us for our annual Spring Championship! This prestigious event features 36 holes of stroke play across two days on our championship course.',
                'start_date' => '2024-04-15',
                'end_date' => '2024-04-16',
                'location' => 'Chau Chau Golf Club',
                'course_name' => 'Championship Course',
                'max_participants' => 144,
                'spots_remaining' => 144,
                'entry_fee' => 250.00,
                'member_price' => 200.00,
                'status' => 'published',
                'format' => 'Stroke Play',
                'prizes' => [
                    '1st Place' => '$5,000',
                    '2nd Place' => '$2,500',
                    '3rd Place' => '$1,000',
                    'Closest to Pin' => '$500',
                    'Longest Drive' => '$500'
                ],
                'schedule' => [
                    'Day 1 - 7:00 AM' => 'Registration Opens',
                    'Day 1 - 8:00 AM' => 'First Round Begins',
                    'Day 1 - 5:00 PM' => 'Day 1 Concludes',
                    'Day 2 - 8:00 AM' => 'Final Round Begins',
                    'Day 2 - 4:00 PM' => 'Awards Ceremony'
                ],
                'rules' => [
                    'Rule 1' => 'USGA Rules Apply',
                    'Rule 2' => 'Local Rules in Effect',
                    'Rule 3' => 'No Range Finders',
                    'Rule 4' => 'Pace of Play Guidelines Enforced'
                ],
                'registration_message' => 'Early registration recommended. Space is limited to 144 players.',
                'early_bird_offer' => 'Register before March 15th and save $50 on entry fee!'
            ],
            [
                'name' => 'Summer Classic 2024',
                'description' => 'Experience the thrill of our Summer Classic! This tournament features team play format with exciting prizes and networking opportunities.',
                'start_date' => '2024-07-20',
                'end_date' => '2024-07-21',
                'location' => 'Chau Chau Golf Club',
                'course_name' => 'Lake Course',
                'max_participants' => 120,
                'spots_remaining' => 120,
                'entry_fee' => 200.00,
                'member_price' => 160.00,
                'status' => 'published',
                'format' => 'Team Scramble',
                'prizes' => [
                    'Winning Team' => '$3,000',
                    'Runner-up Team' => '$1,500',
                    'Third Place Team' => '$750',
                    'Closest to Pin' => '$300',
                    'Longest Drive' => '$300'
                ],
                'schedule' => [
                    'Day 1 - 6:30 AM' => 'Registration Opens',
                    'Day 1 - 7:30 AM' => 'Shotgun Start',
                    'Day 1 - 4:00 PM' => 'Day 1 Reception',
                    'Day 2 - 7:30 AM' => 'Final Round',
                    'Day 2 - 3:00 PM' => 'Awards Ceremony'
                ],
                'rules' => [
                    'Rule 1' => 'Scramble Format Rules Apply',
                    'Rule 2' => 'Maximum 2 Drives per Player',
                    'Rule 3' => 'No Professionals Allowed',
                    'Rule 4' => '6-inch Improvement Everywhere'
                ],
                'registration_message' => 'Team registration only. Maximum handicap 24.',
                'early_bird_offer' => 'Register before June 1st and receive complimentary practice round!'
            ],
            [
                'name' => 'Fall Cup 2024',
                'description' => 'The Fall Cup is our premier match play event. Test your skills against fellow members in this season-ending tournament.',
                'start_date' => '2024-10-05',
                'end_date' => '2024-10-06',
                'location' => 'Chau Chau Golf Club',
                'course_name' => 'Valley Course',
                'max_participants' => 64,
                'spots_remaining' => 64,
                'entry_fee' => 175.00,
                'member_price' => 140.00,
                'status' => 'draft',
                'format' => 'Match Play',
                'prizes' => [
                    'Champion' => '$2,000',
                    'Runner-up' => '$1,000',
                    'Semi-finalists' => '$500',
                    'Closest to Pin' => '$250',
                    'Longest Drive' => '$250'
                ],
                'schedule' => [
                    'Day 1 - 7:00 AM' => 'Round of 64',
                    'Day 1 - 12:00 PM' => 'Round of 32',
                    'Day 1 - 4:00 PM' => 'Round of 16',
                    'Day 2 - 8:00 AM' => 'Quarter Finals',
                    'Day 2 - 1:00 PM' => 'Semi Finals',
                    'Day 2 - 3:30 PM' => 'Championship Match'
                ],
                'rules' => [
                    'Rule 1' => 'USGA Match Play Rules',
                    'Rule 2' => 'Sudden Death Playoff',
                    'Rule 3' => 'Maximum Handicap 18',
                    'Rule 4' => 'All Matches Must Complete Same Day'
                ],
                'registration_message' => 'Limited to first 64 registrants. Waitlist available.',
                'early_bird_offer' => 'Early registrants receive premium gift package!'
            ],
            [
                'name' => 'Winter Challenge 2024',
                'description' => 'Brave the elements in our Winter Challenge! This unique tournament features a modified format to accommodate winter conditions.',
                'start_date' => '2024-12-10',
                'end_date' => '2024-12-11',
                'location' => 'Chau Chau Golf Club',
                'course_name' => 'Winter Course',
                'max_participants' => 80,
                'spots_remaining' => 80,
                'entry_fee' => 150.00,
                'member_price' => 120.00,
                'status' => 'draft',
                'format' => 'Modified Stableford',
                'prizes' => [
                    '1st Place' => '$1,500',
                    '2nd Place' => '$750',
                    '3rd Place' => '$500',
                    'Most Points in Round' => '$250',
                    'Closest to Pin' => '$250'
                ],
                'schedule' => [
                    'Day 1 - 8:00 AM' => 'Registration',
                    'Day 1 - 9:00 AM' => 'First Round',
                    'Day 1 - 3:00 PM' => 'Warm-up Reception',
                    'Day 2 - 9:00 AM' => 'Final Round',
                    'Day 2 - 2:30 PM' => 'Awards Ceremony'
                ],
                'rules' => [
                    'Rule 1' => 'Modified Stableford Scoring',
                    'Rule 2' => 'Preferred Lies',
                    'Rule 3' => 'Winter Rules in Effect',
                    'Rule 4' => 'Frost Delay Procedures'
                ],
                'registration_message' => 'Weather appropriate gear required. Hot beverages provided!',
                'early_bird_offer' => 'Early registrants receive winter gear package!'
            ]
        ];

        foreach ($tournaments as $tournamentData) {
            Tournament::create($tournamentData);
        }
    }
}
