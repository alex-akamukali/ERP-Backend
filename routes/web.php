<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Dashboard\DashboardController;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     // dd(csrf_token());
//     if (!Gate::allows('create-foo')){
//         // dd('nope');
//     }
//     $message = '';
//     if (session()->has('message')){
//     //   dd(session()->get('message'));
//     $message = session()->get('message');
//     }
//     // return view('welcome');
//     // dd($message);
//     return inertia()->render('Auth/Login',[
//         'version'=>'2.0.0',
//         'login_route'=>route('login.store'),
//         'csrf'=>csrf_token(),
//         'message'=>$message
//     ]);
// });

Route::get('/',[LoginController::class,'index']);

Route::resource('login',LoginController::class);

Route::get('dashboard',[DashboardController::class,'index'])->name('dashboard');
