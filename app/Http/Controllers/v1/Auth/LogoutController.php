<?php

namespace App\Http\Controllers\v1\Auth;

use App\Repositories\Auth\Interfaces\LogoutRepositoryInterface;
use App\Http\Requests\Auth\Logout\StoreRequest;
use App\Http\Requests\Auth\Logout\UpdateRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    //
    private $logoutRepository = null;

    function __construct(LogoutRepositoryInterface $logoutRepository){
        $this->logoutRepository = $logoutRepository;
    }

    function index(){
        $list = $this->logoutRepository->logout();
        return redirect()->route('login.index')->with([
            'message'=>'Just logged out!',
            'error'=>false
         ]);
    }

}
