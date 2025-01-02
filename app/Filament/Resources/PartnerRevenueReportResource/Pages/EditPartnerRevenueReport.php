<?php

namespace App\Filament\Resources\PartnerRevenueReportResource\Pages;

use App\Filament\Resources\PartnerRevenueReportResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPartnerRevenueReport extends EditRecord
{
    protected static string $resource = PartnerRevenueReportResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\Action::make('generate')
                ->action(function () {
                    $this->record->generateReport();
                    $this->redirect($this->getResource()::getUrl('index'));
                })
                ->requiresConfirmation()
                ->visible(fn () => $this->record->status === 'draft'),
            Actions\Action::make('send')
                ->action(function () {
                    $this->record->markAsSent();
                    $this->redirect($this->getResource()::getUrl('index'));
                })
                ->requiresConfirmation()
                ->visible(fn () => $this->record->status === 'generated'),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
} 