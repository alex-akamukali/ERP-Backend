<?php

namespace App\Workflow\Onboarding;

use App\Models\Workflow\Onboarding\Onboarding;

class OnboardingRepository
{

    function fetch($filters = [])
    {
        $query = Onboarding::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = Onboarding::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = Onboarding::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = Onboarding::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = Onboarding::query()->find($id);
        $record->delete();
        return $record;
    }
}
