<?php

namespace App\Filament\Resources\PartnerRevenueReportResource\Pages;

use App\Filament\Resources\PartnerRevenueReportResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPartnerRevenueReports extends ListRecords
{
    protected static string $resource = PartnerRevenueReportResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
} 