<?php

namespace App\Notifications;

use App\Models\PlayDate;
use App\Models\PlayDateGuest;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PlayDateRegistrationChanged extends Notification implements ShouldQueue
{
    use Queueable;

    public $playDate;
    public $guest;
    public $action;
    public $changes;

    public function __construct(PlayDate $playDate, PlayDateGuest $guest, string $action, array $changes = [])
    {
        $this->playDate = $playDate;
        $this->guest = $guest;
        $this->action = $action;
        $this->changes = $changes;
    }

    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        $message = (new MailMessage)
            ->subject("Play Date Registration {$this->action}")
            ->line("A registration has been {$this->action} for the play date:")
            ->line("**{$this->playDate->title}** on {$this->playDate->date->format('l, F j, Y')} at {$this->playDate->tee_time}")
            ->line("Guest: {$this->guest->guest_name} ({$this->guest->guest_email})");

        if ($this->action === 'updated' && !empty($this->changes)) {
            $message->line('Changes made:');
            foreach ($this->changes as $field => $change) {
                $message->line("- {$field}: {$change['from']} → {$change['to']}");
            }
        }

        $message->action('View Play Date', route('play-dates.show', $this->playDate))
            ->line('Current registration metrics:')
            ->line("- Total registered: {$this->playDate->registration_metrics['total_registered']}")
            ->line("- Confirmed: {$this->playDate->registration_metrics['confirmed']}")
            ->line("- Fill rate: {$this->playDate->registration_metrics['fill_rate']}%");

        return $message;
    }

    public function toArray($notifiable)
    {
        return [
            'play_date_id' => $this->playDate->id,
            'guest_id' => $this->guest->id,
            'action' => $this->action,
            'changes' => $this->changes,
            'metrics' => [
                'registration' => $this->playDate->registration_metrics,
                'invitation' => $this->playDate->invitation_metrics,
            ],
        ];
    }
} 