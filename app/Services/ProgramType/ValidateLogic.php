<?php
namespace App\Services\ProgramType;

use App\Exceptions\MyException;
use Exception;

class ValidateLogic{


    function __construct()
    {
        $this->initValidation();
    }

    function initValidation(){
       $title = request('title');
       if (substr($title,0,2) != 'PT'){
          throw new MyException("Title must start with PT!");
       }
    }

}
