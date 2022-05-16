<?php
namespace App\Http\Controllers\v2\Workflow\Assessment;
use App\Repositories\Workflow\Assessment\PreEmploymentAssessmentRepository;
use App\Http\Requests\Workflow\Assessment\PreEmploymentAssessment\StoreRequest;
use App\Http\Requests\Workflow\Assessment\PreEmploymentAssessment\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class PreEmploymentAssessmentController extends Controller
{
    //
    private $preEmploymentAssessmentRepository = null;

    function __construct(PreEmploymentAssessmentRepository $preEmploymentAssessmentRepository){
        $this->preEmploymentAssessmentRepository = $preEmploymentAssessmentRepository;
    }

    function index(){
        $list = $this->preEmploymentAssessmentRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/Assessment/PreEmploymentAssessment/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/Assessment/PreEmploymentAssessment/Create");
    }

    function edit($id){
        $data = $this->preEmploymentAssessmentRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Assessment/PreEmploymentAssessment/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->preEmploymentAssessmentRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Assessment/PreEmploymentAssessment/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->preEmploymentAssessmentRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->preEmploymentAssessmentRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->preEmploymentAssessmentRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
