<?php
namespace App\Scafold;

class BladeGenerator extends ClassGenerator{




    function buildClass(callable $callback=null)
    {
        // parent::buildClass($callback);

    }

    function buildBlade(){
      $this->addString("

      ");
    }


}
