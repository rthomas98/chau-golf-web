<?php

namespace App\Filament\Resources\PlayDateResource\Pages;

use App\Filament\Resources\PlayDateResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPlayDates extends ListRecords
{
    protected static string $resource = PlayDateResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
