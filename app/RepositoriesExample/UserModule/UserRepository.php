<?php
namespace App\RepositoriesExample\UserModule;

use App\Models\Settings\Config;

class UserRepository{

	function __constructor()
	{

	}

	function foo($a,$b)
	{
		return  $a + $b;
	}

	function fetch($filter)
	{
		$query = Config::query();
		return $query;
	}

	function create($data)
	{
		$new = Config::create($data);
		return $new;
	}

	function update($id,$data)
	{
		$record = Config::query()->find($id)->update($data);
		return $record;
	}

	function remove($id)
	{
		$record = Config::query()->find($id);
		$record->delete();
		return $record;
	}

}
