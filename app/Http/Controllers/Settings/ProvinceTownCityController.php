<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StoreProvinceTownCityRequest;
use App\Http\Requests\Settings\UpdateProvinceTownCityRequest;
use App\Settings\ProvinceRepository;
use App\Settings\ProvinceTownCityRepository;

class ProvinceTownCityController extends Controller
{

    public function index(ProvinceTownCityRepository $provinceTownCityRepository, ProvinceRepository $provinceRepository)
    {
        return inertia()->render("Settings/ProvinceTownCity", $this->data([
            'list' => $provinceTownCityRepository->fetch(request()->all())->get(),
            'provinces' => $provinceRepository->fetch(request()->all())->get(),
            'id' => request('province_id')
        ]));
    }

    public function create()
    {
    }

    public function store(StoreProvinceTownCityRequest $request, ProvinceTownCityRepository $provinceTownCityRepository)
    {
        $record = $provinceTownCityRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(UpdateProvinceTownCityRequest $request, $id, ProvinceTownCityRepository $provinceTownCityRepository)
    {
        $record = $provinceTownCityRepository->update($id, $request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id, ProvinceTownCityRepository $provinceTownCityRepository)
    {
        $provinceTownCityRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }
}
