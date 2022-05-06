<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProvinceTownCityRequest;
use App\Http\Requests\UpdateProvinceTownCityRequest;
use App\Models\Settings\ProvinceTownCity;
use App\Repositories\ProvinceRepo;
use App\Repositories\ProvinceTownCityRepo;

class ProvinceTownCityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ProvinceTownCityRepo $provinceTownCityRepo, ProvinceRepo $provinceRepo)
    {
        //
        return inertia()->render('Settings/ProvinceTownCity', [
            'message' => $this->getMessage(),
            'error' => $this->getError(),
            'list' => $provinceTownCityRepo->fetch(request()->all())->get(),
            'provinces' => $provinceRepo->fetch(request()->all())->get(),
            'id'=>request('province_id')
        ]);
        //request('id')
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
     * @param  \App\Http\Requests\StoreProvinceTownCityRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProvinceTownCityRequest $request)
    {
        ProvinceTownCity::create($request->validated());
        return $this->respondWithSuccess("Town/City added.");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Settings\ProvinceTownCity  $provinceTownCity
     * @return \Illuminate\Http\Response
     */
    public function show(ProvinceTownCity $provinceTownCity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Settings\ProvinceTownCity  $provinceTownCity
     * @return \Illuminate\Http\Response
     */
    public function edit(ProvinceTownCity $provinceTownCity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProvinceTownCityRequest  $request
     * @param  \App\Models\Settings\ProvinceTownCity  $provinceTownCity
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProvinceTownCityRequest $request, ProvinceTownCity $provinceTownCity)
    {
        //
        $provinceTownCity->update($request->validated());
        return $this->respondWithSuccess("Town/City updated.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Settings\ProvinceTownCity  $provinceTownCity
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProvinceTownCity $provinceTownCity)
    {
        //
        $provinceTownCity->delete();
        return $this->respondWithSuccess("Town/City removed.");
    }
}
