<?php
namespace App\Http\Controllers\v2\Settings;
use App\Repositories\Settings\ProgramTypeRepository;
use App\Http\Requests\Settings\ProgramType\StoreRequest;
use App\Http\Requests\Settings\ProgramType\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ProgramTypeController extends Controller
{
    //
    private $programTypeRepository = null;

    function __construct(ProgramTypeRepository $programTypeRepository){
        $this->programTypeRepository = $programTypeRepository;
    }

    function index(){
        $list = $this->programTypeRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/ProgramType/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/ProgramType/Create");
    }

    function edit($id){
        $data = $this->programTypeRepository->fetchById($id);
        return inertia()->render("v2/Settings/ProgramType/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->programTypeRepository->fetchById($id);
        return inertia()->render("v2/Settings/ProgramType/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->programTypeRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->programTypeRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->programTypeRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
