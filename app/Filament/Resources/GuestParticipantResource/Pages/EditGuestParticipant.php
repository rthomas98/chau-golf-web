<?php

namespace App\Filament\Resources\GuestParticipantResource\Pages;

use App\Filament\Resources\GuestParticipantResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGuestParticipant extends EditRecord
{
    protected static string $resource = GuestParticipantResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
