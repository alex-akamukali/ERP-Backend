<?php

namespace App\Workflow\Assessment;

use App\Models\Workflow\Assessment\ServiceAgreement;

class ServiceAgreementRepository
{

    function fetch($filters = [])
    {
        $query = ServiceAgreement::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = ServiceAgreement::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = ServiceAgreement::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = ServiceAgreement::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = ServiceAgreement::query()->find($id);
        $record->delete();
        return $record;
    }
}
