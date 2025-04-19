<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\RoleManagemnt;

Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('auth.login');
})->name('login');

Route::get(uri: '/booking', action: function () {
    return Inertia::render(component: 'booking');
})->name('booking');

Route::middleware(['auth', 'verified','RoleManagemnt:admin'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
