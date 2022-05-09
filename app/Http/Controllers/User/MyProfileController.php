<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreMyProfileRequest;
use App\Http\Requests\User\UpdateMyProfileRequest;
use App\User\UserRepository;

class MyProfileController extends Controller
{

    public function index(UserRepository $userRepository)
    {
        return inertia()->render("User/MyProfile",$this->data([
            'auth'=>$userRepository->auth()
        ]));
    }

    public function create()
    {
        return inertia()->render("User/MyProfileCreate",$this->data([]));
    }

    public function store(StoreMyProfileRequest $request,UserRepository $userRepository)
    {
        $record = $userRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id,UserRepository $userRepository)
    {
        return inertia()->render("User/MyProfileShow",$this->data([
            "data"=>$userRepository->fetchById($id)
        ]));
    }

    public function edit($id,UserRepository $userRepository)
    {
        return inertia()->render("User/MyProfileCreate",$this->data([
            "data"=>$userRepository->fetchById($id)
        ]));
    }

    public function update(UpdateMyProfileRequest $request, $id ,UserRepository $userRepository)
    {
        $data = $request->validated();
        $data['avatar'] = $request->uploadAvatar();
        $record = $userRepository->update($id,$request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id,UserRepository $userRepository)
    {
        $userRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }

}
