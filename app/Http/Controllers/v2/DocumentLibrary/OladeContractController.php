<?php
namespace App\Http\Controllers\v2\DocumentLibrary;
use App\Repositories\DocumentLibrary\OladeContractRepository;
use App\Http\Requests\DocumentLibrary\OladeContract\StoreRequest;
use App\Http\Requests\DocumentLibrary\OladeContract\UpdateRequest;
use App\Http\Controllers\Controller;
use App\Repositories\Auth\UserRepository;

//use Illuminate\Http\Request;

class OladeContractController extends Controller
{
    //
    private $oladeContractRepository = null;

    function __construct(OladeContractRepository $oladeContractRepository){
        $this->oladeContractRepository = $oladeContractRepository;
    }

    function index(UserRepository $userRepository){
        $list = $this->oladeContractRepository->fetch(request()->all())->get();
        return inertia()->render("v2/DocumentLibrary/OladeContract/Index",[
            "list"=>$list,
            "users"=>$userRepository->fetch([])->get(),
            "statuses"=>$this->oladeContractRepository->statuses()
        ]);
    }

    function create(){
        return inertia()->render("v2/DocumentLibrary/OladeContract/Create");
    }

    function edit($id){
        $data = $this->oladeContractRepository->fetchById($id);
        return inertia()->render("v2/DocumentLibrary/OladeContract/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->oladeContractRepository->fetchById($id);
        return inertia()->render("v2/DocumentLibrary/OladeContract/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->oladeContractRepository->create($request->uploadDocument());
      return $this->respondWithSuccess("New Document uploaded");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->oladeContractRepository->update($id,$updateRequest->uploadDocument());
        return $this->respondWithSuccess("Document updated");
    }

    function destroy($id){
      $record = $this->oladeContractRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
