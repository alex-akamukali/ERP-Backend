<?php
namespace App\Scafold;

class ClassGenerator{

    private $path = '';
    private $pathArray = [];
    private $pathRootArray = [];
    private $buildString = [];
    private $code = '';
    private $_extends = null;
    private $_inject = [];
    // private $_contructorParams = [];


    function __construct($path)
    {
      $path = ucfirst($path);
      $this->path = $path;
      $this->initPathArray();
    }

    function initPathArray(){
      $r = explode("/",$this->path);
      $r = implode("__sep__",$r);
      $r = explode("\\",$r);
      $r = implode("__sep__",$r);
      $r = explode("__sep__",$r);
      $this->pathArray = $r;
      array_pop($r);
      $this->pathRootArray = $r;
    }

    function extends($generator){
       $this->_extends = $generator;
    }

    function inject($generator){
       $this->_inject[] = $generator;
    }

    function getExtends(){
       if (!is_null($this->_extends)){
         return " extends " . $this->_extends->getClassName();
       }
       return "";
    }

    function getInstanceVariableDeclaration(){
       $r = $this->pathArray;
       $r = array_pop($r);
       $r = lcfirst($r);
       return 'private $' . $r . ';';
    }

    function getParameterVariableDeclaration(){
        $r = $this->pathArray;
        $r = array_pop($r);
        $r = lcfirst($r);
        // dd($r,$this->pathArray);
        return $this->getClassName() . ' $' . $r;
     }

     function getParameterInjectionStatementDeclaration(){
        $r = $this->getInstanceVariable() . ' = ' . $this->getVariable() . ";";
        return $r;
     }

     function getInstanceVariable(){
        $r = $this->pathArray;
        $r = array_pop($r);
        $r = lcfirst($r);
        return '$this->' . $r;
     }

     function getVariable(){
        $r = $this->pathArray;
        $r = array_pop($r);
        $r = lcfirst($r);
        return '$' . $r;
     }

     function genContructor(){
        $this->newLine();
        $params = [];
        if (count($this->_inject)){
          foreach ($this->_inject as $injectable){
             $params[] = $injectable->getParameterVariableDeclaration();
          }
        }
        $params = implode(",",$params);
        $injectables = $this->_inject;
        $this->newFunction("__constructor",$params,function(ClassGenerator $classGenerator) use ($injectables){
            foreach ($injectables as $innerInjectable){
              $classGenerator->addBlock($innerInjectable->getParameterInjectionStatementDeclaration());
            }
        });

     }

     function getInjectParameterStatement(){

     }


    function getInstanceParameterVariableDeclaration(){

    }

    function getClassName(){
        $r = $this->pathArray;
        $className = array_pop($r);
        // dd($className,$this->pathArray);
        return $className;
    }

    function genClassStatement(){
        $className = $this->getClassName();
        $this->addBlock("class " . $className . $this->getExtends() . "{");
    }

    function getUseStatement(){
      $r = 'use ' . implode('\\',$this->pathArray) . ';';
      return $r;
    }

    function genNamespaceStatement(){
        $r = 'namespace ' . implode('\\',$this->pathRootArray) . ';';
        $this->buildString[] = $r;
    }

    function openScript(){
        $this->buildString[] = '<?php';
    }

    function newLine(){
       $this->buildString[] = "\n";
    }

    function newFunction($name,$parameters='',callable $body){
       $this->addBlock("function " . $name . "(" . $parameters . "){");
       $body($this);
       $this->newLine();
       $this->addBlock("}");
    }


    function buildClass(callable $callback){
      $this->openScript();
      $this->newLine();
      $this->genNamespaceStatement();
      $this->newLine();
      if (count($this->_inject)){
        foreach ($this->_inject as $injectable){
            $this->addBlock($injectable->getUseStatement());
        }
      }

      $this->newLine();
      if (!is_null($this->_extends)){
         $this->addBlock(
             $this->_extends->getUseStatement()
         );
      }
      $this->newLine();
      $this->genClassStatement();
      $this->genContructor();
      $this->newLine();
      $callback($this);
      $this->newLine();
      $this->addBlock("}");
      $this->newLine();
      $this->getCode();
    }

    function addBlock($block){
        $this->buildString[] = $block;
        $this->newLine();
    }



    function getCode(){
       $this->code = implode("",$this->buildString);
    }

    function buildCustom(callable $callback){
      $callback($this);
      $this->getCode();
    }

    function __toString()
    {
        return $this->code;
    }

    function output(){
       return $this->code;
    }



}
