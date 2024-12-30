<?php

namespace App\Filament\Resources\MembershipResource\Pages;

use App\Filament\Resources\MembershipResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Resources\Components\Tab;
use Illuminate\Database\Eloquent\Builder;

class ListMemberships extends ListRecords
{
    protected static string $resource = MembershipResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        return [
            'all' => Tab::make('All Members'),
            '70_club' => Tab::make('70 Club')
                ->modifyQueryUsing(fn (Builder $query) => $query->where('club_level', '70')),
            '80_club' => Tab::make('80 Club')
                ->modifyQueryUsing(fn (Builder $query) => $query->where('club_level', '80')),
            '90_club' => Tab::make('90 Club')
                ->modifyQueryUsing(fn (Builder $query) => $query->where('club_level', '90')),
            '100_club' => Tab::make('100 Club')
                ->modifyQueryUsing(fn (Builder $query) => $query->where('club_level', '100')),
            'needs_participation' => Tab::make('Needs Participation')
                ->modifyQueryUsing(fn (Builder $query) => $query
                    ->where('play_date_count', '<', 2)
                    ->orWhereNull('last_play_date')
                    ->orWhere('last_play_date', '<=', now()->subMonths(6))),
        ];
    }
}
