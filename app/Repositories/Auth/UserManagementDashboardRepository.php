<?php

namespace App\Repositories\Auth;

use App\Models\User;
use App\Repositories\Workflow\Assessment\AssessmentInterviewRepository;
use App\Repositories\Workflow\Assessment\AssessmentResultRepository;
use App\Repositories\Workflow\Assessment\PreEmploymentAssessmentRepository;
use App\Repositories\Workflow\Assessment\ServiceAgreementRepository;
use App\Repositories\Workflow\JobProfile\MockInterviewRepository;
use App\Repositories\Workflow\JobProfile\MockInterviewResultRepository;
use App\Repositories\Workflow\JobProfile\ProfileDiscussionRepository;
use App\Repositories\Workflow\JobProfile\ProfileLaunchRepository;
use App\Repositories\Workflow\JobProfile\ResumeWalkthroughRepository;
use Illuminate\Support\Facades\Auth;

class UserManagementDashboardRepository
{
    private $preEmploymentAssessmentRepository;
    private $assessmentResultRepository;
    private $assessmentInterviewRepository;
    private $serviceAgreementRepository;

    function __construct(
        PreEmploymentAssessmentRepository $preEmploymentAssessmentRepository,
        AssessmentResultRepository $assessmentResultRepository,
        AssessmentInterviewRepository $assessmentInterviewRepository,
        ServiceAgreementRepository $serviceAgreementRepository,

        MockInterviewRepository $mockInterviewRepository,
        MockInterviewResultRepository $mockInterviewResultRepository,
        ProfileDiscussionRepository $profileDiscussionRepository,
        ProfileLaunchRepository $profileLaunchRepository,
        ResumeWalkthroughRepository $resumeWalkthroughRepository



    ) {
        $this->preEmploymentAssessmentRepository = $preEmploymentAssessmentRepository;
        $this->assessmentResultRepository = $assessmentResultRepository;
        $this->assessmentInterviewRepository = $assessmentInterviewRepository;
        $this->serviceAgreementRepository = $serviceAgreementRepository;
    }


    function fetch($userId)
    {
        // $query = User::query();
        // return $query;
        $assessmentProgress = $this->getAssessmentProgresss($userId);
        return [
            'assessmentProgress' => $assessmentProgress
        ];
    }

    function getAssessmentProgresss($userId)
    {
        $progresss = 0;
        $progressTotal = 4;

        if ($this->preEmploymentAssessmentRepository->approved($userId)->exists()) {
            $progresss++;
        }

        if ($this->assessmentResultRepository->approved($userId)->exists()) {
            $progresss++;
        }

        if ($this->assessmentInterviewRepository->approved($userId)->exists()) {
            $progresss++;
        }
        if ($this->serviceAgreementRepository->approved($userId)->exists()) {
            $progresss++;
        }

        return [
            'progress' => $progresss,
            'progressTotal' => $progressTotal
        ];
    }

    function getProfileProgress($userId){
        $progresss = 0;
        $progressTotal = 0;




    }

    function fetchById($id)
    {
        $record = User::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = User::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = User::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = User::query()->find($id);
        $record->delete();
        return $record;
    }
}
