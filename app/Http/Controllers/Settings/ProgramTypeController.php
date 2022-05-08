<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StoreProgramTypeRequest;
use App\Http\Requests\Settings\UpdateProgramTypeRequest;
use App\Settings\ProgramTypeRepository;

class ProgramTypeController extends Controller
{

    public function index(ProgramTypeRepository $programTypeRepository)
    {
        return inertia()->render("Settings/ProgramType",$this->data([
            'list'=>$programTypeRepository->fetch(request()->all())->get()
        ]));
    }

    public function create()
    {
    }

    public function store(StoreProgramTypeRequest $request,ProgramTypeRepository $programTypeRepository)
    {
        $record = $programTypeRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(UpdateProgramTypeRequest $request, $id ,ProgramTypeRepository $programTypeRepository)
    {
        $record = $programTypeRepository->update($id,$request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id,ProgramTypeRepository $programTypeRepository)
    {
        $programTypeRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }

}
