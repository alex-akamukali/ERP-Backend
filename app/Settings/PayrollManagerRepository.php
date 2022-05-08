<?php

namespace App\Settings;

use App\Models\Settings\PayrollManager;

class PayrollManagerRepository
{

    function fetch($filters = [])
    {
        $query = PayrollManager::query();
        return $query;
    }

    function update($id, $data)
    {
        $record = PayrollManager::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = PayrollManager::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = PayrollManager::query()->find($id);
        $record->delete();
        return $record;
    }
}
