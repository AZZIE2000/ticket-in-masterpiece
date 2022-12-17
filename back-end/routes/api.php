<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ConcertsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// admin routes
Route::get('/concerts/list', [AdminController::class, 'concertsList']);
Route::post('/concert/info', [AdminController::class, 'concertInfo']);
Route::post('/ticket/info', [AdminController::class, 'getTicket']);
Route::post('/update/category', [AdminController::class, 'updateCategoryInfo']);
Route::post('/update/ticket', [AdminController::class, 'updateTicketInfo']);
Route::post('/add/category', [AdminController::class, 'addCategory']);

// admin routes

Route::post('/googleLogin', [AuthController::class, 'googleLogin']);
Route::post('/facebookLogin', [AuthController::class, 'facebookLogin']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::resource('/concerts', ConcertsController::class);
Route::get('/concert/info/{id}', [ConcertsController::class, 'concertInfo']);
// Route::get('/Payments', [UsersController::class, 'userPayments']);

// Protected routes---------------------------------------
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Endpoint for logout api
    Route::get('/logout', [AuthController::class, 'logout']);
    // Endpoint for getting user
    Route::get('/user', [AuthController::class, 'user']);
    Route::put('/user/update', [AuthController::class, 'updateData']);
    Route::get('/payments/history', [UsersController::class, 'userPayments']);
    Route::get('/ticketswconcerts', [UsersController::class, 'ticketsWConcerts']);
    Route::post('/buy/tickets', [UsersController::class, 'buyTickets']);
});
