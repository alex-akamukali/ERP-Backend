<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKnowledgeAreaRequest;
use App\Http\Requests\UpdateKnowledgeAreaRequest;
use App\Models\Settings\KnowledgeArea;
use App\Models\Settings\ProgramType;
use App\Repositories\KnowledgeAreaRepo;
use App\Repositories\ProgramTypeRepo;

class KnowledgeAreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(KnowledgeAreaRepo $knowledgeAreaRepo,ProgramTypeRepo $programTypeRepo)
    {
        //
        return $this->inertiaRenderResource("Settings/KnowledgeArea", "knowledge-area", [
            'program_types' =>$programTypeRepo->fetch()->active()->get(),
            'list'=>$knowledgeAreaRepo->fetch(request()->all())->get(),
            'knowledge_area_types'=>KnowledgeArea::KNOWLEDGE_AREA_TYPES,
            'statuses'=>KnowledgeArea::STATUSES
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
     * @param  \App\Http\Requests\StoreKnowledgeAreaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKnowledgeAreaRequest $request)
    {
        $data = $request->validated();
        KnowledgeArea::create($data);
        return $this->respondWithSuccess("New Knowledge Area Added Successfully.");
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
        // dd($knowledgeArea,$request->validated());
        $knowledgeArea->update($request->validated());
        return $this->respondWithSuccess('Knowledge Area updated');
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
         $knowledgeArea->delete();
         return $this->respondWithSuccess("Selected knowledge area removed.");
    }
}
