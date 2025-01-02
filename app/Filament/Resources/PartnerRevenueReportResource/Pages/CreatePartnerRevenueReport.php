<?php

namespace App\Filament\Resources\PartnerRevenueReportResource\Pages;

use App\Filament\Resources\PartnerRevenueReportResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePartnerRevenueReport extends CreateRecord
{
    protected static string $resource = PartnerRevenueReportResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
} 