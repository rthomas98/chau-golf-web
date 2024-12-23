<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/tournaments', function () {
    return Inertia::render('Tournaments');
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

Route::get('/tournaments/{id}', function ($id) {
    return Inertia::render('TournamentDetail', ['tournamentId' => $id]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
