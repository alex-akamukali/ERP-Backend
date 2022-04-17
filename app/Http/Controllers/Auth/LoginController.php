<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    function store(LoginRequest $loginRequest)
    {
        $check = Auth::attempt($loginRequest->all());
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
}
