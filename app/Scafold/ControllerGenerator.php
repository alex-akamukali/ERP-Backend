<?php
namespace App\Scafold;

class ControllerGenerator extends ClassGenerator{



    function buildClass(callable $callback)
    {
        parent::buildClass(function() use ($callback){
          $callback($this);
          $this->genControllerBuild();
        });
    }


    function genControllerBuild(){
       $this->newFunction('index','',function(){});
    }


}
