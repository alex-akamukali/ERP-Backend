<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProvinceRequest;
use App\Http\Requests\UpdateProvinceRequest;
use App\Models\Settings\Province;
use App\Repositories\ProvinceRepo;

class ProvinceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ProvinceRepo $provinceRepo)
    {
        return inertia()->render("Settings/Province",[
            'list'=>$provinceRepo->fetch(request()->all())->get(),
            'message'=>$this->getMessage(),
            'error'=>$this->getError()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProvinceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProvinceRequest $request)
    {
        //
        Province::create($request->validated());
        return $this->respondWithSuccess("New province added.");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Settings\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function show(Province $province)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Settings\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function edit(Province $province)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProvinceRequest  $request
     * @param  \App\Models\Settings\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProvinceRequest $request, Province $province)
    {
        $province->update($request->validated());
        return $this->respondWithSuccess("Province updated");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Settings\Province  $province
     * @return \Illuminate\Http\Response
     */
    public function destroy(Province $province)
    {
        $province->delete();
        return $this->respondWithSuccess("Province removed.");
    }

}
