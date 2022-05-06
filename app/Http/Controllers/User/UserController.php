<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Repositories\UserRepo;

class UserController extends Controller
{

    public function index(UserRepo $userRepo)
    {

        $list = $userRepo->fetch(request()->all())->orderBy('id', 'desc')->candidates()->paginate(7);
        return inertia()->render('User/UserList', [
            'users' => $list,
            'message' => $this->getMessage(),
            'error' => $this->getError(),
            'invite_candidate_route' => route('invite-candidate.store'),
            'reinvite_candidate_route' => route('invite-candidate.update', '')
        ]);
    }

    public function create()
    {
    }

    public function store(StoreUserRequest $request)
    {
    }

    public function show(User $user)
    {
    }

    public function edit(User $user)
    {
    }

    public function update(UpdateUserRequest $request, User $user)
    {
    }

    public function destroy(User $user)
    {
    }
}
