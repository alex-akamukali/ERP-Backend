<?php
namespace App\Repositories\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserRepository
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
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = User::create($data);
        return $record;
    }

    function remove($id){
        $record = User::query()->find($id);
        $record->delete();
        return $record;
    }

    

}
