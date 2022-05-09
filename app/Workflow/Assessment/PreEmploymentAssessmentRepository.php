<?php

namespace App\Workflow\Assessment;

use App\Models\Workflow\Assessment\PreEmploymentAssessment;

class PreEmploymentAssessmentRepository
{

    function fetch($filters = [])
    {
        $query = PreEmploymentAssessment::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = PreEmploymentAssessment::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = PreEmploymentAssessment::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = PreEmploymentAssessment::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = PreEmploymentAssessment::query()->find($id);
        $record->delete();
        return $record;
    }
}
