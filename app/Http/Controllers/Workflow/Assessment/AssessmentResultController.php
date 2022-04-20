<?php

namespace App\Http\Controllers\Workflow\Assessment;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAssessmentResultRequest;
use App\Http\Requests\UpdateAssessmentResultRequest;
use App\Models\Workflow\Assessment\AssessmentResult;

class AssessmentResultController extends Controller
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
     * @param  \App\Http\Requests\StoreAssessmentResultRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAssessmentResultRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workflow\Assessment\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function show(AssessmentResult $assessmentResult)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workflow\Assessment\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function edit(AssessmentResult $assessmentResult)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAssessmentResultRequest  $request
     * @param  \App\Models\Workflow\Assessment\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAssessmentResultRequest $request, AssessmentResult $assessmentResult)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workflow\Assessment\AssessmentResult  $assessmentResult
     * @return \Illuminate\Http\Response
     */
    public function destroy(AssessmentResult $assessmentResult)
    {
        //
    }
}
