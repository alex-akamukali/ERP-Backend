<?php
namespace App\Repositories\Settings;
use App\Repositories\Settings\Interfaces\ConfigRepositoryInterface;
use App\Models\Settings\Config;

class ConfigRepository implements ConfigRepositoryInterface
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
