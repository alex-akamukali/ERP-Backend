<?php
namespace App\Http\Controllers\v2\Workflow\Assessment;
use App\Repositories\Workflow\Assessment\ServiceAgreementRepository;
use App\Http\Requests\Workflow\Assessment\ServiceAgreement\StoreRequest;
use App\Http\Requests\Workflow\Assessment\ServiceAgreement\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ServiceAgreementController extends Controller
{
    //
    private $serviceAgreementRepository = null;

    function __construct(ServiceAgreementRepository $serviceAgreementRepository){
        $this->serviceAgreementRepository = $serviceAgreementRepository;
    }

    function index(){
        $list = $this->serviceAgreementRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Workflow/Assessment/ServiceAgreement/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Workflow/Assessment/ServiceAgreement/Create");
    }

    function edit($id){
        $data = $this->serviceAgreementRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Assessment/ServiceAgreement/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->serviceAgreementRepository->fetchById($id);
        return inertia()->render("v2/Workflow/Assessment/ServiceAgreement/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->serviceAgreementRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->serviceAgreementRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->serviceAgreementRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
