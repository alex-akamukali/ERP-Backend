<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StoreConfigRequest;
use App\Http\Requests\Settings\UpdateConfigRequest;
use App\Settings\ConfigRepository;

class ConfigController extends Controller
{

    public function index(ConfigRepository $configRepository)
    {
        return inertia()->render("Settings/Config",$this->data([
            'list'=>$configRepository->fetch(request()->all())->get()
        ]));
    }

    public function create()
    {
    }

    public function store(StoreConfigRequest $request,ConfigRepository $configRepository)
    {
        $record = $configRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(UpdateConfigRequest $request, $id ,ConfigRepository $configRepository)
    {
        $record = $configRepository->update($id,$request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id,ConfigRepository $configRepository)
    {
        $configRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }

}
