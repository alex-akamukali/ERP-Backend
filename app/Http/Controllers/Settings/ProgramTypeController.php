<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProgramTypeRequest;
use App\Http\Requests\UpdateProgramTypeRequest;
use App\Models\Settings\ProgramType;

class ProgramTypeController extends Controller
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
     * @param  \App\Http\Requests\StoreProgramTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProgramTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Settings\ProgramType  $programType
     * @return \Illuminate\Http\Response
     */
    public function show(ProgramType $programType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Settings\ProgramType  $programType
     * @return \Illuminate\Http\Response
     */
    public function edit(ProgramType $programType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProgramTypeRequest  $request
     * @param  \App\Models\Settings\ProgramType  $programType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProgramTypeRequest $request, ProgramType $programType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Settings\ProgramType  $programType
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProgramType $programType)
    {
        //
    }
}
