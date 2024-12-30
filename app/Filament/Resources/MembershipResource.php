<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MembershipResource\Pages;
use App\Models\Membership;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class MembershipResource extends Resource
{
    protected static ?string $model = Membership::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    protected static ?string $navigationGroup = 'Club Management';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),
                Forms\Components\Select::make('club_level')
                    ->options([
                        '70' => '70 Club',
                        '80' => '80 Club',
                        '90' => '90 Club',
                        '100' => '100 Club',
                    ])
                    ->required(),
                Forms\Components\TextInput::make('current_average_score')
                    ->numeric()
                    ->step(0.1)
                    ->rules(['min:0', 'max:200']),
                Forms\Components\TextInput::make('verified_handicap')
                    ->numeric()
                    ->step(0.1)
                    ->rules(['min:-10', 'max:50']),
                Forms\Components\DatePicker::make('last_tournament_date'),
                Forms\Components\TextInput::make('tournament_count')
                    ->numeric()
                    ->default(0)
                    ->required(),
                Forms\Components\TextInput::make('play_date_count')
                    ->numeric()
                    ->default(0)
                    ->required(),
                Forms\Components\DatePicker::make('last_play_date'),
                Forms\Components\Toggle::make('is_active')
                    ->default(true)
                    ->required(),
                Forms\Components\Textarea::make('special_notes')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\SelectColumn::make('club_level')
                    ->options([
                        '70' => '70 Club',
                        '80' => '80 Club',
                        '90' => '90 Club',
                        '100' => '100 Club',
                    ])
                    ->sortable(),
                Tables\Columns\TextColumn::make('current_average_score')
                    ->numeric(1)
                    ->sortable(),
                Tables\Columns\TextColumn::make('verified_handicap')
                    ->numeric(1)
                    ->sortable(),
                Tables\Columns\TextColumn::make('tournament_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('play_date_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\TextColumn::make('last_play_date')
                    ->date()
                    ->sortable()
                    ->toggleable(),
                Tables\Columns\TextColumn::make('last_tournament_date')
                    ->date()
                    ->sortable()
                    ->toggleable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('club_level')
                    ->options([
                        '70' => '70 Club',
                        '80' => '80 Club',
                        '90' => '90 Club',
                        '100' => '100 Club',
                    ]),
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Active Status'),
                Tables\Filters\Filter::make('needs_participation')
                    ->query(fn (Builder $query) => $query->where('play_date_count', '<', 2)
                        ->orWhereNull('last_play_date')
                        ->orWhere('last_play_date', '<=', now()->subMonths(6)))
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('promote')
                    ->icon('heroicon-o-arrow-up')
                    ->requiresConfirmation()
                    ->visible(fn (Membership $record) => $record->club_level !== '70')
                    ->action(function (Membership $record) {
                        $newLevel = match($record->club_level) {
                            '100' => '90',
                            '90' => '80',
                            '80' => '70',
                            default => $record->club_level,
                        };
                        $record->update(['club_level' => $newLevel]);
                    }),
                Tables\Actions\Action::make('demote')
                    ->icon('heroicon-o-arrow-down')
                    ->requiresConfirmation()
                    ->visible(fn (Membership $record) => $record->club_level !== '100')
                    ->action(function (Membership $record) {
                        $newLevel = match($record->club_level) {
                            '70' => '80',
                            '80' => '90',
                            '90' => '100',
                            default => $record->club_level,
                        };
                        $record->update(['club_level' => $newLevel]);
                    }),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMemberships::route('/'),
            'create' => Pages\CreateMembership::route('/create'),
            'edit' => Pages\EditMembership::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('is_active', true)->count();
    }
}
