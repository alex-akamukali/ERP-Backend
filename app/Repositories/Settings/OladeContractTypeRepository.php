<?php
namespace App\Repositories\Settings;
use App\Models\Settings\OladeContractType;
use Illuminate\Support\Facades\Auth;

class OladeContractTypeRepository
{

    function fetch($filters=[]){
        $query = OladeContractType::query();
        if (isset($filters['status'])){
            $query = $query->withStatus($filters['status']);
        }
        return $query;
    }

    function fetchById($id){
        $record = OladeContractType::query()->find($id);
        return $record;
    }

    function statuses(){
        return OladeContractType::STATUSES;
    }


    function update($id,$data){
        $record = OladeContractType::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = OladeContractType::create($data);
        return $record;
    }

    function remove($id){
        $record = OladeContractType::query()->find($id);
        $record->delete();
        return $record;
    }



}
