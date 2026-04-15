<?php

use App\Http\Controllers\Apps\LandingPageSettingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudioPageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TrainerController;
use App\Http\Controllers\StudioSessionController;
use App\Models\LandingPageSetting;
use App\Models\Trainer;
use App\Models\StudioSession;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route Halaman Utama (Welcome)
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        // Mengirimkan data setting landing page dari database
        'landingPageSetting' => LandingPageSetting::first(),
        // Mengirimkan data trainer dari database
        'trainers' => Trainer::query()->select('id', 'name', 'photo', 'expertise')->latest()->get(),
        'studioSessions' => StudioSession::query()->latest()->get(),
    ]);
})->name('welcome');


// Route Halaman Jadwal Sesi
Route::get('/jadwal-sesi', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'currentKey' => 'jadwal-sesi',
        'landingPageSetting' => LandingPageSetting::first(),
        'trainers' => Trainer::query()->select('id', 'name', 'photo', 'expertise')->latest()->get(),
        'studioSessions' => StudioSession::query()->latest()->get(),
    ]);
})->name('jadwal-sesi');

// Route Halaman Contact (Menggunakan komponen Welcome dengan state berbeda)
Route::get('/contact', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'currentKey' => 'contact',
        // Tetap kirimkan data agar gambar background tidak hilang saat pindah menu
        'landingPageSetting' => LandingPageSetting::first(),
        'trainers' => Trainer::query()->select('id', 'name', 'photo', 'expertise')->latest()->get(),
        'studioSessions' => StudioSession::query()->latest()->get(),
    ]);
})->name('contact');

// Group Route Dashboard (Perlu Login)
Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('studio-pages', StudioPageController::class)
        ->except(['show'])
        ->middleware('permission:studio-pages-access');

    Route::resource('users', UserController::class)
        ->except('show')
        ->middlewareFor('index', 'permission:users-access')
        ->middlewareFor(['create', 'store'], 'permission:users-create')
        ->middlewareFor(['edit', 'update'], 'permission:users-update')
        ->middlewareFor('destroy', 'permission:users-delete');

    Route::resource('trainers', TrainerController::class)
        ->except('show')
        ->middlewareFor('index', 'permission:trainers-access')
        ->middlewareFor(['create', 'store'], 'permission:trainers-create')
        ->middlewareFor(['edit', 'update'], 'permission:trainers-update')
        ->middlewareFor('destroy', 'permission:trainers-delete');

    // Pengaturan Landing Page (Update Gambar & Teks)
    Route::get('/settings/landing-page', [LandingPageSettingController::class, 'edit'])
        ->middleware('permission:landing-page-settings-access')
        ->name('settings.landing-page.edit');
    
    Route::put('/settings/landing-page', [LandingPageSettingController::class, 'update'])
        ->middleware('permission:landing-page-settings-access')
        ->name('settings.landing-page.update');

    Route::get('/studio-sessions', [StudioSessionController::class, 'index'])
        ->middleware('permission:studio-pages-access')
        ->name('studio-sessions.index');

    Route::post('/studio-sessions', [StudioSessionController::class, 'store'])
        ->middleware('permission:studio-pages-access')
        ->name('studio-sessions.store');

    Route::put('/studio-sessions/{studioSession}', [StudioSessionController::class, 'update'])
        ->middleware('permission:studio-pages-access')
        ->name('studio-sessions.update');

    // Profile Akun
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';