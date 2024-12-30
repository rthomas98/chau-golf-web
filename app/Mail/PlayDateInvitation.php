<?php

namespace App\Mail;

use App\Models\PlayDate;
use App\Models\PlayDateGuest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PlayDateInvitation extends Mailable
{
    use Queueable, SerializesModels;

    public $playDate;
    public $primaryGuest;
    public $invitedGuest;

    public function __construct(PlayDate $playDate, PlayDateGuest $primaryGuest, PlayDateGuest $invitedGuest)
    {
        $this->playDate = $playDate;
        $this->primaryGuest = $primaryGuest;
        $this->invitedGuest = $invitedGuest;
    }

    public function build()
    {
        return $this->markdown('emails.play-dates.invitation')
            ->subject("You're invited to join a golf play date!")
            ->with([
                'playDate' => $this->playDate,
                'primaryGuest' => $this->primaryGuest,
                'invitedGuest' => $this->invitedGuest,
                'acceptUrl' => route('play-dates.accept-invitation', [
                    'playDate' => $this->playDate->id,
                    'guest' => $this->invitedGuest->id,
                    'token' => encrypt($this->invitedGuest->id),
                ]),
            ]);
    }
} 