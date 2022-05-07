<?php

namespace App\Repositories;

use App\Models\Settings\VendorCompany;


class VendorRepo
{

    function fetch($filters=[]){
        $query = VendorCompany::query();
        return $query;
    }

}
