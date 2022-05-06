<?php

namespace App\Repositories;

use App\Models\Settings\Province;

class ProvinceRepo
{

    function fetch($filters=[]){
        $query = Province::query();
        return $query;
    }

}
