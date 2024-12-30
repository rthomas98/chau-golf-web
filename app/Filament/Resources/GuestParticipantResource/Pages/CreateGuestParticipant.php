<?php

namespace App\Filament\Resources\GuestParticipantResource\Pages;

use App\Filament\Resources\GuestParticipantResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateGuestParticipant extends CreateRecord
{
    protected static string $resource = GuestParticipantResource::class;
}
