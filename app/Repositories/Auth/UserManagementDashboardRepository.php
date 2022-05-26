<?php

namespace App\Repositories\Auth;

use App\Models\User;
use App\Repositories\Workflow\Assessment\AssessmentInterviewRepository;
use App\Repositories\Workflow\Assessment\AssessmentResultRepository;
use App\Repositories\Workflow\Assessment\PreEmploymentAssessmentRepository;
use App\Repositories\Workflow\Assessment\ServiceAgreementRepository;
use App\Repositories\Workflow\JobApplication\JobApplicationRepository;
use App\Repositories\Workflow\JobProfile\MockInterviewRepository;
use App\Repositories\Workflow\JobProfile\MockInterviewResultRepository;
use App\Repositories\Workflow\JobProfile\ProfileDiscussionRepository;
use App\Repositories\Workflow\JobProfile\ProfileLaunchRepository;
use App\Repositories\Workflow\JobProfile\ResumeWalkthroughRepository;
use App\Repositories\Workflow\Onboarding\OnboardingRepository;
use Illuminate\Support\Facades\Auth;

class UserManagementDashboardRepository
{
    //Assessment
    private $preEmploymentAssessmentRepository;
    private $assessmentResultRepository;
    private $assessmentInterviewRepository;
    private $serviceAgreementRepository;

    //JobProfile
    private $mockInterviewRepository;
    private $mockInterviewResultRepository;
    private $profileDiscussionRepository;
    private $profileLaunchRepository;
    private $resumeWalkthroughRepository;

    //Onboarding
    private $onboardingRepository;

    //JobApplication
    private $jobApplicationRepository;

    //User
    private $userRepository;

    function __construct(
        PreEmploymentAssessmentRepository $preEmploymentAssessmentRepository,
        AssessmentResultRepository $assessmentResultRepository,
        AssessmentInterviewRepository $assessmentInterviewRepository,
        ServiceAgreementRepository $serviceAgreementRepository,

        MockInterviewRepository $mockInterviewRepository,
        MockInterviewResultRepository $mockInterviewResultRepository,
        ProfileDiscussionRepository $profileDiscussionRepository,
        ProfileLaunchRepository $profileLaunchRepository,
        ResumeWalkthroughRepository $resumeWalkthroughRepository,

        OnboardingRepository $onboardingRepository,

        JobApplicationRepository $jobApplicationRepository,

        //
        UserRepository $userRepository

    ) {
        //Assessment
        $this->preEmploymentAssessmentRepository = $preEmploymentAssessmentRepository;
        $this->assessmentResultRepository = $assessmentResultRepository;
        $this->assessmentInterviewRepository = $assessmentInterviewRepository;
        $this->serviceAgreementRepository = $serviceAgreementRepository;

        //JobProfile
        $this->mockInterviewRepository = $mockInterviewRepository;
        $this->mockInterviewResultRepository = $mockInterviewResultRepository;
        $this->profileDiscussionRepository = $profileDiscussionRepository;
        $this->profileLaunchRepository = $profileLaunchRepository;
        $this->resumeWalkthroughRepository = $resumeWalkthroughRepository;

        //Onboarding
        $this->onboardingRepository = $onboardingRepository;

        //JobApplication
        $this->jobApplicationRepository = $jobApplicationRepository;

        //User
        $this->userRepository = $userRepository;
    }


    function fetch($userId)
    {
        // $query = User::query();
        // return $query;
        $assessmentProgress = $this->getAssessmentProgresss($userId);
        $jobProfileProgress = $this->getJobProfileProgress($userId);
        $onboardingProgress = $this->getOnboardingProgress($userId);
        $jobApplicationProgress = $this->getJobApplicationProgress($userId);
        return [
            'assessmentProgress' => $assessmentProgress,
            'jobProfileProgress' => $jobProfileProgress,
            'onboardingProgress' => $onboardingProgress,
            'jobApplicationProgress' => $jobApplicationProgress,
            'currentJob' => $this->jobApplicationRepository->getCurrentJob($userId),
            'lastJoined' => $this->userRepository->getLastJoined($userId),
            'lastSignedContract' => $this->serviceAgreementRepository->getLastSignedContract($userId)
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


    function getJobProfileProgress($userId)
    {
        $progresss = 0;
        $progressTotal = 5;

        if ($this->mockInterviewRepository->approved($userId)->exists()) {
            $progresss++;
        }
        if ($this->mockInterviewResultRepository->approved($userId)->exists()) {
            $progresss++;
        }
        if ($this->profileDiscussionRepository->approved($userId)->exists()) {
            $progresss++;
        }
        if ($this->profileLaunchRepository->approved($userId)->exists()) {
            $progresss++;
        }
        if ($this->resumeWalkthroughRepository->approved($userId)->exists()) {
            $progresss++;
        }
        return [
            'progress' => $progresss,
            'progressTotal' => $progressTotal
        ];
    }

    function getOnboardingProgress($userId)
    {
        $progresss = 0;
        $progressTotal = $this->onboardingRepository->getByUserId($userId)->count();

        if ($this->onboardingRepository->approved($userId)->exists()) {
            $progresss++;
        }

        return [
            'progress' => $progresss,
            'progressTotal' => $progressTotal
        ];
    }

    function getJobApplicationProgress($userId)
    {
        $progresss = 0;
        $progressTotal = $this->jobApplicationRepository->getByUserId($userId)->count();

        if ($this->jobApplicationRepository->approved($userId)->exists()) {
            $progresss++;
        }
        return [
            'progress' => $progresss,
            'progressTotal' => $progressTotal
        ];
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
