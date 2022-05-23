<?php
namespace App\Repositories\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DocusignRepository
{

    function fetch($filters=[]){
        $query = User::query();
        if (isset($filters['status'])){
           $query = $query->status($filters['status']);
        }
        return $query;
    }

    function fetchById($id){
        $record = User::query()->find($id);
        return $record;
    }

    function activeUsers($filters=[]){

       $filters['status'] = User::ACCOUNT_STATUS_ACTIVE;
       return $this->fetch($filters=[]);
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
