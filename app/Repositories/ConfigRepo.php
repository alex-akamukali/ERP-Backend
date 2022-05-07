<?php

namespace App\Repositories;

use App\Models\Settings\Config;

class ConfigRepo
{

    function fetch(){
        $query = Config::query();
        return $query;
    }

}
