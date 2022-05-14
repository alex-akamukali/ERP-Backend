<?php
namespace App\Repositories\Settings\Interfaces;

interface KnowledgeAreaRepositoryInterface{

    function create($data);
    function fetch($request);
    function fetchById($id);
    function update($id,$data);
    function remove($id);

}

