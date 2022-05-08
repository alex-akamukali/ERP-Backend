<?php

namespace App\Settings;

use App\Models\Settings\Province;

class ProvinceRepository
{

    function fetch($filters = [])
    {
        $query = Province::query();
        return $query;
    }

    function update($id, $data)
    {
        $record = Province::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = Province::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = Province::query()->find($id);
        $record->delete();
        return $record;
    }
}
