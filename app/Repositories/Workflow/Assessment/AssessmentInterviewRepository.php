<?php
namespace App\Repositories\Workflow\Assessment;
use App\Models\Workflow\Assessment\AssessmentInterview;
use Illuminate\Support\Facades\Auth;

class AssessmentInterviewRepository
{

    function fetch($filters=[]){
        $query = AssessmentInterview::query();
        return $query;
    }

    function approved($userId){
        $query = AssessmentInterview::query()->getByUserId($userId)->statusApproved();
        return $query;
     }


    function fetchById($id){
        $record = AssessmentInterview::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = AssessmentInterview::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = AssessmentInterview::create($data);
        return $record;
    }

    function remove($id){
        $record = AssessmentInterview::query()->find($id);
        $record->delete();
        return $record;
    }



}
