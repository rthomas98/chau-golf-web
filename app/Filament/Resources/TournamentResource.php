<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TournamentResource\Pages;
use App\Filament\Resources\TournamentResource\RelationManagers;
use App\Models\Tournament;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class TournamentResource extends Resource
{
    protected static ?string $model = Tournament::class;

    protected static ?string $navigationIcon = 'heroicon-o-trophy';
    
    protected static ?string $navigationGroup = 'Tournament Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->maxLength(65535)
                    ->columnSpanFull(),
                Forms\Components\DatePicker::make('start_date')
                    ->required(),
                Forms\Components\DatePicker::make('end_date')
                    ->required(),
                Forms\Components\TextInput::make('location')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('course_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('max_participants')
                    ->required()
                    ->numeric()
                    ->default(100),
                Forms\Components\TextInput::make('spots_remaining')
                    ->required()
                    ->numeric()
                    ->default(100),
                Forms\Components\TextInput::make('entry_fee')
                    ->required()
                    ->numeric()
                    ->prefix('$'),
                Forms\Components\TextInput::make('member_price')
                    ->required()
                    ->numeric()
                    ->prefix('$')
                    ->helperText('Discounted price for members'),
                Forms\Components\Select::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'in_progress' => 'In Progress',
                        'completed' => 'Completed',
                        'cancelled' => 'Cancelled',
                    ])
                    ->required(),
                Forms\Components\TextInput::make('format')
                    ->maxLength(255),
                Forms\Components\FileUpload::make('image_url')
                    ->image()
                    ->directory('tournaments'),
                Forms\Components\KeyValue::make('prizes')
                    ->keyLabel('Place')
                    ->valueLabel('Prize'),
                Forms\Components\KeyValue::make('schedule')
                    ->keyLabel('Time')
                    ->valueLabel('Event'),
                Forms\Components\KeyValue::make('rules')
                    ->keyLabel('Rule')
                    ->valueLabel('Description'),
                Forms\Components\FileUpload::make('gallery')
                    ->multiple()
                    ->image()
                    ->directory('tournaments/gallery'),
                Forms\Components\KeyValue::make('testimonials')
                    ->keyLabel('Name')
                    ->valueLabel('Quote'),
                Forms\Components\KeyValue::make('packages')
                    ->keyLabel('Package Name')
                    ->valueLabel('Details'),
                Forms\Components\KeyValue::make('sponsors')
                    ->keyLabel('Sponsor Name')
                    ->valueLabel('Details'),
                Forms\Components\KeyValue::make('faqs')
                    ->keyLabel('Question')
                    ->valueLabel('Answer'),
                Forms\Components\Textarea::make('registration_message')
                    ->maxLength(65535),
                Forms\Components\Textarea::make('early_bird_offer')
                    ->maxLength(65535),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('start_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('end_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('location')
                    ->searchable(),
                Tables\Columns\TextColumn::make('course_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('spots_remaining')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('entry_fee')
                    ->money()
                    ->sortable(),
                Tables\Columns\TextColumn::make('member_price')
                    ->money()
                    ->sortable(),
                Tables\Columns\SelectColumn::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'in_progress' => 'In Progress',
                        'completed' => 'Completed',
                        'cancelled' => 'Cancelled',
                    ])
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'in_progress' => 'In Progress',
                        'completed' => 'Completed',
                        'cancelled' => 'Cancelled',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
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
            RelationManagers\ParticipantsRelationManager::class,
            RelationManagers\GuestParticipantsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTournaments::route('/'),
            'create' => Pages\CreateTournament::route('/create'),
            'edit' => Pages\EditTournament::route('/{record}/edit'),
        ];
    }
}
