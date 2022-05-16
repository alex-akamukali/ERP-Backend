<?php
namespace App\Http\Controllers\v2\Workflow\JobApplication;
use App\Repositories\Workflow\JobApplication\JobApplicationRepository;
use App\Http\Requests\Workflow\JobApplication\JobApplication\StoreRequest;
use App\Http\Requests\Workflow\JobApplication\JobApplication\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class JobApplicationController extends Controller
{
    //
    private $jobApplicationRepository = null;

    function __construct(JobApplicationRepository $jobApplicationRepository){
        $this->jobApplicationRepository = $jobApplicationRepository;
    }

    function index(){
        $list = $this->jobApplicationRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/JobApplication/JobApplication/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/JobApplication/JobApplication/Create");
    }

    function edit($id){
        $data = $this->jobApplicationRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobApplication/JobApplication/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->jobApplicationRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobApplication/JobApplication/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->jobApplicationRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->jobApplicationRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->jobApplicationRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
