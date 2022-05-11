<?php

namespace App\User;

use App\Models\User\MyDocument;

class MyDocumentRepository
{

    function fetch($filters = [])
    {
        $query = MyDocument::query();
        if (isset($filters['user_id'])){
          $query = $query->where('user_id',$filters['user_id']);
        }
        return $query;
    }

    function fetchById($id)
    {
        $record = MyDocument::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = MyDocument::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = MyDocument::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = MyDocument::query()->find($id);
        $record->delete();
        return $record;
    }

    function types(){
        return MyDocument::TYPES;
    }
}
