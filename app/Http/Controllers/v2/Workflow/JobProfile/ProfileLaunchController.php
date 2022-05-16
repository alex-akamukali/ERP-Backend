<?php
namespace App\Http\Controllers\v2\Workflow\JobProfile;
use App\Repositories\Workflow\JobProfile\ProfileLaunchRepository;
use App\Http\Requests\Workflow\JobProfile\ProfileLaunch\StoreRequest;
use App\Http\Requests\Workflow\JobProfile\ProfileLaunch\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ProfileLaunchController extends Controller
{
    //
    private $profileLaunchRepository = null;

    function __construct(ProfileLaunchRepository $profileLaunchRepository){
        $this->profileLaunchRepository = $profileLaunchRepository;
    }

    function index(){
        $list = $this->profileLaunchRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/JobProfile/ProfileLaunch/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/JobProfile/ProfileLaunch/Create");
    }

    function edit($id){
        $data = $this->profileLaunchRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/ProfileLaunch/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->profileLaunchRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/ProfileLaunch/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->profileLaunchRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->profileLaunchRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->profileLaunchRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
