<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Tournament;

class TournamentRegistrationConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $tournament;
    public $participant;
    public $registrationCode;

    /**
     * Create a new message instance.
     */
    public function __construct(Tournament $tournament, $participant, $registrationCode)
    {
        $this->tournament = $tournament;
        $this->participant = $participant;
        $this->registrationCode = $registrationCode;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->markdown('emails.tournament.registration-confirmation')
            ->subject('Tournament Registration Confirmation - ' . $this->tournament->name);
    }
} 