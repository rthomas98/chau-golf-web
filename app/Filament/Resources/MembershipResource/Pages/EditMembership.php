<?php

namespace App\Filament\Resources\MembershipResource\Pages;

use App\Filament\Resources\MembershipResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Filament\Notifications\Notification;

class EditMembership extends EditRecord
{
    protected static string $resource = MembershipResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\Action::make('promote')
                ->icon('heroicon-o-arrow-up')
                ->requiresConfirmation()
                ->visible(fn () => $this->record->club_level !== '70')
                ->action(function () {
                    $newLevel = match($this->record->club_level) {
                        '100' => '90',
                        '90' => '80',
                        '80' => '70',
                        default => $this->record->club_level,
                    };
                    $this->record->update(['club_level' => $newLevel]);

                    Notification::make()
                        ->title('Member Promoted')
                        ->success()
                        ->body("Member has been promoted to {$newLevel} Club.")
                        ->send();
                }),
            Actions\Action::make('demote')
                ->icon('heroicon-o-arrow-down')
                ->requiresConfirmation()
                ->visible(fn () => $this->record->club_level !== '100')
                ->action(function () {
                    $newLevel = match($this->record->club_level) {
                        '70' => '80',
                        '80' => '90',
                        '90' => '100',
                        default => $this->record->club_level,
                    };
                    $this->record->update(['club_level' => $newLevel]);

                    Notification::make()
                        ->title('Member Demoted')
                        ->warning()
                        ->body("Member has been demoted to {$newLevel} Club.")
                        ->send();
                }),
        ];
    }

    protected function afterSave(): void
    {
        Notification::make()
            ->title('Membership Updated')
            ->success()
            ->body('The membership has been updated successfully.')
            ->send();
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
