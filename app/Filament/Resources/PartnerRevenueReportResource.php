<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PartnerRevenueReportResource\Pages;
use App\Models\PartnerRevenueReport;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Resources\Pages\PageRegistration;

class PartnerRevenueReportResource extends Resource
{
    protected static ?string $model = PartnerRevenueReport::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-chart-bar';

    protected static ?string $navigationGroup = 'Partner Management';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('partner_id')
                    ->relationship('partner', 'name')
                    ->required(),
                Forms\Components\Select::make('report_type')
                    ->options([
                        'monthly' => 'Monthly Report',
                        'quarterly' => 'Quarterly Report',
                        'annual' => 'Annual Report',
                        'custom' => 'Custom Period',
                    ])
                    ->required(),
                Forms\Components\DatePicker::make('start_date')
                    ->required(),
                Forms\Components\DatePicker::make('end_date')
                    ->required()
                    ->afterOrEqual('start_date'),
                Forms\Components\Select::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'generated' => 'Generated',
                        'sent' => 'Sent',
                    ])
                    ->required()
                    ->default('draft'),
                Forms\Components\ViewField::make('report_data')
                    ->view('filament.forms.components.revenue-report-data')
                    ->visible(fn ($record) => $record && $record->status !== 'draft'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('partner.name')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('report_type')
                    ->sortable(),
                Tables\Columns\TextColumn::make('start_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('end_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_revenue')
                    ->money('USD')
                    ->sortable(),
                Tables\Columns\TextColumn::make('total_commission')
                    ->money('USD')
                    ->sortable(),
                Tables\Columns\TextColumn::make('transaction_count')
                    ->sortable(),
                Tables\Columns\BadgeColumn::make('status')
                    ->colors([
                        'danger' => 'draft',
                        'warning' => 'generated',
                        'success' => 'sent',
                    ]),
                Tables\Columns\TextColumn::make('generated_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('partner')
                    ->relationship('partner', 'name'),
                Tables\Filters\SelectFilter::make('report_type')
                    ->options([
                        'monthly' => 'Monthly Report',
                        'quarterly' => 'Quarterly Report',
                        'annual' => 'Annual Report',
                        'custom' => 'Custom Period',
                    ]),
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'generated' => 'Generated',
                        'sent' => 'Sent',
                    ]),
            ])
            ->actions([
                Tables\Actions\Action::make('generate')
                    ->action(function (PartnerRevenueReport $record) {
                        $record->generateReport();
                    })
                    ->requiresConfirmation()
                    ->visible(fn (PartnerRevenueReport $record) => $record->status === 'draft'),
                Tables\Actions\Action::make('send')
                    ->action(function (PartnerRevenueReport $record) {
                        $record->markAsSent();
                    })
                    ->requiresConfirmation()
                    ->visible(fn (PartnerRevenueReport $record) => $record->status === 'generated'),
                Tables\Actions\ViewAction::make(),
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPartnerRevenueReports::route('/'),
            'create' => Pages\CreatePartnerRevenueReport::route('/create'),
            'edit' => Pages\EditPartnerRevenueReport::route('/{record}/edit'),
        ];
    }
} 