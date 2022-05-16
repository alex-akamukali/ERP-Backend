<?php
namespace App\Http\Controllers\v2\Workflow\JobProfile;
use App\Repositories\Workflow\JobProfile\ProfileDiscussionRepository;
use App\Http\Requests\Workflow\JobProfile\ProfileDiscussion\StoreRequest;
use App\Http\Requests\Workflow\JobProfile\ProfileDiscussion\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ProfileDiscussionController extends Controller
{
    //
    private $profileDiscussionRepository = null;

    function __construct(ProfileDiscussionRepository $profileDiscussionRepository){
        $this->profileDiscussionRepository = $profileDiscussionRepository;
    }

    function index(){
        $list = $this->profileDiscussionRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/JobProfile/ProfileDiscussion/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/JobProfile/ProfileDiscussion/Create");
    }

    function edit($id){
        $data = $this->profileDiscussionRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/ProfileDiscussion/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->profileDiscussionRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/ProfileDiscussion/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->profileDiscussionRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->profileDiscussionRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->profileDiscussionRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
