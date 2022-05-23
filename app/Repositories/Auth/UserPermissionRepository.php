<?php
namespace App\Repositories\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserPermissionRepository
{

    function fetch($filters=[]){
        $query = User::query();
        return $query;
    }

    function fetchById($id){
        $record = User::query()->find($id);
        return $record;
    }


    function updatePermission($id,$data){
        $key = $data['key'];
        $value = $data['value'];
        $post = [
          $key=>$value
        ];
        $record = User::query()->find($id);
        $record->update($post);
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
