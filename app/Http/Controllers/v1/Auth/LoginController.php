<?php

namespace App\Http\Controllers\v1\Auth;

use App\Repositories\Auth\Interfaces\LoginRepositoryInterface;
use App\Http\Requests\Auth\Login\StoreRequest;
use App\Http\Requests\Auth\Login\UpdateRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    //
    private $loginRepository = null;

    function __construct(LoginRepositoryInterface $loginRepository)
    {
        $this->loginRepository = $loginRepository;
    }

    function index()
    {
        // dd(90);
        if ($this->loginRepository->isLogged()) {
            // dd('ok');
            return $this->respondWithSuccessRoute('Currently logged in.',route('dashboard.index'));
        }
        return inertia()->render("v2/Auth/Login/Index");
    }


    function store(StoreRequest $request)
    {
        $check = $this->loginRepository->login($request->validated());
        if ($check) {
            return $this->respondWithSuccess("Login Successfull");
        }
        return $this->respondWithError("Invalid Login!");
    }
}
