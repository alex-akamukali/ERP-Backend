<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\UserRepository;
use App\Http\Requests\Auth\User\StoreRequest;
use App\Http\Requests\Auth\User\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    private $userRepository = null;

    function __construct(UserRepository $userRepository){
        $this->userRepository = $userRepository;
    }

    function index(){
        $list = $this->userRepository->fetch(request()->all())->paginate(15);
        return inertia()->render("v2/Auth/User/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/User/Create");
    }

    function edit($id){
        $data = $this->userRepository->fetchById($id);
        return inertia()->render("v2/Auth/User/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->userRepository->fetchById($id);
        return inertia()->render("v2/Auth/User/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->userRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->userRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->userRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
