<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\LoginRepository;
use App\Http\Requests\Auth\Login\StoreRequest;
use App\Http\Requests\Auth\Login\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class LoginController extends Controller
{
    //
    private $loginRepository = null;

    function __construct(LoginRepository $loginRepository){
        $this->loginRepository = $loginRepository;
    }

    function index(){
        if ($this->loginRepository->isLogged()){
           return $this->respondWithSuccessRoute("Logged in.",route("dashboard.index"));
        }
        return inertia()->render("v2/Auth/Login/Index");
    }

    function store(StoreRequest $request){
      $check = $this->loginRepository->login($request->validated());
      if ($check){
         return $this->respondWithSuccess("Login Successful.");
      }
      return $this->respondWithError("Invalid login!");
    }

}
