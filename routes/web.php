<?php

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

Route::get('/', function () {
    if (!Gate::allows('create-foo')){
        // dd('nope');
    }
    // return view('welcome');
    return inertia()->render('Auth/Login',[
        'version'=>'2.0.0'
    ]);
});
