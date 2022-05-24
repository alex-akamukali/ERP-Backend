<?php
namespace App\Repositories\Workflow\Assessment;
use App\Models\Workflow\Assessment\PreEmploymentAssessment;
use Illuminate\Support\Facades\Auth;

class PreEmploymentAssessmentRepository
{

    function fetch($filters=[]){
        $query = PreEmploymentAssessment::query();
        return $query;
    }

    function approved($userId){
       $query = PreEmploymentAssessment::query()->getByUserId($userId)->statusApproved();
       return $query;
    }

    function fetchById($id){
        $record = PreEmploymentAssessment::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = PreEmploymentAssessment::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = PreEmploymentAssessment::create($data);
        return $record;
    }

    function remove($id){
        $record = PreEmploymentAssessment::query()->find($id);
        $record->delete();
        return $record;
    }



}
