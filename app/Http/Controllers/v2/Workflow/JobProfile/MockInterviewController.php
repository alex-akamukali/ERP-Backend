<?php
namespace App\Http\Controllers\v2\Workflow\JobProfile;
use App\Repositories\Workflow\JobProfile\MockInterviewRepository;
use App\Http\Requests\Workflow\JobProfile\MockInterview\StoreRequest;
use App\Http\Requests\Workflow\JobProfile\MockInterview\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class MockInterviewController extends Controller
{
    //
    private $mockInterviewRepository = null;

    function __construct(MockInterviewRepository $mockInterviewRepository){
        $this->mockInterviewRepository = $mockInterviewRepository;
    }

    function index(){
        $list = $this->mockInterviewRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/JobProfile/MockInterview/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/JobProfile/MockInterview/Create");
    }

    function edit($id){
        $data = $this->mockInterviewRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/MockInterview/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->mockInterviewRepository->fetchById($id);
        return inertia()->render("v2/Workflow/JobProfile/MockInterview/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->mockInterviewRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->mockInterviewRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->mockInterviewRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
