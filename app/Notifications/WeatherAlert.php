<?php

namespace App\Notifications;

use App\Models\PlayDate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WeatherAlert extends Notification implements ShouldQueue
{
    use Queueable;

    protected $playDate;
    protected $weather;

    public function __construct(PlayDate $playDate, array $weather)
    {
        $this->playDate = $playDate;
        $this->weather = $weather;
    }

    public function via($notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable): MailMessage
    {
        $message = (new MailMessage)
            ->subject("Weather Alert: {$this->playDate->title}")
            ->greeting("Important Weather Update")
            ->line("We want to inform you about weather conditions that may affect your upcoming golf play date:")
            ->line("Date: {$this->playDate->date->format('l, F j, Y')}")
            ->line("Tee Time: {$this->playDate->tee_time->format('g:i A')}")
            ->line("Location: {$this->playDate->location}")
            ->line("\nCurrent Weather Conditions:")
            ->line("• Temperature: {$this->weather['current']['temperature']}")
            ->line("• Conditions: {$this->weather['current']['conditions']}")
            ->line("• Wind: {$this->weather['current']['wind']}")
            ->line("• Precipitation Chance: {$this->weather['current']['precipitation']}")
            ->line("\nForecast Details:")
            ->line("• High: {$this->weather['daily_stats']['high_temp']}")
            ->line("• Low: {$this->weather['daily_stats']['low_temp']}")
            ->line("• Max Wind: {$this->weather['daily_stats']['max_wind']}")
            ->line("\nPlaying Conditions Rating: {$this->weather['play_conditions']['overall_rating']}")
            ->line($this->weather['play_conditions']['recommendation'])
            ->action('View Play Date Details', route('play-dates.show', $this->playDate));

        if ($this->weather['play_conditions']['best_time']) {
            $message->line("\nBest Time to Play: {$this->weather['play_conditions']['best_time']['time']} ({$this->weather['play_conditions']['best_time']['rating']})");
        }

        return $message;
    }

    public function toArray($notifiable): array
    {
        return [
            'play_date_id' => $this->playDate->id,
            'title' => $this->playDate->title,
            'weather' => $this->weather,
            'alert_type' => 'weather',
            'severity' => $this->weather['play_conditions']['overall_rating'],
        ];
    }
} 