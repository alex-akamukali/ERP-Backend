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

    function getCurrentJob($userId){
      $query = JobApplication::query()->getByUserId($userId);
      if ($query->exists()){
        return $query->first()->job_title; //job_title
      }
      return 'No Job Role Assigned.';
    }

    function approved($userId){
        $query = JobApplication::query()->getByUserId($userId)->statusApproved();
        return $query;
     }

     function getByUserId($userId){
        $query = JobApplication::query()->getByUserId($userId);
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
