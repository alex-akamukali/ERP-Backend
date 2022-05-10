<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUploadAvatarRequest;
use App\Http\Requests\User\UpdateUploadAvatarRequest;
use App\User\UserRepository;

class UploadAvatarController extends Controller
{

    public function index(UserRepository $userRepository)
    {
        return $userRepository->fetch(request()->all())->get();
    }

    public function create()
    {
    }

    public function store(StoreUploadAvatarRequest $request,UserRepository $userRepository)
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

    public function update(UpdateUploadAvatarRequest $request, $id ,UserRepository $userRepository)
    {
        $data = $request->uploadAvatar();
        $record = $userRepository->update($id,$data);
        return $this->respondWithSuccess("Avatar uploaded successfully.");
    }

    public function destroy($id,UserRepository $userRepository)
    {
        $userRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }

}
