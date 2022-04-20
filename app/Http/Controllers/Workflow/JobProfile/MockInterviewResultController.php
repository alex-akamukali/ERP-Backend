<?php

namespace App\Http\Controllers\Workflow\JobProfile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMockInterviewResultRequest;
use App\Http\Requests\UpdateMockInterviewResultRequest;
use App\Models\Workflow\JobProfile\MockInterviewResult;

class MockInterviewResultController extends Controller
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
     * @param  \App\Http\Requests\StoreMockInterviewResultRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMockInterviewResultRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workflow\JobProfile\MockInterviewResult  $mockInterviewResult
     * @return \Illuminate\Http\Response
     */
    public function show(MockInterviewResult $mockInterviewResult)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workflow\JobProfile\MockInterviewResult  $mockInterviewResult
     * @return \Illuminate\Http\Response
     */
    public function edit(MockInterviewResult $mockInterviewResult)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMockInterviewResultRequest  $request
     * @param  \App\Models\Workflow\JobProfile\MockInterviewResult  $mockInterviewResult
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMockInterviewResultRequest $request, MockInterviewResult $mockInterviewResult)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workflow\JobProfile\MockInterviewResult  $mockInterviewResult
     * @return \Illuminate\Http\Response
     */
    public function destroy(MockInterviewResult $mockInterviewResult)
    {
        //
    }
}
