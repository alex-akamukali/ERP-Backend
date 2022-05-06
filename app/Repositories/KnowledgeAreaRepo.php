<?php

namespace App\Repositories;

use App\Models\Settings\KnowledgeArea;

class KnowledgeAreaRepo
{


    function fetch($filters=[]){
        $query = KnowledgeArea::query();
        if (isset($filters['knowledge_area_type'])){
            $query = $query->knowledgeAreaType($filters['knowledge_area_type']);
        }
        return $query;
    }

}
