<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\UserManagementProfileRepository;
use App\Http\Requests\Auth\UserManagementProfile\StoreRequest;
use App\Http\Requests\Auth\UserManagementProfile\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class UserManagementProfileController extends Controller
{
    //
    private $userManagementProfileRepository = null;

    function __construct(UserManagementProfileRepository $userManagementProfileRepository){
        $this->userManagementProfileRepository = $userManagementProfileRepository;
    }

    function index(){
        $list = $this->userManagementProfileRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Auth/UserManagementProfile/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/UserManagementProfile/Create");
    }

    function edit($id){
        $data = $this->userManagementProfileRepository->fetchById($id);
        return inertia()->render("v2/Auth/UserManagementProfile/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->userManagementProfileRepository->fetchById($id);
        return inertia()->render("v2/Auth/UserManagementProfile/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->userManagementProfileRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->userManagementProfileRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->userManagementProfileRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
