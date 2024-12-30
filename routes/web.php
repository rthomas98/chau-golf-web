<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MembershipApplicationController;
use App\Http\Controllers\TournamentController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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

require __DIR__.'/auth.php';
