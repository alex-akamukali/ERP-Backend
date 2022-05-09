<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\User\UserRepository;

class UserController extends Controller
{

    public function index(UserRepository $userRepository)
    {
        return inertia()->render("User/User", $this->data([
            'list' => $userRepository->fetch(request()->all())->paginate(15)
        ]));
    }

    public function create()
    {
    }

    public function store(StoreUserRequest $request, UserRepository $userRepository)
    {
        $record = $userRepository->create($request->validated());
        return $this->respondWithSuccess("User invited.");
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(UpdateUserRequest $request, $id, UserRepository $userRepository)
    {
        $record = $userRepository->update($id, $request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id, UserRepository $userRepository)
    {
        $userRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }
}
