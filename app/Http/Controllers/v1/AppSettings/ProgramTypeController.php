<?php
namespace App\Http\Controllers\v1\AppSettings;
use App\Services\AppSettings\ProgramTypeService;
use App\Http\Requests\AppSettings\ProgramType\StoreRequest;
use App\Http\Requests\AppSettings\ProgramType\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ProgramTypeController extends Controller
{
    //
    private $programTypeService = null;

    function __construct(ProgramTypeService $programTypeService){
        $this->programTypeService = $programTypeService;
    }

    function index(){
        $list = $this->programTypeService->fetch(request()->all())->get();
        return inertia()->render("v2/AppSettings/ProgramType/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/AppSettings/ProgramType/Create",[

        ]);
    }

    function edit($id){
        $data = $this->programTypeService->fetchById($id);
        return inertia()->render("v2/AppSettings/ProgramType/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->programTypeService->fetchById($id);
        return inertia()->render("v2/AppSettings/ProgramType/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $new = $this->programTypeService->create($request->validated());

      return redirect()->back()->with([
            'message' => 'New Record Added Successfully',
            'error'   => false,
            'data'    => $new
      ]);
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->programTypeService->update($id,$updateRequest->validated());
        return redirect()->back()->with([
            'message' => 'Record updated successfully',
            'error'   => false,
            'data'    => $record
        ]);
    }

    function destroy($id){
      $data = $this->programTypeService->remove($id);
        return redirect()->back()->with([
            'message' => 'Record removed successfully',
            'error'   => false,
            'data'    => $data
        ]);
    }

}
