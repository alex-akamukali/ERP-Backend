<?php
namespace App\Repositories\Auth;
use App\Models\User;
use App\Repositories\Workflow\Assessment\PreEmploymentAssessmentRepository;
use Illuminate\Support\Facades\Auth;

class UserManagementDashboardRepository
{
    private $preEmploymentAssessmentRepository;

    function __construct(PreEmploymentAssessmentRepository $preEmploymentAssessmentRepository)
    {
      $this->preEmploymentAssessmentRepository = $preEmploymentAssessmentRepository;
    }


    function fetch($userId){
        // $query = User::query();
        // return $query;
        $completedPremploymentAssessment = $this->preEmploymentAssessmentRepository->approved($userId)->exists();
        return [
            'completedPremploymentAssessment'=>$completedPremploymentAssessment
        ];

    }

    function fetchById($id){
        $record = User::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = User::query()->find($id);
        $record->update($data);
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
