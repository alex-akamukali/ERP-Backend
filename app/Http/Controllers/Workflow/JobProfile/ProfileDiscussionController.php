<?php

namespace App\Http\Controllers\Workflow\JobProfile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProfileDiscussionRequest;
use App\Http\Requests\UpdateProfileDiscussionRequest;
use App\Models\Workflow\JobProfile\ProfileDiscussion;

class ProfileDiscussionController extends Controller
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
     * @param  \App\Http\Requests\StoreProfileDiscussionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProfileDiscussionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workflow\JobProfile\ProfileDiscussion  $profileDiscussion
     * @return \Illuminate\Http\Response
     */
    public function show(ProfileDiscussion $profileDiscussion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workflow\JobProfile\ProfileDiscussion  $profileDiscussion
     * @return \Illuminate\Http\Response
     */
    public function edit(ProfileDiscussion $profileDiscussion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProfileDiscussionRequest  $request
     * @param  \App\Models\Workflow\JobProfile\ProfileDiscussion  $profileDiscussion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProfileDiscussionRequest $request, ProfileDiscussion $profileDiscussion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workflow\JobProfile\ProfileDiscussion  $profileDiscussion
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProfileDiscussion $profileDiscussion)
    {
        //
    }
}
