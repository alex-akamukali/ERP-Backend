<?php
namespace App\Workflow\JobProfile;
use App\Models\Workflow\JobProfile\MockInterviewResult;

class MockInterviewResultRepository
{

function fetch($filters=[]){
    $query = MockInterviewResult::query();
    return $query;
}

function fetchById($id){
    $record = MockInterviewResult::query()->find($id);
    return $record;
}


function update($id,$data){
    $record = MockInterviewResult::query()->find($id);
    $record->update($data);
    return $record;
}

function create($data){
    $record = MockInterviewResult::create($data);
    return $record;
}

function remove($id){
   $record = MockInterviewResult::query()->find($id);
   $record->delete();
   return $record;
}

}