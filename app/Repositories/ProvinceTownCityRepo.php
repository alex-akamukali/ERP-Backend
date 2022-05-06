<?php

namespace App\Repositories;

use App\Models\Settings\ProvinceTownCity;

class ProvinceTownCityRepo
{

    function fetch($filters=[]){
        $query = ProvinceTownCity::query();
        if (isset($filters['province_id'])){
            $query = $query->province($filters['province_id']);
        }
        return $query;
    }

}
