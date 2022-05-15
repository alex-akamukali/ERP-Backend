<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\LogoutRepository;
use App\Http\Requests\Auth\Logout\StoreRequest;
use App\Http\Requests\Auth\Logout\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class LogoutController extends Controller
{
    //
    private $logoutRepository = null;

    function __construct(LogoutRepository $logoutRepository){
        $this->logoutRepository = $logoutRepository;
    }

    function index(){
        $list = $this->logoutRepository->logout();
        return $this->respondWithSuccess("Just logged out.");
    }

}
