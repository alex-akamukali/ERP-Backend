<?php
namespace App\Repositories\Settings;
use App\Models\Settings\VendorCompany;
use Illuminate\Support\Facades\Auth;

class VendorCompanyRepository
{

    function fetch($filters=[]){
        $query = VendorCompany::query();
        return $query;
    }

    function fetchById($id){
        $record = VendorCompany::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = VendorCompany::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = VendorCompany::create($data);
        return $record;
    }

    function remove($id){
        $record = VendorCompany::query()->find($id);
        $record->delete();
        return $record;
    }

    

}
