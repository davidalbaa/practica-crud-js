<?php

use App\Http\Controllers\Cursos;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::prefix('cursos')->group(function () {
    Route::get('/', [Cursos::class, 'index']);
    Route::post('/create', [Cursos::class, 'create']);
    Route::put('/update/{curso}', [Cursos::class, 'update']);
    Route::delete('/destroy/{curso}', [Cursos::class, 'destroy']);
});
