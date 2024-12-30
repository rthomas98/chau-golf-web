<?php

namespace App\Console\Commands;

use App\Models\PlayDate;
use App\Notifications\WeatherAlert;
use App\Services\WeatherService;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendWeatherAlerts extends Command
{
    protected $signature = 'play-dates:weather-alerts';
    protected $description = 'Send weather alerts for upcoming play dates';

    protected $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        parent::__construct();
        $this->weatherService = $weatherService;
    }

    public function handle()
    {
        // Check weather for play dates in the next 48 hours
        $playDates = PlayDate::query()
            ->where('status', 'open')
            ->where('date', '>=', now())
            ->where('date', '<=', now()->addHours(48))
            ->whereDoesntHave('weatherAlertsSent', function ($query) {
                $query->where('sent_at', '>=', now()->subHours(6));
            })
            ->get();

        foreach ($playDates as $playDate) {
            $weather = $this->weatherService->getDetailedForecast($playDate->location, Carbon::parse($playDate->date));
            
            // Check if weather conditions are concerning
            if ($this->shouldSendAlert($weather)) {
                // Notify host
                $playDate->host->notify(new WeatherAlert($playDate, $weather));
                
                // Notify confirmed guests
                $playDate->guests()
                    ->where('status', 'confirmed')
                    ->get()
                    ->each(function ($guest) use ($playDate, $weather) {
                        if ($guest->user) {
                            $guest->user->notify(new WeatherAlert($playDate, $weather));
                        }
                    });
                
                // Record that we sent weather alerts
                $playDate->weatherAlertsSent()->create([
                    'sent_at' => now(),
                    'conditions' => json_encode($weather),
                ]);

                $this->info("Sent weather alerts for play date: {$playDate->title}");
            }
        }

        $this->info('Weather alerts check completed.');
    }

    private function shouldSendAlert($weather)
    {
        // Send alerts for poor or challenging conditions
        if (in_array($weather['play_conditions']['overall_rating'], ['Poor', 'Challenging'])) {
            return true;
        }

        // Check for severe weather conditions
        $conditions = strtolower($weather['current']['conditions']);
        $severeConditions = ['thunderstorm', 'heavy rain', 'storm', 'snow', 'sleet', 'hail'];
        
        foreach ($severeConditions as $condition) {
            if (str_contains($conditions, $condition)) {
                return true;
            }
        }

        // Check for extreme temperatures
        $temp = (int) $weather['current']['temperature'];
        if ($temp < 45 || $temp > 95) {
            return true;
        }

        // Check for high winds
        $windSpeed = (int) $weather['daily_stats']['max_wind'];
        if ($windSpeed > 25) {
            return true;
        }

        // Check for high precipitation chance
        $precipChance = (int) $weather['daily_stats']['precipitation_chance'];
        if ($precipChance > 70) {
            return true;
        }

        return false;
    }
} 