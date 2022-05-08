<?php

namespace App\Workflow\Assessment;

use App\Models\Workflow\Assessment\AssessmentResult;

class AssessmentResultRepository
{

    function fetch($filters = [])
    {
        $query = AssessmentResult::query();
        return $query;
    }

    function update($id, $data)
    {
        $record = AssessmentResult::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = AssessmentResult::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = AssessmentResult::query()->find($id);
        $record->delete();
        return $record;
    }
}
