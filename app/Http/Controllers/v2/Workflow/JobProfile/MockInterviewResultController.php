<?php
namespace App\Http\Controllers\v2\Workflow\JobProfile;
use App\Repositories\Workflow\JobProfile\MockInterviewResultRepository;
use App\Http\Requests\Workflow\JobProfile\MockInterviewResult\StoreRequest;
use App\Http\Requests\Workflow\JobProfile\MockInterviewResult\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class MockInterviewResultController extends Controller
{
    //
    private $mockInterviewResultRepository = null;

    function __construct(MockInterviewResultRepository $mockInterviewResultRepository){
        $this->mockInterviewResultRepository = $mockInterviewResultRepository;
    }

    function index(){
        $list = $this->mockInterviewResultRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/JobProfile/MockInterviewResult/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/JobProfile/MockInterviewResult/Create");
    }

    function edit($id){
        $data = $this->mockInterviewResultRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/MockInterviewResult/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->mockInterviewResultRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/MockInterviewResult/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->mockInterviewResultRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->mockInterviewResultRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->mockInterviewResultRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
