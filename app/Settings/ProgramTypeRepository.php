<?php

namespace App\Settings;

use App\Models\Settings\ProgramType;

class ProgramTypeRepository
{

    function fetch($filters = [])
    {
        $query = ProgramType::query();
        return $query;
    }

    function update($id, $data)
    {
        $record = ProgramType::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = ProgramType::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = ProgramType::query()->find($id);
        $record->delete();
        return $record;
    }
}
