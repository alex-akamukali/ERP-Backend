<?php

namespace App\Http\Controllers\v1\Settings;

use App\Repositories\Settings\Interfaces\ConfigRepositoryInterface;
use App\Http\Requests\Settings\Config\StoreRequest;
use App\Http\Requests\Settings\Config\UpdateRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    //
    private $configRepository = null;

    function __construct(ConfigRepositoryInterface $configRepository){
        $this->configRepository = $configRepository;
    }

    function index(){
        $list = $this->configRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/Config/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/Config/Create");
    }

    function edit($id){
        $data = $this->configRepository->fetchById($id);
        return inertia()->render("v2/Settings/Config/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->configRepository->fetchById($id);
        return inertia()->render("v2/Settings/Config/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->configRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->configRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->configRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
