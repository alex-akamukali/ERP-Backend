<?php
namespace App\Repositories\Workflow\JobProfile;
use App\Models\Workflow\JobProfile\ResumeWalkthrough;
use Illuminate\Support\Facades\Auth;

class ResumeWalkthroughRepository
{

    function fetch($filters=[]){
        $query = ResumeWalkthrough::query();
        return $query;
    }

    function fetchById($id){
        $record = ResumeWalkthrough::query()->find($id);
        return $record;
    }

    function approved($userId){
        $query = ResumeWalkthrough::query()->getByUserId($userId)->statusApproved();
        return $query;
     }



    function update($id,$data){
        $record = ResumeWalkthrough::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = ResumeWalkthrough::create($data);
        return $record;
    }

    function remove($id){
        $record = ResumeWalkthrough::query()->find($id);
        $record->delete();
        return $record;
    }



}
