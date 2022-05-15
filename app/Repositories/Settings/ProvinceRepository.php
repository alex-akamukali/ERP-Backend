<?php
namespace App\Repositories\Settings;
use App\Models\Settings\Province;
use Illuminate\Support\Facades\Auth;

class ProvinceRepository
{

    function fetch($filters=[]){
        $query = Province::query();
        return $query;
    }

    function fetchById($id){
        $record = Province::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = Province::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = Province::create($data);
        return $record;
    }

    function remove($id){
        $record = Province::query()->find($id);
        $record->delete();
        return $record;
    }

    

}
