<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;

class WeatherService
{
    protected $apiKey;
    protected $baseUrl = 'https://api.openweathermap.org/data/2.5';
    protected $geoUrl = 'http://api.openweathermap.org/geo/1.0';

    public function __construct()
    {
        $this->apiKey = config('services.openweather.key');
    }

    public function getDetailedForecast(string $location, Carbon $date)
    {
        $cacheKey = "weather_forecast_{$location}_{$date->format('Y-m-d')}";
        
        return Cache::remember($cacheKey, 3600, function () use ($location, $date) {
            try {
                $coordinates = $this->getCoordinates($location);
                if (!$coordinates) {
                    return $this->getDefaultWeather();
                }

                $forecast = $this->getForecastData($coordinates['lat'], $coordinates['lon']);
                if (!$forecast) {
                    return $this->getDefaultWeather();
                }

                return $this->processWeatherData($forecast, $date);
            } catch (\Exception $e) {
                report($e);
                return $this->getDefaultWeather();
            }
        });
    }

    protected function getCoordinates(string $location)
    {
        $response = Http::get("{$this->geoUrl}/direct", [
            'q' => $location,
            'limit' => 1,
            'appid' => $this->apiKey,
        ]);

        if ($response->successful() && !empty($response->json())) {
            $data = $response->json()[0];
            return [
                'lat' => $data['lat'],
                'lon' => $data['lon'],
            ];
        }

        return null;
    }

    protected function getForecastData($lat, $lon)
    {
        $response = Http::get("{$this->baseUrl}/forecast", [
            'lat' => $lat,
            'lon' => $lon,
            'appid' => $this->apiKey,
            'units' => 'imperial',
            'exclude' => 'minutely,alerts',
        ]);

        return $response->successful() ? $response->json() : null;
    }

    protected function processWeatherData(array $forecast, Carbon $targetDate)
    {
        $relevantForecasts = collect($forecast['list'])
            ->map(function ($forecast) {
                $forecast['datetime'] = Carbon::createFromTimestamp($forecast['dt']);
                return $forecast;
            })
            ->filter(function ($forecast) use ($targetDate) {
                return $forecast['datetime']->isSameDay($targetDate);
            });

        if ($relevantForecasts->isEmpty()) {
            return $this->getDefaultWeather();
        }

        // Get morning, afternoon, and evening forecasts
        $dayForecasts = [
            'morning' => $this->findClosestForecast($relevantForecasts, $targetDate->copy()->setTime(8, 0)),
            'afternoon' => $this->findClosestForecast($relevantForecasts, $targetDate->copy()->setTime(13, 0)),
            'evening' => $this->findClosestForecast($relevantForecasts, $targetDate->copy()->setTime(17, 0)),
        ];

        // Calculate daily stats
        $temperatures = $relevantForecasts->pluck('main.temp');
        $windSpeeds = $relevantForecasts->pluck('wind.speed');

        return [
            'current' => $this->formatForecastPeriod($dayForecasts['afternoon'] ?? $relevantForecasts->first()),
            'periods' => [
                'morning' => $dayForecasts['morning'] ? $this->formatForecastPeriod($dayForecasts['morning']) : null,
                'afternoon' => $dayForecasts['afternoon'] ? $this->formatForecastPeriod($dayForecasts['afternoon']) : null,
                'evening' => $dayForecasts['evening'] ? $this->formatForecastPeriod($dayForecasts['evening']) : null,
            ],
            'daily_stats' => [
                'high_temp' => round($temperatures->max()) . '°F',
                'low_temp' => round($temperatures->min()) . '°F',
                'avg_temp' => round($temperatures->avg()) . '°F',
                'max_wind' => round($windSpeeds->max()) . ' mph',
                'avg_wind' => round($windSpeeds->avg()) . ' mph',
                'precipitation_chance' => round($relevantForecasts->pluck('pop')->max() * 100) . '%',
            ],
            'play_conditions' => $this->assessPlayConditions($relevantForecasts->toArray()),
        ];
    }

    protected function findClosestForecast($forecasts, Carbon $targetTime)
    {
        return $forecasts
            ->sortBy(function ($forecast) use ($targetTime) {
                return abs($forecast['datetime']->diffInSeconds($targetTime));
            })
            ->first();
    }

    protected function formatForecastPeriod($forecast)
    {
        if (!$forecast) return null;

        return [
            'temperature' => round($forecast['main']['temp']) . '°F',
            'feels_like' => round($forecast['main']['feels_like']) . '°F',
            'humidity' => $forecast['main']['humidity'] . '%',
            'conditions' => ucfirst($forecast['weather'][0]['description']),
            'wind' => round($forecast['wind']['speed']) . ' mph ' . $this->getWindDirection($forecast['wind']['deg']),
            'precipitation' => round($forecast['pop'] * 100) . '%',
            'icon' => $forecast['weather'][0]['icon'],
            'time' => Carbon::createFromTimestamp($forecast['dt'])->format('g:i A'),
        ];
    }

    protected function assessPlayConditions(array $forecasts)
    {
        $conditions = collect($forecasts)->map(function ($forecast) {
            $score = 100;
            
            // Temperature penalties
            $temp = $forecast['main']['temp'];
            if ($temp < 45 || $temp > 95) $score -= 30;
            elseif ($temp < 55 || $temp > 85) $score -= 15;
            
            // Wind penalties
            $windSpeed = $forecast['wind']['speed'];
            if ($windSpeed > 25) $score -= 30;
            elseif ($windSpeed > 15) $score -= 15;
            
            // Rain penalties
            $pop = $forecast['pop'];
            if ($pop > 0.7) $score -= 40;
            elseif ($pop > 0.4) $score -= 20;
            
            // Visibility/conditions penalties
            if (str_contains(strtolower($forecast['weather'][0]['description']), 'rain')) $score -= 25;
            if (str_contains(strtolower($forecast['weather'][0]['description']), 'storm')) $score -= 35;
            
            return [
                'time' => Carbon::createFromTimestamp($forecast['dt'])->format('g:i A'),
                'score' => max(0, $score),
                'rating' => $this->getPlayabilityRating($score),
            ];
        });

        $bestTime = $conditions->sortByDesc('score')->first();
        $worstTime = $conditions->sortBy('score')->first();

        return [
            'overall_rating' => $this->getPlayabilityRating($conditions->avg('score')),
            'best_time' => $bestTime,
            'worst_time' => $worstTime,
            'recommendation' => $this->getPlayRecommendation($conditions->avg('score')),
        ];
    }

    protected function getPlayabilityRating($score)
    {
        if ($score >= 90) return 'Excellent';
        if ($score >= 75) return 'Good';
        if ($score >= 60) return 'Fair';
        if ($score >= 40) return 'Challenging';
        return 'Poor';
    }

    protected function getPlayRecommendation($averageScore)
    {
        if ($averageScore >= 90) {
            return 'Perfect conditions for golf. Enjoy your round!';
        } elseif ($averageScore >= 75) {
            return 'Good conditions for golf. Bring sunscreen and stay hydrated.';
        } elseif ($averageScore >= 60) {
            return 'Playable conditions but be prepared for some weather challenges.';
        } elseif ($averageScore >= 40) {
            return 'Consider rescheduling if possible. Weather conditions may impact play.';
        } else {
            return 'Not recommended for play. Severe weather conditions expected.';
        }
    }

    protected function getWindDirection($degrees)
    {
        $directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        return $directions[round($degrees / 22.5) % 16];
    }

    protected function getDefaultWeather()
    {
        return [
            'current' => [
                'temperature' => '72°F',
                'feels_like' => '72°F',
                'humidity' => '50%',
                'conditions' => 'Partly Cloudy',
                'wind' => '8 mph NW',
                'precipitation' => '10%',
                'icon' => '02d',
                'time' => 'N/A',
            ],
            'periods' => [
                'morning' => null,
                'afternoon' => null,
                'evening' => null,
            ],
            'daily_stats' => [
                'high_temp' => '75°F',
                'low_temp' => '65°F',
                'avg_temp' => '70°F',
                'max_wind' => '10 mph',
                'avg_wind' => '8 mph',
                'precipitation_chance' => '10%',
            ],
            'play_conditions' => [
                'overall_rating' => 'Unknown',
                'best_time' => null,
                'worst_time' => null,
                'recommendation' => 'Weather data unavailable. Please check local conditions.',
            ],
        ];
    }
} 