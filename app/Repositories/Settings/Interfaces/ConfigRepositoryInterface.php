<?php
namespace App\Repositories\Settings\Interfaces;

interface ConfigRepositoryInterface{

    function create($data);
    function fetch($request);
    function fetchById($id);
    function update($id,$data);
    function remove($id);

}

