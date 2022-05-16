<?php

namespace App\Http\Controllers\v2\Settings;

use App\Repositories\Settings\KnowledgeAreaRepository;
use App\Http\Requests\Settings\KnowledgeArea\StoreRequest;
use App\Http\Requests\Settings\KnowledgeArea\UpdateRequest;
use App\Http\Controllers\Controller;
use App\Repositories\Settings\ProgramTypeRepository;

//use Illuminate\Http\Request;

class KnowledgeAreaController extends Controller
{
    //
    private $knowledgeAreaRepository = null;

    function __construct(KnowledgeAreaRepository $knowledgeAreaRepository)
    {
        $this->knowledgeAreaRepository = $knowledgeAreaRepository;
    }

    function index(ProgramTypeRepository $programTypeRepository)
    {
        $list = $this->knowledgeAreaRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/KnowledgeArea/Index", [
            "list" => $list,
            "program_types" => $programTypeRepository->fetch([])->get(),
            "knowledge_area_types" => $this->knowledgeAreaRepository->types(),
            "statuses"=>$this->knowledgeAreaRepository->statuses()
        ]);
    }

    function create()
    {
        return inertia()->render("v2/Settings/KnowledgeArea/Create");
    }

    function edit($id)
    {
        $data = $this->knowledgeAreaRepository->fetchById($id);
        return inertia()->render("v2/Settings/KnowledgeArea/Edit", [
            "data" => $data
        ]);
    }

    function show($id)
    {
        $data = $this->knowledgeAreaRepository->fetchById($id);
        return inertia()->render("v2/Settings/KnowledgeArea/Show", [
            "data" => $data
        ]);
    }

    function store(StoreRequest $request)
    {
        $record = $this->knowledgeAreaRepository->create($request->validated());
        return $this->respondWithSuccess("New record added");
    }

    function update($id, UpdateRequest $updateRequest)
    {
        $record = $this->knowledgeAreaRepository->update($id, $updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id)
    {
        $record = $this->knowledgeAreaRepository->remove($id);
        return $this->respondWithSuccess("Record removed");
    }
}
