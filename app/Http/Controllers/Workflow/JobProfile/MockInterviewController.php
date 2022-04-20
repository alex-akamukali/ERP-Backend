<?php

namespace App\Http\Controllers\Workflow\JobProfile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMockInterviewRequest;
use App\Http\Requests\UpdateMockInterviewRequest;
use App\Models\Workflow\JobProfile\MockInterview;

class MockInterviewController extends Controller
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
     * @param  \App\Http\Requests\StoreMockInterviewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMockInterviewRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workflow\JobProfile\MockInterview  $mockInterview
     * @return \Illuminate\Http\Response
     */
    public function show(MockInterview $mockInterview)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workflow\JobProfile\MockInterview  $mockInterview
     * @return \Illuminate\Http\Response
     */
    public function edit(MockInterview $mockInterview)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMockInterviewRequest  $request
     * @param  \App\Models\Workflow\JobProfile\MockInterview  $mockInterview
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMockInterviewRequest $request, MockInterview $mockInterview)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workflow\JobProfile\MockInterview  $mockInterview
     * @return \Illuminate\Http\Response
     */
    public function destroy(MockInterview $mockInterview)
    {
        //
    }
}
