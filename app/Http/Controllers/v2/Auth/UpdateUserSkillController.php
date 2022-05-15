<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\UpdateUserSkillRepository;
use App\Http\Requests\Auth\UpdateUserSkill\StoreRequest;
use App\Http\Requests\Auth\UpdateUserSkill\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class UpdateUserSkillController extends Controller
{
    //
    private $updateUserSkillRepository = null;

    function __construct(UpdateUserSkillRepository $updateUserSkillRepository){
        $this->updateUserSkillRepository = $updateUserSkillRepository;
    }

    function index(){
        $list = $this->updateUserSkillRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Auth/UpdateUserSkill/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/UpdateUserSkill/Create");
    }

    function edit($id){
        $data = $this->updateUserSkillRepository->fetchById($id);
        return inertia()->render("v2/Auth/UpdateUserSkill/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->updateUserSkillRepository->fetchById($id);
        return inertia()->render("v2/Auth/UpdateUserSkill/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->updateUserSkillRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->updateUserSkillRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Skills updated");
    }

    function destroy($id){
      $record = $this->updateUserSkillRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
