<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use App\Filament\Resources\PartnerResource;
use App\Filament\Resources\PartnerRevenueReportResource;
use App\Filament\Resources\TournamentResource;
use App\Filament\Resources\PlayDateResource;
use App\Filament\Resources\UserResource;
use App\Filament\Resources\MembershipResource;
use App\Filament\Resources\GuestParticipantResource;
use App\Filament\Resources\NewsletterResource;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->darkmode(false)
            ->login()
            ->brandName('ChauGolf Admin')
            ->colors([
                'primary' => Color::Green,
            ])
            ->resources([
                PartnerResource::class,
                PartnerRevenueReportResource::class,
                TournamentResource::class,
                PlayDateResource::class,
                UserResource::class,
                MembershipResource::class,
                GuestParticipantResource::class,
                NewsletterResource::class,
            ])
            ->pages([
                Pages\Dashboard::class,
            ])
            ->widgets([
                Widgets\AccountWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->navigationGroups([
                'Tournament Management',
                'User Management',
                'Content Management',
                'Partner Management',
                'Marketing',
            ])
            ->maxContentWidth('full')
            ->sidebarCollapsibleOnDesktop();
    }
}
