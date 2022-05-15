<?php
namespace App\Repositories\Auth;

use App\Mail\User\InviteCandidate;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class InviteCandidateRepository
{

    function fetch($filters=[]){
        $query = User::query();
        return $query;
    }

    function fetchById($id){
        $record = User::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = User::query()->find($id);
        $this->sendInvitation($record);
        // $record->update($data);
        return $record;
    }

    function create($data){
        $data['name'] = $data['first_name'] . ' ' . $data['last_name']; //invite-candidate
        $data['password'] = Hash::make('password123');
        $record = User::create($data);
        $this->sendInvitation($record);
        return $record;
    }

    function sendInvitation($user){
        Mail::to($user->email)->send(new InviteCandidate($user));
    }

    function remove($id){
        $record = User::query()->find($id);
        $record->delete();
        return $record;
    }



}
