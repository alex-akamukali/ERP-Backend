<?php
namespace App\RepositoriesExample;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Services\Inject2;

class UserRepository extends Controller{

function __constructor(Inject2 $inject2){
$this->inject2 = $inject2;

}
function foo($a,$b){
 return  $a + $b;

}
function fetch($filter){

    $query = Customer::query();
            
    return $query;

}
function create($data){

    $new = Customer::create($data);
           
     return $new;

}
function update($id,$data){

    $record = Customer::query()->find($id)->update($data);
            
    return $record;

}

}

