<?php
namespace App\Http\Controllers\v2\Workflow\Assessment;
use App\Repositories\Workflow\Assessment\AssessmentInterviewRepository;
use App\Http\Requests\Workflow\Assessment\AssessmentInterview\StoreRequest;
use App\Http\Requests\Workflow\Assessment\AssessmentInterview\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class AssessmentInterviewController extends Controller
{
    //
    private $assessmentInterviewRepository = null;

    function __construct(AssessmentInterviewRepository $assessmentInterviewRepository){
        $this->assessmentInterviewRepository = $assessmentInterviewRepository;
    }

    function index(){
        $list = $this->assessmentInterviewRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/Assessment/AssessmentInterview/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/Assessment/AssessmentInterview/Create");
    }

    function edit($id){
        $data = $this->assessmentInterviewRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Assessment/AssessmentInterview/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->assessmentInterviewRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Assessment/AssessmentInterview/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->assessmentInterviewRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->assessmentInterviewRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->assessmentInterviewRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
