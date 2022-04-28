<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Candidate\InviteCandidateRequest;
use App\Http\Requests\Candidate\ReInviteCandidateRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Mail\User\InviteCandidate;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class InviteCandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InviteCandidateRequest $request)
    {
        //account_type
        $data = $request->validated();
        $data['name'] = $data['first_name'] . ' ' . $data['last_name'];
        $data['account_type'] = User::ACCOUNT_TYPE_CANDIDATE;
        $data['password'] = Hash::make('password'); //password
        $data['account_status'] = User::ACCOUNT_STATUS_INVITED;
        $user = User::create($data);
        $this->sendInvitation($user);
        return $this->respondWithSuccess("Invitation Sent Successfully!");

    }

    function sendInvitation($user){
       Mail::to($user->email)->send(new InviteCandidate($user));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(ReInviteCandidateRequest $request, User $user) //re-invite
    {
        $data = $request->validated();
        $email = $data['email'];
        $user = User::query()->where('email',$email)->first();
        $this->sendInvitation($user);
        return $this->respondWithSuccess("Invitation resent!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
