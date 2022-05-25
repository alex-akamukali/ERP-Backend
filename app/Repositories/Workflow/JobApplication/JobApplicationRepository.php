<?php
namespace App\Repositories\Workflow\JobApplication;
use App\Models\Workflow\JobApplication\JobApplication;
use Illuminate\Support\Facades\Auth;

class JobApplicationRepository
{

    function fetch($filters=[]){
        $query = JobApplication::query();
        return $query;
    }

    function fetchById($id){
        $record = JobApplication::query()->find($id);
        return $record;
    }

    function approved($userId){
        $query = JobApplication::query()->getByUserId($userId)->statusApproved();
        return $query;
     }



    function update($id,$data){
        $record = JobApplication::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = JobApplication::create($data);
        return $record;
    }

    function remove($id){
        $record = JobApplication::query()->find($id);
        $record->delete();
        return $record;
    }



}
