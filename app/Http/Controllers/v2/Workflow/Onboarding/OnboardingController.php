<?php
namespace App\Http\Controllers\v2\Workflow\Onboarding;
use App\Repositories\Workflow\Onboarding\OnboardingRepository;
use App\Http\Requests\Workflow\Onboarding\Onboarding\StoreRequest;
use App\Http\Requests\Workflow\Onboarding\Onboarding\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class OnboardingController extends Controller
{
    //
    private $onboardingRepository = null;

    function __construct(OnboardingRepository $onboardingRepository){
        $this->onboardingRepository = $onboardingRepository;
    }

    function index(){
        $list = $this->onboardingRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/Onboarding/Onboarding/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/Onboarding/Onboarding/Create");
    }

    function edit($id){
        $data = $this->onboardingRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Onboarding/Onboarding/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->onboardingRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Onboarding/Onboarding/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->onboardingRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->onboardingRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->onboardingRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
