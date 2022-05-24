<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\UserManagementDashboardRepository;
use App\Http\Requests\Auth\UserManagementDashboard\StoreRequest;
use App\Http\Requests\Auth\UserManagementDashboard\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class UserManagementDashboardController extends Controller
{
    //
    private $userManagementDashboardRepository = null;

    function __construct(UserManagementDashboardRepository $userManagementDashboardRepository){
        $this->userManagementDashboardRepository = $userManagementDashboardRepository;
    }

    function index(){
        // $list = $this->userManagementDashboardRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Auth/UserManagementDashboard/Index",[
            "list"=>[]
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/UserManagementDashboard/Create");
    }

    function edit($id){
        $data = $this->userManagementDashboardRepository->fetchById($id);
        return inertia()->render("v2/Auth/UserManagementDashboard/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->userManagementDashboardRepository->fetchById($id);
        $report = $this->userManagementDashboardRepository->fetch($id);
        return inertia()->render("v2/Auth/UserManagementDashboard/Show",[
            "data"=>$data,
            "report"=>$report
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->userManagementDashboardRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->userManagementDashboardRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->userManagementDashboardRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
