<?php

namespace App\Filament\Resources\GuestParticipantResource\Pages;

use App\Filament\Resources\GuestParticipantResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListGuestParticipants extends ListRecords
{
    protected static string $resource = GuestParticipantResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
