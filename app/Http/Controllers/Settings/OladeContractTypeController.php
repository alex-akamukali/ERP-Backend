<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StoreOladeContractTypeRequest;
use App\Http\Requests\Settings\UpdateOladeContractTypeRequest;
use App\Models\Settings\OladeContractType;
use App\Settings\OladeContractTypeRepository;

class OladeContractTypeController extends Controller
{

    public function index(OladeContractTypeRepository $oladeContractTypeRepository)
    {
        return inertia()->render("Settings/OladeContractType", $this->data([
            'list' => $oladeContractTypeRepository->fetch(request()->all())->get(),
            'statuses' => $oladeContractTypeRepository->statuses()
        ]));
    }

    public function create(OladeContractTypeRepository $oladeContractTypeRepository)
    {
        return inertia()->render("Settings/OladeContractTypeCreate",$this->data([
            'statuses' => $oladeContractTypeRepository->statuses()
        ]));
    }

    public function store(StoreOladeContractTypeRequest $request, OladeContractTypeRepository $oladeContractTypeRepository)
    {
        $record = $oladeContractTypeRepository->create($request->validated());
        return $this->respondWithSuccessRoute("New record added.",route("olade-contract-type.index"));
    }

    public function show($id)
    {

    }

    public function edit($id, OladeContractTypeRepository $oladeContractTypeRepository)
    {
        return inertia()->render("Settings/OladeContractTypeEdit",[
          'data'=>$oladeContractTypeRepository->fetchById($id),
          'statuses' => $oladeContractTypeRepository->statuses()
        ]);
    }

    public function update(UpdateOladeContractTypeRequest $request, $id, OladeContractTypeRepository $oladeContractTypeRepository)
    {
        $record = $oladeContractTypeRepository->update($id, $request->validated());
        return $this->respondWithSuccessRoute("Record updated.",route("olade-contract-type.index"));
    }

    public function destroy($id, OladeContractTypeRepository $oladeContractTypeRepository)
    {
        $oladeContractTypeRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }
}
