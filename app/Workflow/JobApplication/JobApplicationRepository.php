<?php

namespace App\Workflow\JobApplication;

use App\Models\Workflow\JobApplication\JobApplication;

class JobApplicationRepository
{

    function fetch($filters = [])
    {
        $query = JobApplication::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = JobApplication::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = JobApplication::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = JobApplication::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = JobApplication::query()->find($id);
        $record->delete();
        return $record;
    }
}
