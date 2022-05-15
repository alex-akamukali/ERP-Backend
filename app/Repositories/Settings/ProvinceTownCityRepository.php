<?php
namespace App\Repositories\Settings;
use App\Models\Settings\ProvinceTownCity;
use Illuminate\Support\Facades\Auth;

class ProvinceTownCityRepository
{

    function fetch($filters=[]){
        $query = ProvinceTownCity::query();
        return $query;
    }

    function fetchById($id){
        $record = ProvinceTownCity::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = ProvinceTownCity::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = ProvinceTownCity::create($data);
        return $record;
    }

    function remove($id){
        $record = ProvinceTownCity::query()->find($id);
        $record->delete();
        return $record;
    }

    

}
