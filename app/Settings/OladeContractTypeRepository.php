<?php

namespace App\Settings;

use App\Models\Settings\OladeContractType;

class OladeContractTypeRepository
{

    function fetch($filters = [])
    {
        $query = OladeContractType::query();
        if (isset($filters['status'])){
            $query = $query->withStatus($filters['status']);
        }
        return $query;
    }

    function statuses(){
        return OladeContractType::STATUSES;
    }


    function fetchById($id)
    {
        $record = OladeContractType::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = OladeContractType::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = OladeContractType::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = OladeContractType::query()->find($id);
        $record->delete();
        return $record;
    }
}
