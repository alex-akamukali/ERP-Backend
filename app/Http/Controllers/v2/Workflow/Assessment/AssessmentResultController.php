<?php
namespace App\Http\Controllers\v2\Workflow\Assessment;
use App\Repositories\Workflow\Assessment\AssessmentResultRepository;
use App\Http\Requests\Workflow\Assessment\AssessmentResult\StoreRequest;
use App\Http\Requests\Workflow\Assessment\AssessmentResult\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class AssessmentResultController extends Controller
{
    //
    private $assessmentResultRepository = null;

    function __construct(AssessmentResultRepository $assessmentResultRepository){
        $this->assessmentResultRepository = $assessmentResultRepository;
    }

    function index(){
        $list = $this->assessmentResultRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/Assessment/AssessmentResult/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/Assessment/AssessmentResult/Create");
    }

    function edit($id){
        $data = $this->assessmentResultRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Assessment/AssessmentResult/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->assessmentResultRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Assessment/AssessmentResult/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->assessmentResultRepository->create($request->prepareData());
      return $this->respondWithSuccess("New Assessment Result Logged");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->assessmentResultRepository->update($id,$updateRequest->prepareData());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->assessmentResultRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
