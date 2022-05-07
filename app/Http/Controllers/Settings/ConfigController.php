<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreConfigRequest;
use App\Http\Requests\UpdateConfigRequest;
use App\Models\Settings\Config;
use App\Repositories\ConfigRepo;

class ConfigController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ConfigRepo $configRepo)
    {
        return inertia()->render("Settings/Config",$this->data([
            'list'=>$configRepo->fetch()->get()
        ]));
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
     * @param  \App\Http\Requests\StoreConfigRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreConfigRequest $request)
    {
        Config::create($request->validated());
        return $this->respondWithSuccess("New config setting added.");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Settings\Config  $config
     * @return \Illuminate\Http\Response
     */
    public function show(Config $config)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Settings\Config  $config
     * @return \Illuminate\Http\Response
     */
    public function edit(Config $config)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateConfigRequest  $request
     * @param  \App\Models\Settings\Config  $config
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateConfigRequest $request, Config $config)
    {
        //
        $config->update($request->validated());
        return $this->respondWithSuccess("Config setting updated.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Settings\Config  $config
     * @return \Illuminate\Http\Response
     */
    public function destroy(Config $config)
    {
        $config->delete();
        return $this->respondWithSuccess("Config setting removed.");
    }

}
