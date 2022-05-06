<?php

namespace App\Repositories;

use App\Models\Settings\OladeContractType;

class OladeContractTypeRepo
{


    function fetch($filters=[]){
        $query = OladeContractType::query();
        if (isset($filters['status'])){
           $query = $query->withStatus($filters['status']);
        }
        return $query;
    }

}
