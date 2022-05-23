<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\UserManagementRepository;
use App\Http\Requests\Auth\UserManagement\StoreRequest;
use App\Http\Requests\Auth\UserManagement\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class UserManagementController extends Controller
{
    //
    private $userManagementRepository = null;

    function __construct(UserManagementRepository $userManagementRepository){
        $this->userManagementRepository = $userManagementRepository;
    }

    function index(){
        $list = $this->userManagementRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Auth/UserManagement/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/UserManagement/Create");
    }

    function edit($id){
        $data = $this->userManagementRepository->fetchById($id);
        // dd($data);
        return inertia()->render("v2/Auth/UserManagement/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->userManagementRepository->fetchById($id);
        // dd($data);
        return inertia()->render("v2/Auth/UserManagement/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->userManagementRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->userManagementRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->userManagementRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
