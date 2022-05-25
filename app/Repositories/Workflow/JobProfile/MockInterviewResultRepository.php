<?php

namespace App\Repositories\Workflow\JobProfile;

use App\Models\Workflow\JobProfile\MockInterviewResult;
use Illuminate\Support\Facades\Auth;

class MockInterviewResultRepository
{

    function fetch($filters = [])
    {
        $query = MockInterviewResult::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = MockInterviewResult::query()->find($id);
        return $record;
    }

    function approved($userId)
    {
        $query = MockInterviewResult::query()->getByUserId($userId)->statusApproved();
        return $query;
    }


    function update($id, $data)
    {
        $record = MockInterviewResult::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = MockInterviewResult::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = MockInterviewResult::query()->find($id);
        $record->delete();
        return $record;
    }
}
