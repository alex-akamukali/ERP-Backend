<?php

namespace App\User;

use App\Models\User;

class UserRepository
{

    function fetch($filters=[]){

    }

    function login(){

    }

    function invite(){

    }

    function inviteAdmin(){

    }

    function inviteStaff(){

    }

    function inviteCandidate(){

    }

    function updateProfile($id,$data=[]){
      $user = User::find($id)->update($data);
      return $user;
    }

    function deleteAccount($id){
       $user = User::find($id);
       $user->delete();
       return $user;
    }

}
