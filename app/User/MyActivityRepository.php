<?php

namespace App\User;

use App\Models\User\MyActivity;

class MyActivityRepository
{

    function fetch($filters = [])
    {
        $query = MyActivity::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = MyActivity::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = MyActivity::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = MyActivity::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = MyActivity::query()->find($id);
        $record->delete();
        return $record;
    }
}
