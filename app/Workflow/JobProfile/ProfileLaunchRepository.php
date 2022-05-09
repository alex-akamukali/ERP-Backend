<?php

namespace App\Workflow\JobProfile;

use App\Models\Workflow\JobProfile\ProfileLaunch;

class ProfileLaunchRepository
{

    function fetch($filters = [])
    {
        $query = ProfileLaunch::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = ProfileLaunch::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = ProfileLaunch::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = ProfileLaunch::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = ProfileLaunch::query()->find($id);
        $record->delete();
        return $record;
    }
}
