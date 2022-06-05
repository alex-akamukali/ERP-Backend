<?php
namespace App\Scafold;

class ControllerGenerator extends ClassGenerator{



    function buildClass(callable $callback=null)
    {
        parent::buildClass(function() use ($callback){
          $callback($this);
          $this->genControllerBuild();
        });
    }


    function genControllerBuild(){

        $this->newFunction('index','',function(ClassGenerator $classGenerator){
          $classGenerator->addBlock("inertia()->render(\"" . $classGenerator->getPlugin("svelte.index")->getViewPath() . "\",[
              \"list\"=>" . $classGenerator->getUses("repository")->getInstanceVariable() . "->fetch(request()->all())->get()
          ])",2);
       });


    }




}
