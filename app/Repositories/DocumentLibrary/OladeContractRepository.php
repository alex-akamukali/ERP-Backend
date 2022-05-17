<?php
namespace App\Repositories\DocumentLibrary;
use App\Models\DocumentLibrary\OladeContract;
use Illuminate\Support\Facades\Auth;

class OladeContractRepository
{

    function fetch($filters=[]){
        $query = OladeContract::query();
        return $query;
    }

    function fetchById($id){
        $record = OladeContract::query()->find($id);
        return $record;
    }

    function statuses(){
        return OladeContract::STATUSES;
    }


    function update($id,$data){
        $record = OladeContract::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = OladeContract::create($data);
        return $record;
    }

    function remove($id){
        $record = OladeContract::query()->find($id);
        $record->delete();
        return $record;
    }



}
