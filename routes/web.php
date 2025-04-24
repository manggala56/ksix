<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\karyawanController;
Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('auth.login');
})->name('login');
Route::middleware(['auth'])->group(function () {
    Route::get(uri: '/booking', action: function () {
        $user = Auth()->user();
        if ($user->role == "karyawan") {
            return redirect()->route('admin.index');
        } else {
            return Inertia::render(component: 'booking');
        }
    })->name('booking');
    Route::resource('bookings', BookingController::class);
});
Route::post('booking/{booking}/list', [karyawanController::class, 'update'])
    ->name('booking.list');
Route::middleware(['auth','role:karyawan'])->group(function () {
    Route::resource('admin', karyawanController::class);
    Route::get('/booking-list',[karyawanController::class,'booking']);

});
Route::middleware(['auth','role:admin'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
