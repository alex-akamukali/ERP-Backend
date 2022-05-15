<?php
namespace App\Repositories\Settings;
use App\Models\Settings\PayrollManager;
use Illuminate\Support\Facades\Auth;

class PayrollManagerRepository
{

    function fetch($filters=[]){
        $query = PayrollManager::query();
        return $query;
    }

    function fetchById($id){
        $record = PayrollManager::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = PayrollManager::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = PayrollManager::create($data);
        return $record;
    }

    function remove($id){
        $record = PayrollManager::query()->find($id);
        $record->delete();
        return $record;
    }

    

}
