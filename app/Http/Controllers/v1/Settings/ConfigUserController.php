<?php

namespace App\Http\Controllers\v1\Settings;

use App\Repositories\Settings\Interfaces\ConfigUserRepositoryInterface;
use App\Http\Requests\Settings\ConfigUserStoreRequest;
use App\Http\Requests\Settings\ConfigUserUpdateRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfigUserController extends Controller
{
    //
    private $configUserRepository = null;

    function __construct(ConfigUserRepositoryInterface $configUserRepository){
        $this->configUserRepository = $configUserRepository;
    }

    function index(){
        $list = $this->configUserRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/ConfigUser/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/ConfigUser/Create");
    }

    function edit($id){
        $data = $this->configUserRepository->fetchById($id);
        return inertia()->render("v2/Settings/ConfigUser/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->configUserRepository->fetchById($id);
        return inertia()->render("v2/Settings/ConfigUser/Show",[
            "data"=>$data
        ]);
    }

    function store(ConfigUserStoreRequest $request){
      $record = $this->configUserRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,ConfigUserUpdateRequest $configUserUpdateRequest){
        $record = $this->configUserRepository->update($id,$configUserUpdateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->configUserRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
