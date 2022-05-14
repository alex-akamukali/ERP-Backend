<?php
namespace App\Repositories\Settings;
use App\Repositories\Settings\Interfaces\ProgramTypeRepositoryInterface;
use App\Models\Settings\ProgramType;

class ProgramTypeRepository implements ProgramTypeRepositoryInterface
{

    function fetch($filters=[]){
        $query = ProgramType::query();
        return $query;
    }

    function fetchById($id){
        $record = ProgramType::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = ProgramType::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = ProgramType::create($data);
        return $record;
    }

    function remove($id){
        $record = ProgramType::query()->find($id);
        $record->delete();
        return $record;
    }

}
