<?php
namespace App\Repositories\Settings;
use App\Models\Settings\Config;
use Illuminate\Support\Facades\Auth;

class ConfigRepository
{

    function fetch($filters=[]){
        $query = Config::query();
        return $query;
    }

    function fetchById($id){
        $record = Config::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = Config::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = Config::create($data);
        return $record;
    }

    function remove($id){
        $record = Config::query()->find($id);
        $record->delete();
        return $record;
    }

    

}
