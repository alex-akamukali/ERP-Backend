<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Candidate\InviteCandidateRequest;
use App\Http\Requests\Candidate\ReInviteCandidateRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Mail\User\InviteCandidate;
use App\Models\User;
use App\User\UserRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class InviteCandidateController extends Controller
{

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(InviteCandidateRequest $request, UserRepository $userRepository)
    {
        $userRepository->create($request->validated());
        return $this->respondWithSuccess("Invitation Sent Successfully!");
    }


    public function show(User $user)
    {
        //
    }

    public function edit(User $user)
    {
        //
    }

    public function update($id, UserRepository $userRepository) //re-invite
    {
        $userRepository->resendInvitation($id);
        return $this->respondWithSuccess("Invitation resent!");
    }

    public function destroy(User $user)
    {
        //
    }
}
