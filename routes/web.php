<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MembershipApplicationController;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\PlayDateController;
use App\Http\Controllers\DashboardController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/tournaments', [TournamentController::class, 'index'])->name('tournaments.index');
Route::get('/tournaments/{tournament}', [TournamentController::class, 'show'])->name('tournaments.show');
Route::post('/tournaments/{tournament}/register-guest', [TournamentController::class, 'registerGuest'])->name('tournament.register.guest');

Route::middleware(['auth'])->group(function () {
    Route::post('/tournaments/{tournament}/register', [TournamentController::class, 'register'])->name('tournament.register');
});

Route::get('/membership', function () {
    return Inertia::render('Membership');
});

Route::get('/courses', function () {
    return Inertia::render('Courses');
});

Route::get('/faq', function () {
    return Inertia::render('Faq');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/store', function () {
    return Inertia::render('Store');
});

Route::get('/store/product/{id}', function ($id) {
    return Inertia::render('ProductDetail', ['productId' => $id]);
});

// Member Dashboard
Route::get('/dashboard', function () {
    if (auth()->user()->hasAnyRole(['super_admin', 'tournament_manager'])) {
        return redirect('/admin');
    }
    
    return Inertia::render('Dashboard', [
        'hasMembership' => auth()->user()->membership()->exists(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/membership/apply', [MembershipApplicationController::class, 'create'])->name('membership.apply');
    Route::post('/membership', [MembershipApplicationController::class, 'store'])->name('membership.store');
});

// Play Dates
Route::middleware(['auth'])->group(function () {
    Route::get('/play-dates', [PlayDateController::class, 'index'])->name('play-dates.index');
    Route::get('/play-dates/{playDate}', [PlayDateController::class, 'show'])->name('play-dates.show');
    Route::post('/play-dates/{playDate}/register', [PlayDateController::class, 'register'])->name('play-dates.register');
    Route::get('/play-dates/{playDate}/calendar/ical', [PlayDateController::class, 'exportIcal'])
        ->name('play-dates.calendar.ical');
    Route::get('/play-dates/{playDate}/calendar/google', [PlayDateController::class, 'googleCalendarUrl'])
        ->name('play-dates.calendar.google');
    Route::get('/play-dates/{playDate}/suggest-reschedule', [PlayDateController::class, 'suggestReschedule'])
        ->name('play-dates.suggest-reschedule');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/registrations', [DashboardController::class, 'registrations'])->name('dashboard.registrations');
});

require __DIR__.'/auth.php';
