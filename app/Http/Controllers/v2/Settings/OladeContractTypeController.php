<?php
namespace App\Http\Controllers\v2\Settings;
use App\Repositories\Settings\OladeContractTypeRepository;
use App\Http\Requests\Settings\OladeContractType\StoreRequest;
use App\Http\Requests\Settings\OladeContractType\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class OladeContractTypeController extends Controller
{
    //
    private $oladeContractTypeRepository = null;

    function __construct(OladeContractTypeRepository $oladeContractTypeRepository){
        $this->oladeContractTypeRepository = $oladeContractTypeRepository;
    }

    function index(){
        $list = $this->oladeContractTypeRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/OladeContractType/Index",[
            "list"=>$list,
            "statuses"=>$this->oladeContractTypeRepository->statuses()
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/OladeContractType/Create",[
            "statuses"=>$this->oladeContractTypeRepository->statuses()
        ]);
    }

    function edit($id){
        $data = $this->oladeContractTypeRepository->fetchById($id);
        return inertia()->render("v2/Settings/OladeContractType/Edit",[
            "data"=>$data,
            "statuses"=>$this->oladeContractTypeRepository->statuses()
        ]);
    }

    function show($id){
        $data = $this->oladeContractTypeRepository->fetchById($id);
        return inertia()->render("v2/Settings/OladeContractType/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->oladeContractTypeRepository->create($request->validated());
      return $this->respondWithSuccessRoute("New contract type added",route("olade-contract-type.index"));
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->oladeContractTypeRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccessRoute("Contract type updated",route("olade-contract-type.index"));
    }

    function destroy($id){
      $record = $this->oladeContractTypeRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
