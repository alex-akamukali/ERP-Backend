<?php

namespace App\Settings;

use App\Models\Settings\KnowledgeArea;

class KnowledgeAreaRepository
{

    function fetch($filters = [])
    {
        $query = KnowledgeArea::query();
        return $query;
    }

    function update($id, $data)
    {
        $record = KnowledgeArea::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = KnowledgeArea::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = KnowledgeArea::query()->find($id);
        $record->delete();
        return $record;
    }
}
