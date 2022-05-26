<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\AssessmentRepository;
use App\Http\Requests\Auth\Assessment\StoreRequest;
use App\Http\Requests\Auth\Assessment\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class AssessmentController extends Controller
{
    //
    private $assessmentRepository = null;

    function __construct(AssessmentRepository $assessmentRepository){
        $this->assessmentRepository = $assessmentRepository;
    }

    function index(){
        $list = $this->assessmentRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Auth/Assessment/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/Assessment/Create");
    }

    function edit($id){
        $data = $this->assessmentRepository->fetchById($id);
        return inertia()->render("v2/Auth/Assessment/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->assessmentRepository->fetchById($id);
        // dd($data);
        return inertia()->render("v2/Auth/Assessment/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->assessmentRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->assessmentRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->assessmentRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
