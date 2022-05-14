<?php

namespace App\Http\Controllers\Settings;

use App\Repositories\Settings\ConfigRepository;
use App\Http\Requests\Settings\ConfigStoreRequest;
use App\Http\Requests\Settings\ConfigUpdateRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    //
    private $configRepository = null;

    function __construct(ConfigRepository $configRepository){
        $this->configRepository = $configRepository;
    }

    function index(){
        return inertia()->render("Dashboard/Dashboard",[]);
    }

    function store(ConfigStoreRequest $configStoreRequest){
      $record = $this->configRepository->create($configStoreRequest->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,ConfigUpdateRequest $configUpdateRequest){
        $record = $this->configRepository->update($id,$configUpdateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->configRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
