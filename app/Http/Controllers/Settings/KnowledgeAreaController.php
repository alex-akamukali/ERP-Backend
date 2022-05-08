<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StoreKnowledgeAreaRequest;
use App\Http\Requests\Settings\UpdateKnowledgeAreaRequest;
use App\Models\Settings\KnowledgeArea;
use App\Settings\KnowledgeAreaRepository;
use App\Settings\ProgramTypeRepository;

class KnowledgeAreaController extends Controller
{

    public function index(KnowledgeAreaRepository $knowledgeAreaRepository, ProgramTypeRepository $programTypeRepository)
    {
        return inertia()->render("Settings/KnowledgeArea", $this->data([
            'list' => $knowledgeAreaRepository->fetch(request()->all())->get(),
            'program_types' => $programTypeRepository->fetch()->active()->get(),
            'knowledge_area_types' => KnowledgeArea::KNOWLEDGE_AREA_TYPES,
            'statuses' => KnowledgeArea::STATUSES
        ]));
    }

    public function create()
    {
    }

    public function store(StoreKnowledgeAreaRequest $request, KnowledgeAreaRepository $knowledgeAreaRepository)
    {
        $record = $knowledgeAreaRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(UpdateKnowledgeAreaRequest $request, $id, KnowledgeAreaRepository $knowledgeAreaRepository)
    {
        $record = $knowledgeAreaRepository->update($id, $request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id, KnowledgeAreaRepository $knowledgeAreaRepository)
    {
        $knowledgeAreaRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }
}
