<?php
namespace App\Repositories\Workflow\Assessment;
use App\Models\Workflow\Assessment\AssessmentResult;
use Illuminate\Support\Facades\Auth;

class AssessmentResultRepository
{

    function fetch($filters=[]){
        $query = AssessmentResult::query();
        return $query;
    }

    function approved($userId){
        $query = AssessmentResult::query()->getByUserId($userId)->statusApproved();
        return $query;
     }


    function fetchById($id){
        $record = AssessmentResult::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = AssessmentResult::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = AssessmentResult::create($data);
        return $record;
    }

    function remove($id){
        $record = AssessmentResult::query()->find($id);
        $record->delete();
        return $record;
    }



}
