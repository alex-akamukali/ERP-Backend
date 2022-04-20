<?php

namespace App\Http\Controllers\Workflow\Assessment;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAssessmentInterviewRequest;
use App\Http\Requests\UpdateAssessmentInterviewRequest;
use App\Models\Workflow\Assessment\AssessmentInterview;

class AssessmentInterviewController extends Controller
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
     * @param  \App\Http\Requests\StoreAssessmentInterviewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAssessmentInterviewRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workflow\Assessment\AssessmentInterview  $assessmentInterview
     * @return \Illuminate\Http\Response
     */
    public function show(AssessmentInterview $assessmentInterview)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workflow\Assessment\AssessmentInterview  $assessmentInterview
     * @return \Illuminate\Http\Response
     */
    public function edit(AssessmentInterview $assessmentInterview)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAssessmentInterviewRequest  $request
     * @param  \App\Models\Workflow\Assessment\AssessmentInterview  $assessmentInterview
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAssessmentInterviewRequest $request, AssessmentInterview $assessmentInterview)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workflow\Assessment\AssessmentInterview  $assessmentInterview
     * @return \Illuminate\Http\Response
     */
    public function destroy(AssessmentInterview $assessmentInterview)
    {
        //
    }
}
