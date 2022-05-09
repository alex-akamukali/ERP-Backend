<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\User\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    function index(UserRepository $userRepository)
    {
        if ($userRepository->isLogged()) {
            return $this->respondWithSuccessRoute('Currently logged in.',route('dashboard'));
        }
        return inertia()->render('Auth/Login',$this->data([]));
    }

    //
    function store(LoginRequest $loginRequest, UserRepository $userRepository)
    {

        $check = $userRepository->login($loginRequest->validated());
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

    function destroy(UserRepository $userRepository){
        $userRepository->logout();
        return redirect()->route('login')->with([
           'message'=>'Just logged out!',
           'error'=>false
        ]);
    }

}
