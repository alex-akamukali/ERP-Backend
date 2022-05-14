<?php

namespace App\Repositories\Auth\Interfaces;

interface UserRepositoryInterface
{

    function create($data);
    function fetch($request);
    function fetchById($id);
    function update($id, $data);
    function remove($id);



    function login($request = []);
    function logout();
    function isLogged();
    function auth();
}
