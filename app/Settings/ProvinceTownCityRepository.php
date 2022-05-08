<?php

namespace App\Settings;

use App\Models\Settings\ProvinceTownCity;

class ProvinceTownCityRepository
{

    function fetch($filters = [])
    {
        $query = ProvinceTownCity::query();
        if (isset($filters['province_id'])) {
            $query = $query->province($filters['province_id']);
        }
        return $query;
    }

    function update($id, $data)
    {
        $record = ProvinceTownCity::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = ProvinceTownCity::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = ProvinceTownCity::query()->find($id);
        $record->delete();
        return $record;
    }
}
