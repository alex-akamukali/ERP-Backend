<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\UserPermissionRepository;
use App\Http\Requests\Auth\UserPermission\StoreRequest;
use App\Http\Requests\Auth\UserPermission\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class UserPermissionController extends Controller
{
    //
    private $userPermissionRepository = null;

    function __construct(UserPermissionRepository $userPermissionRepository){
        $this->userPermissionRepository = $userPermissionRepository;
    }

    function index(){
        $list = $this->userPermissionRepository->fetch(request()->all())->paginate(12);
        return inertia()->render("v2/Auth/UserPermission/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/UserPermission/Create");
    }

    function edit($id){
        $data = $this->userPermissionRepository->fetchById($id);
        return inertia()->render("v2/Auth/UserPermission/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->userPermissionRepository->fetchById($id);
        return inertia()->render("v2/Auth/UserPermission/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->userPermissionRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->userPermissionRepository->updatePermission($id,$updateRequest->validated());
        return $this->respondWithSuccess("Permission updated");
    }

    function destroy($id){
      $record = $this->userPermissionRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
