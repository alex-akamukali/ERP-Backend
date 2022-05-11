<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUpdateUserSkillRequest;
use App\Http\Requests\User\UpdateUpdateUserSkillRequest;
use App\User\UserRepository;

class UpdateUserSkillController extends Controller
{

    public function index(UserRepository $userRepository)
    {
        return $userRepository->fetch(request()->all())->get();
    }

    public function create()
    {
    }

    public function store(StoreUpdateUserSkillRequest $request,UserRepository $userRepository)
    {
        $record = $userRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id,UserRepository $userRepository)
    {
        return $userRepository->fetchById($id);
    }

    public function edit($id,UserRepository $userRepository)
    {
        //return $userRepository->fetchById($id);
    }

    public function update(UpdateUpdateUserSkillRequest $request, $id ,UserRepository $userRepository)
    {
        $record = $userRepository->update($id,$request->validated());
        return $this->respondWithSuccess("User skill updated.");
    }

    public function destroy($id,UserRepository $userRepository)
    {
        $userRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }

}
