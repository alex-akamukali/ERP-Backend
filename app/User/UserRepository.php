<?php

namespace App\User;

use App\Mail\User\InviteCandidate;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class UserRepository
{

    function fetch($filters = [])
    {
        $query = User::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = User::query()->find($id);
        return $record;
    }

    function sendInvitation($user){
        Mail::to($user->email)->send(new InviteCandidate($user));
    }

    function update($id, $data)
    {
        $record = User::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $data['name'] = $data['first_name'] . ' ' . $data['last_name'];
        // $data['account_type'] = User::ACCOUNT_TYPE_CANDIDATE;
        $data['password'] = Hash::make('password'); //password
        $data['account_status'] = User::ACCOUNT_STATUS_INVITED;
        $record = User::create($data);
        $this->sendInvitation($record);
        return $record;
    }

    function resendInvitation($id){
        $record = User::query()->find($id);
        $this->sendInvitation($record);
        return $record;
    }

    function remove($id)
    {
        $record = User::query()->find($id);
        $record->delete();
        return $record;
    }

    function login($request=[]){
        $auth = Auth::attempt($request);
        return $auth;
    }

    function logout(){
        Auth::logout();
        return true;
    }

    function isLogged(){
        return Auth::check();
    }

    function auth(){
        return Auth::user();
    }

}
