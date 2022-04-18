<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    function index()
    {

        if (Auth::check()) {
            return redirect()->route('dashboard')->with([
                'message' => 'Currently logged in.',
                'error' => false
            ]);
        }

        return view('auth.login');

        // return inertia()->render('Auth/Login', [
        //     'version' => '2.0.0',
        //     'login_route' => route('login.store'),
        //     'csrf' => csrf_token()
        // ]);
    }

    //
    function store(LoginRequest $loginRequest)
    {
        $check = Auth::attempt($loginRequest->validated());
        if ($check) {
            return redirect()->back()->with([
                'message' => 'Login successful',
                'error' => false
            ]);
        }
        return redirect()->back()->with([
            'message' => 'Invalid Login!',
            'error' => true
        ]);
    }

    function destroy(){
        Auth::logout();
        return redirect()->route('login')->with([
           'message'=>'Just logged out!',
           'error'=>false
        ]);
    }

}
