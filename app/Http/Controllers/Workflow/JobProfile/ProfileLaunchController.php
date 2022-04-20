<?php

namespace App\Http\Controllers\Workflow\JobProfile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProfileLaunchRequest;
use App\Http\Requests\UpdateProfileLaunchRequest;
use App\Models\Workflow\JobProfile\ProfileLaunch;

class ProfileLaunchController extends Controller
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
     * @param  \App\Http\Requests\StoreProfileLaunchRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProfileLaunchRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workflow\JobProfile\ProfileLaunch  $profileLaunch
     * @return \Illuminate\Http\Response
     */
    public function show(ProfileLaunch $profileLaunch)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workflow\JobProfile\ProfileLaunch  $profileLaunch
     * @return \Illuminate\Http\Response
     */
    public function edit(ProfileLaunch $profileLaunch)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProfileLaunchRequest  $request
     * @param  \App\Models\Workflow\JobProfile\ProfileLaunch  $profileLaunch
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProfileLaunchRequest $request, ProfileLaunch $profileLaunch)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workflow\JobProfile\ProfileLaunch  $profileLaunch
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProfileLaunch $profileLaunch)
    {
        //
    }
}
