<?php

namespace App\Mail;

use App\Models\PlayDate;
use App\Models\PlayDateGuest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PlayDateConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $playDate;
    public $guest;

    public function __construct(PlayDate $playDate, PlayDateGuest $guest)
    {
        $this->playDate = $playDate;
        $this->guest = $guest;
    }

    public function build()
    {
        return $this->markdown('emails.play-dates.confirmation')
            ->subject('Golf Play Date Registration Confirmation')
            ->with([
                'playDate' => $this->playDate,
                'guest' => $this->guest,
                'viewUrl' => route('play-dates.show', $this->playDate->id),
            ]);
    }
} 