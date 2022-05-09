<?php

namespace App\Workflow\JobProfile;

use App\Models\Workflow\JobProfile\ResumeWalkthrough;

class ResumeWalkthroughRepository
{

    function fetch($filters = [])
    {
        $query = ResumeWalkthrough::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = ResumeWalkthrough::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = ResumeWalkthrough::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = ResumeWalkthrough::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = ResumeWalkthrough::query()->find($id);
        $record->delete();
        return $record;
    }
}
