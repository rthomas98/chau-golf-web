<?php

namespace App\Filament\Resources\MembershipResource\Pages;

use App\Filament\Resources\MembershipResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use Filament\Notifications\Notification;

class CreateMembership extends CreateRecord
{
    protected static string $resource = MembershipResource::class;

    protected function afterCreate(): void
    {
        // Send notification to the user about their membership
        Notification::make()
            ->title('Membership Created')
            ->success()
            ->body('The membership has been created successfully.')
            ->send();
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
