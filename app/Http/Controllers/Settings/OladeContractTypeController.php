<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOladeContractTypeRequest;
use App\Http\Requests\UpdateOladeContractTypeRequest;
use App\Models\Settings\OladeContractType;

class OladeContractTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return inertia()->render('Settings/OladeContractType',[
            'message'=>$this->getMessage(),
            'error'=>$this->getError(),
            'list'=>OladeContractType::all()
        ]);

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
     * @param  \App\Http\Requests\StoreOladeContractTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOladeContractTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Settings\OladeContractType  $oladeContractType
     * @return \Illuminate\Http\Response
     */
    public function show(OladeContractType $oladeContractType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Settings\OladeContractType  $oladeContractType
     * @return \Illuminate\Http\Response
     */
    public function edit(OladeContractType $oladeContractType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOladeContractTypeRequest  $request
     * @param  \App\Models\Settings\OladeContractType  $oladeContractType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOladeContractTypeRequest $request, OladeContractType $oladeContractType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Settings\OladeContractType  $oladeContractType
     * @return \Illuminate\Http\Response
     */
    public function destroy(OladeContractType $oladeContractType)
    {
        //
    }
}
