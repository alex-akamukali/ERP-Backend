<?php
namespace App\Repositories\Workflow\JobProfile;
use App\Models\Workflow\JobProfile\ProfileLaunch;
use Illuminate\Support\Facades\Auth;

class ProfileLaunchRepository
{

    function fetch($filters=[]){
        $query = ProfileLaunch::query();
        return $query;
    }

    function fetchById($id){
        $record = ProfileLaunch::query()->find($id);
        return $record;
    }

    function approved($userId){
        $query = ProfileLaunch::query()->getByUserId($userId)->statusApproved();
        return $query;
     }



    function update($id,$data){
        $record = ProfileLaunch::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = ProfileLaunch::create($data);
        return $record;
    }

    function remove($id){
        $record = ProfileLaunch::query()->find($id);
        $record->delete();
        return $record;
    }



}
