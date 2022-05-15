<?php
namespace App\Repositories\Settings;
use App\Models\Settings\KnowledgeArea;
use Illuminate\Support\Facades\Auth;

class KnowledgeAreaRepository
{

    function fetch($filters=[]){
        $query = KnowledgeArea::query();
        return $query;
    }

    function fetchById($id){
        $record = KnowledgeArea::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = KnowledgeArea::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = KnowledgeArea::create($data);
        return $record;
    }

    function remove($id){
        $record = KnowledgeArea::query()->find($id);
        $record->delete();
        return $record;
    }

    

}
