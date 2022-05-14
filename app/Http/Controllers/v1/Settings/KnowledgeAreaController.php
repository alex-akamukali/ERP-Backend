<?php

namespace App\Http\Controllers\v1\Settings;

use App\Repositories\Settings\Interfaces\KnowledgeAreaRepositoryInterface;
use App\Http\Requests\Settings\KnowledgeArea\StoreRequest;
use App\Http\Requests\Settings\KnowledgeArea\UpdateRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KnowledgeAreaController extends Controller
{
    //
    private $knowledgeAreaRepository = null;

    function __construct(KnowledgeAreaRepositoryInterface $knowledgeAreaRepository){
        $this->knowledgeAreaRepository = $knowledgeAreaRepository;
    }

    function index(){
        $list = $this->knowledgeAreaRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/KnowledgeArea/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/KnowledgeArea/Create");
    }

    function edit($id){
        $data = $this->knowledgeAreaRepository->fetchById($id);
        return inertia()->render("v2/Settings/KnowledgeArea/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->knowledgeAreaRepository->fetchById($id);
        return inertia()->render("v2/Settings/KnowledgeArea/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->knowledgeAreaRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->knowledgeAreaRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->knowledgeAreaRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
