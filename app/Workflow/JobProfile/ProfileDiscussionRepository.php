<?php

namespace App\Workflow\JobProfile;

use App\Models\Workflow\JobProfile\ProfileDiscussion;

class ProfileDiscussionRepository
{

    function fetch($filters = [])
    {
        $query = ProfileDiscussion::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = ProfileDiscussion::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = ProfileDiscussion::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = ProfileDiscussion::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = ProfileDiscussion::query()->find($id);
        $record->delete();
        return $record;
    }
}
