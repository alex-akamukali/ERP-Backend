<?php
namespace App\Repositories\Auth;
use App\Models\User\MyDocument;
use Illuminate\Support\Facades\Auth;

class MyDocumentRepository
{

    function fetch($filters=[]){
        $query = MyDocument::query();
        return $query;
    }

    function types(){
        return MyDocument::TYPES;
    }

    function fetchById($id){
        $record = MyDocument::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = MyDocument::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = MyDocument::create($data);
        return $record;
    }

    function remove($id){
        $record = MyDocument::query()->find($id);
        $record->delete();
        return $record;
    }



}
