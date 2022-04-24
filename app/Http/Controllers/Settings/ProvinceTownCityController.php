<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProvinceTownCityRequest;
use App\Http\Requests\UpdateProvinceTownCityRequest;
use App\Models\Settings\ProvinceTownCity;

class ProvinceTownCityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
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
    }
}
