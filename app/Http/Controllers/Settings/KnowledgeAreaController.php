<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKnowledgeAreaRequest;
use App\Http\Requests\UpdateKnowledgeAreaRequest;
use App\Models\Settings\KnowledgeArea;

class KnowledgeAreaController extends Controller
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
     * @param  \App\Http\Requests\StoreKnowledgeAreaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKnowledgeAreaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Settings\KnowledgeArea  $knowledgeArea
     * @return \Illuminate\Http\Response
     */
    public function show(KnowledgeArea $knowledgeArea)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Settings\KnowledgeArea  $knowledgeArea
     * @return \Illuminate\Http\Response
     */
    public function edit(KnowledgeArea $knowledgeArea)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateKnowledgeAreaRequest  $request
     * @param  \App\Models\Settings\KnowledgeArea  $knowledgeArea
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateKnowledgeAreaRequest $request, KnowledgeArea $knowledgeArea)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Settings\KnowledgeArea  $knowledgeArea
     * @return \Illuminate\Http\Response
     */
    public function destroy(KnowledgeArea $knowledgeArea)
    {
        //
    }
}
