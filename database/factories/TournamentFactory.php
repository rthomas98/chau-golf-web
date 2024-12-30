<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tournament>
 */
class TournamentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = fake()->dateTimeBetween('now', '+6 months');
        $endDate = fake()->dateTimeBetween($startDate, date('Y-m-d', strtotime('+2 days', $startDate->getTimestamp())));
        $maxParticipants = fake()->numberBetween(50, 200);
        $spotsRemaining = fake()->numberBetween(0, $maxParticipants);

        return [
            'name' => fake()->randomElement([
                'ChauChau Golf Classic',
                'Summer Championship',
                'Pro-Am Tournament',
                'Club Championship',
                'Masters Series',
                'Open Championship',
            ]) . ' ' . date('Y'),
            'description' => fake()->paragraphs(3, true),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'location' => fake()->city() . ', ' . fake()->state(),
            'course_name' => fake()->company() . ' Golf Club',
            'max_participants' => $maxParticipants,
            'entry_fee' => fake()->randomFloat(2, 100, 1000),
            'status' => fake()->randomElement(['draft', 'published', 'in_progress', 'completed']),
            'format' => fake()->randomElement(['Stroke Play', 'Match Play', 'Scramble', 'Best Ball']),
            'image_url' => fake()->imageUrl(1920, 1080, 'golf'),
            'prizes' => [
                '1st Place' => '$' . fake()->numberBetween(1000, 5000),
                '2nd Place' => '$' . fake()->numberBetween(500, 2000),
                '3rd Place' => '$' . fake()->numberBetween(250, 1000),
                'Longest Drive' => '$' . fake()->numberBetween(100, 500),
                'Closest to Pin' => '$' . fake()->numberBetween(100, 500),
            ],
            'schedule' => [
                '7:00 AM' => 'Registration Opens',
                '8:00 AM' => 'Practice Range Opens',
                '9:00 AM' => 'Tournament Briefing',
                '10:00 AM' => 'Shotgun Start',
                '3:00 PM' => 'Tournament End',
                '4:00 PM' => 'Awards Ceremony',
            ],
            'rules' => [
                'Rule 1' => 'USGA Rules Apply',
                'Rule 2' => 'Local Rules in Effect',
                'Rule 3' => 'Maximum Handicap: 24',
                'Rule 4' => 'Proper Golf Attire Required',
                'Rule 5' => 'Pace of Play Guidelines Enforced',
            ],
            'gallery' => [
                [
                    'image' => fake()->imageUrl(800, 600, 'golf'),
                    'caption' => 'Tournament Highlights',
                    'category' => 'Action',
                ],
                [
                    'image' => fake()->imageUrl(800, 600, 'golf'),
                    'caption' => 'Award Ceremony',
                    'category' => 'Events',
                ],
            ],
            'testimonials' => [
                [
                    'name' => fake()->name(),
                    'title' => 'Previous Champion',
                    'year' => fake()->year(),
                    'quote' => fake()->sentence(20),
                    'rating' => fake()->numberBetween(4, 5),
                    'avatar' => fake()->imageUrl(200, 200, 'people'),
                ],
                [
                    'name' => fake()->name(),
                    'title' => 'Tournament Participant',
                    'year' => fake()->year(),
                    'quote' => fake()->sentence(20),
                    'rating' => fake()->numberBetween(4, 5),
                    'avatar' => fake()->imageUrl(200, 200, 'people'),
                ],
            ],
            'packages' => [
                [
                    'name' => 'Standard Entry',
                    'price' => fake()->numberBetween(100, 300),
                    'description' => 'Basic tournament entry package',
                    'features' => ['Tournament Entry', 'Practice Balls', 'Lunch'],
                ],
                [
                    'name' => 'Premium Package',
                    'price' => fake()->numberBetween(300, 600),
                    'description' => 'Enhanced tournament experience',
                    'features' => ['Tournament Entry', 'Practice Balls', 'Lunch', 'Cart', 'Gift Bag', 'Awards Dinner'],
                ],
            ],
            'sponsors' => [
                [
                    'tier' => 'Gold',
                    'sponsors' => [
                        [
                            'name' => fake()->company(),
                            'logo' => fake()->imageUrl(200, 100, 'business'),
                            'description' => fake()->sentence(),
                        ],
                    ],
                ],
                [
                    'tier' => 'Silver',
                    'sponsors' => [
                        [
                            'name' => fake()->company(),
                            'logo' => fake()->imageUrl(200, 100, 'business'),
                            'description' => fake()->sentence(),
                        ],
                    ],
                ],
            ],
            'faqs' => [
                [
                    'question' => 'What is the format of the tournament?',
                    'answer' => fake()->paragraph(),
                    'category' => 'General',
                ],
                [
                    'question' => 'What is included in the entry fee?',
                    'answer' => fake()->paragraph(),
                    'category' => 'Registration',
                ],
                [
                    'question' => 'What is the cancellation policy?',
                    'answer' => fake()->paragraph(),
                    'category' => 'Policies',
                ],
            ],
            'registration_message' => fake()->paragraph(),
            'early_bird_offer' => 'Register before ' . fake()->date() . ' and save 20%!',
            'spots_remaining' => $spotsRemaining,
        ];
    }

    /**
     * Indicate that the tournament is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
        ]);
    }

    /**
     * Indicate that the tournament is in progress.
     */
    public function inProgress(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'in_progress',
        ]);
    }

    /**
     * Indicate that the tournament is completed.
     */
    public function completed(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'completed',
        ]);
    }
}
