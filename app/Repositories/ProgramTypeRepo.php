<?php

namespace App\Repositories;

use App\Models\Settings\ProgramType;

class ProgramTypeRepo
{

    function fetch(){
        $query = ProgramType::query();
        return $query;
    }

}
