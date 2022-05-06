<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOladeContractTypeRequest;
use App\Http\Requests\UpdateOladeContractTypeRequest;
use App\Models\Settings\OladeContractType;
use App\Repositories\OladeContractTypeRepo;

class OladeContractTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(OladeContractTypeRepo $oladeContractTypeRepo)
    {

        return inertia()->render('Settings/OladeContractType', [
            'message' => $this->getMessage(),
            'error' => $this->getError(),
            'list' => $oladeContractTypeRepo->fetch(request()->all())->get(),
            'statuses'=>OladeContractType::STATUSES
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
        return inertia()->render('Settings/OladeContractTypeCreate',[
            'statuses'=>OladeContractType::STATUSES
        ]);
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
        OladeContractType::create($request->validated());
        return $this->respondWithSuccessRoute("New contract type added.",route('olade-contract-type.index'));
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
        return inertia()->render('Settings/OladeContractTypeEdit',[
            'data'=>$oladeContractType,
            'statuses'=>OladeContractType::STATUSES
        ]);
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
        $data = $request->validated();
        $oladeContractType->update($data);
        return $this->respondWithSuccessRoute("Contract type saved.",route('olade-contract-type.index'));
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
        $oladeContractType->delete();
        return $this->respondWithSuccess("Contract type removed.");
    }
}
