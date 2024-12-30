<?php

namespace App\Notifications;

use App\Models\PlayDate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PlayDateReminder extends Notification implements ShouldQueue
{
    use Queueable;

    protected $playDate;
    protected $hoursUntilTeeTime;

    public function __construct(PlayDate $playDate, int $hoursUntilTeeTime)
    {
        $this->playDate = $playDate;
        $this->hoursUntilTeeTime = $hoursUntilTeeTime;
    }

    public function via($notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject("Reminder: Upcoming Golf Play Date - {$this->playDate->title}")
            ->line("This is a reminder for your upcoming golf play date.")
            ->line("Date: {$this->playDate->date->format('l, F j, Y')}")
            ->line("Tee Time: {$this->playDate->tee_time->format('g:i A')}")
            ->line("Location: {$this->playDate->location}")
            ->line("Course: {$this->playDate->course_name}")
            ->action('View Details', route('play-dates.show', $this->playDate))
            ->line('We look forward to seeing you there!');
    }

    public function toArray($notifiable): array
    {
        return [
            'play_date_id' => $this->playDate->id,
            'title' => $this->playDate->title,
            'tee_time' => $this->playDate->tee_time->format('Y-m-d H:i:s'),
            'hours_until' => $this->hoursUntilTeeTime,
            'location' => $this->playDate->location,
            'course_name' => $this->playDate->course_name,
        ];
    }
} 