<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use Filament\Notifications\Notification;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        // Set a random temporary password
        $data['password'] = Hash::make(Str::random(32));
        
        return $data;
    }

    protected function afterCreate(): void
    {
        // Send password reset link
        $status = Password::broker()->sendResetLink(
            ['email' => $this->record->email]
        );

        if ($status === Password::RESET_LINK_SENT) {
            Notification::make()
                ->title('User created and invitation sent successfully')
                ->success()
                ->send();
        }
    }
}
