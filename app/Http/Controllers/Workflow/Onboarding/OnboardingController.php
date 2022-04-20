<?php

namespace App\Http\Controllers\Workflow\Onboarding;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOnboardingRequest;
use App\Http\Requests\UpdateOnboardingRequest;
use App\Models\Workflow\Onboarding\Onboarding;

class OnboardingController extends Controller
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
     * @param  \App\Http\Requests\StoreOnboardingRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOnboardingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workflow\Onboarding\Onboarding  $onboarding
     * @return \Illuminate\Http\Response
     */
    public function show(Onboarding $onboarding)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workflow\Onboarding\Onboarding  $onboarding
     * @return \Illuminate\Http\Response
     */
    public function edit(Onboarding $onboarding)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOnboardingRequest  $request
     * @param  \App\Models\Workflow\Onboarding\Onboarding  $onboarding
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOnboardingRequest $request, Onboarding $onboarding)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workflow\Onboarding\Onboarding  $onboarding
     * @return \Illuminate\Http\Response
     */
    public function destroy(Onboarding $onboarding)
    {
        //
    }
}
