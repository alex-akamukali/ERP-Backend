<?php
namespace App\Workflow\JobProfile;
use App\Models\Workflow\JobProfile\MockInterview;

class MockInterviewRepository
{

function fetch($filters=[]){
    $query = MockInterview::query();
    return $query;
}

function fetchById($id){
    $record = MockInterview::query()->find($id);
    return $record;
}


function update($id,$data){
    $record = MockInterview::query()->find($id);
    $record->update($data);
    return $record;
}

function create($data){
    $record = MockInterview::create($data);
    return $record;
}

function remove($id){
   $record = MockInterview::query()->find($id);
   $record->delete();
   return $record;
}

}