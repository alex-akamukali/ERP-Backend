<?php
namespace App\Repositories\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

use App\Repositories\Workflow\Assessment\AssessmentInterviewRepository;
use App\Repositories\Workflow\Assessment\AssessmentResultRepository;
use App\Repositories\Workflow\Assessment\PreEmploymentAssessmentRepository;
use App\Repositories\Workflow\Assessment\ServiceAgreementRepository;


class AssessmentRepository
{

    private $preEmploymentAssessmentRepository;
    private $assessmentResultRepository;
    private $assessmentInterviewRepository;
    private $serviceAgreementRepository;


    function __construct(
        PreEmploymentAssessmentRepository $preEmploymentAssessmentRepository,
        AssessmentResultRepository $assessmentResultRepository,
        AssessmentInterviewRepository $assessmentInterviewRepository,
        ServiceAgreementRepository $serviceAgreementRepository
    )
    {
        //Assessment
        $this->preEmploymentAssessmentRepository = $preEmploymentAssessmentRepository;
        $this->assessmentResultRepository = $assessmentResultRepository;
        $this->assessmentInterviewRepository = $assessmentInterviewRepository;
        $this->serviceAgreementRepository = $serviceAgreementRepository;
    }

    function fetch($userId){
        return [
            'preEmploymentAssessment'=>$this->preEmploymentAssessmentRepository->getByUserId($userId)->get(),
            "assessmentResult"=>$this->assessmentResultRepository->getByUserId($userId)->get(),
            "assessmentInterview"=>$this->assessmentInterviewRepository->getByUserId($userId)->get(),
            "serviceAgreement"=>$this->serviceAgreementRepository->getByUserId($userId)->get(),
            "statuses"=>$this->preEmploymentAssessmentRepository->statuses()
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
