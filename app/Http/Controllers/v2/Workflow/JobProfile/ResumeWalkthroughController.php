<?php
namespace App\Http\Controllers\v2\Workflow\JobProfile;
use App\Repositories\Workflow\JobProfile\ResumeWalkthroughRepository;
use App\Http\Requests\Workflow\JobProfile\ResumeWalkthrough\StoreRequest;
use App\Http\Requests\Workflow\JobProfile\ResumeWalkthrough\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ResumeWalkthroughController extends Controller
{
    //
    private $resumeWalkthroughRepository = null;

    function __construct(ResumeWalkthroughRepository $resumeWalkthroughRepository){
        $this->resumeWalkthroughRepository = $resumeWalkthroughRepository;
    }

    function index(){
        $list = $this->resumeWalkthroughRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/JobProfile/ResumeWalkthrough/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/JobProfile/ResumeWalkthrough/Create");
    }

    function edit($id){
        $data = $this->resumeWalkthroughRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/ResumeWalkthrough/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->resumeWalkthroughRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/ResumeWalkthrough/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->resumeWalkthroughRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->resumeWalkthroughRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->resumeWalkthroughRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
