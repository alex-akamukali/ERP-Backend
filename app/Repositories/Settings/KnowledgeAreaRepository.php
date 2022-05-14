<?php
namespace App\Repositories\Settings;
use App\Repositories\Settings\Interfaces\KnowledgeAreaRepositoryInterface;
use App\Models\Settings\KnowledgeArea;

class KnowledgeAreaRepository implements KnowledgeAreaRepositoryInterface
{

    function fetch($filters=[]){
        $query = KnowledgeArea::query();
        if (isset($filters['knowledge_area_type'])){
            $query = $query->knowledgeAreaType($filters['knowledge_area_type']);
        }
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
