<?php
namespace App\Scafold;

class SvelteGenerator extends ClassGenerator{



    function buildClass(callable $callback=null)
    {
        // parent::buildClass($callback);
       $this->build();
    }

    function build(){

        $this->addString("
          <script context=\"module\">
            //import
          </script>
          <script>
           //actual code here.
          </script>
          View Body
        ");

    }

    function getViewPath(){
        $r = $this->getPath();
        $t = "resources/js/Pages/";
        $r = explode($t,$r);
        return $r[1];
    }



}
