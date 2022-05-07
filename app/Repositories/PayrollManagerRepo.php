<?php

namespace App\Repositories;

use App\Models\Settings\PayrollManager;

class PayrollManagerRepo
{

    function fetch(){
        $query = PayrollManager::query();
        return $query;
    }

}
