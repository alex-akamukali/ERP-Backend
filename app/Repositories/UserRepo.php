<?php

namespace App\Repositories;

use App\Models\User;

class UserRepo
{

    function fetch($filters=[]){
        $query = User::query();

        return $query;
    }

}
