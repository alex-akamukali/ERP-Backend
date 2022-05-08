<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StoreProvinceRequest;
use App\Http\Requests\Settings\UpdateProvinceRequest;
use App\Settings\ProvinceRepository;

class ProvinceController extends Controller
{

    public function index(ProvinceRepository $provinceRepository)
    {
        return inertia()->render("Settings/Province",$this->data([
            'list'=>$provinceRepository->fetch(request()->all())->get()
        ]));
    }

    public function create()
    {
    }

    public function store(StoreProvinceRequest $request,ProvinceRepository $provinceRepository)
    {
        $record = $provinceRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(UpdateProvinceRequest $request, $id ,ProvinceRepository $provinceRepository)
    {
        $record = $provinceRepository->update($id,$request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id,ProvinceRepository $provinceRepository)
    {
        $provinceRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }

}
