<?php
namespace App\Repositories\Auth\Interfaces;

interface DashboardRepositoryInterface{

    function create($data);
    function fetch($request);
    function fetchById($id);
    function update($id,$data);
    function remove($id);

    

}

