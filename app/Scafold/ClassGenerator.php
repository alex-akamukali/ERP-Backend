<?php

namespace App\Scafold;

use Illuminate\Support\Facades\Storage;
use stdClass;
use Illuminate\Support\Str;

class ClassGenerator
{

    private $path = '';
    private $pathArray = [];
    private $pathRootArray = [];
    private $buildString = [];
    private $code = '';
    private $_extends = null;
    private $_inject = [];
    private $methods = [];
    private $_uses = [];
    private $_plugins = [];
    // private $_contructorParams = [];


    function __construct($path)
    {
        $path = ucfirst($path);
        $this->path = $path;
        $this->initPathArray();
        //   $this->genContructor();
    }

    function initPathArray()
    {
        $r = explode("/", $this->path);
        $r = implode("__sep__", $r);
        $r = explode("\\", $r);
        $r = implode("__sep__", $r);
        $r = explode("__sep__", $r);
        $this->pathArray = $r;
        array_pop($r);
        $this->pathRootArray = $r;
    }

    function extends($generator,$tag='')
    {
        $this->uses($generator,$tag,'extend');
        // $this->_extends = $generator;
    }

    function addPlugin($generator,$tag){
       $this->_plugins[$tag] = $generator;
    }

    function getPlugin($tag){
        if (isset($this->_plugins[$tag])){
           return $this->_plugins[$tag];
        }
        return null;
    }

    function inject($generator, $tag = '')
    {
        $this->uses($generator,$tag,'inject');
        // if (!empty($tag)) {
        //     $this->_inject[$tag] = $generator;
        // } else {
        //     $this->_inject[] = $generator;
        // }
    }

    function uses($generator, $tag='',$type='use')
    {
        $this->_uses[] = [
            'generator'=>$generator,
            'tag'=>$tag,
            'type'=>$type
        ];
        // if (empty($tag)){
        //    $this->_uses[] = $generator;
        // }else{
        //     $this->_uses[$tag] = $generator;
        // }
    }

    function getInjects()
    {
        $injects = [];
        foreach ($this->_uses as $item){
           if ($item['type'] == 'inject'){
              $injects[] = $item['generator'];
           }
        }
        return $injects;
    }

    function getExtend()
    {
        $extend = null;
        foreach ($this->_uses as $item){
           if ($item['type'] == 'extend'){
              $extend = $item['generator'];
           }
        }
        return $extend;
    }


    function getUses($tag)
    {
       $check = new self('');
       foreach ($this->_uses as $item){
          if ($item['tag'] == $tag){
            $check = $item['generator'];
            break;
          }
       }
       return $check;
    }

    function getExtends()
    {
        $extend = $this->getExtend();
        if (!is_null($extend)) {
            return " extends " . $extend->getClassName();
        }
        return "";
    }

    function getInstanceVariableDeclaration()
    {
        $r = $this->pathArray;
        $r = array_pop($r);
        $r = lcfirst($r);
        return 'private $' . $r . ';';
    }

    function getParameterVariableDeclaration()
    {
        $r = $this->pathArray;
        $r = array_pop($r);
        $r = lcfirst($r);
        // dd($r,$this->pathArray);
        return $this->getClassName() . ' $' . $r;
    }

    function getParameterInjectionStatementDeclaration()
    {
        $r = $this->getInstanceVariable() . ' = ' . $this->getVariable() . ";";
        return $r;
    }

    function getInstanceVariable()
    {
        $r = $this->pathArray;
        $r = array_pop($r);
        $r = lcfirst($r);
        return '$this->' . $r;
    }

    function getVariable()
    {
        $r = $this->pathArray;
        $r = array_pop($r);
        $r = lcfirst($r);
        return '$' . $r;
    }

    function genContructor()
    {
        // $this->newLine();
        $params = [];
        $injects = $this->getInjects();
        if (count($injects)) {
            foreach ($injects as $injectable) {
                $params[] = $injectable->getParameterVariableDeclaration();
            }
        }
        $params = implode(",", $params);
        $injectables = $this->getInjects();
        $this->newFunction("__constructor", $params, function (ClassGenerator $classGenerator) use ($injectables) {
            foreach ($injectables as $innerInjectable) {
                $classGenerator->addBlock($innerInjectable->getParameterInjectionStatementDeclaration());
            }
        });
    }

    function getInjectParameterStatement()
    {
    }


    function getInstanceParameterVariableDeclaration()
    {
    }

    function getClassName()
    {
        $r = $this->pathArray;
        $className = array_pop($r);
        // dd($className,$this->pathArray);
        return $className;
    }

    function getClassClassName(){
        $cls = implode("\\",$this->pathArray);
        return $cls . "::class";
    }

    function getResourceName(){
        $cls = $this->getClassClassName();
        $resource = Str::snake($cls);
        $resource = explode("_",$resource);
        $resource = implode("-",$resource);
        return $resource;
    }

    function genClassStatement()
    {
        $className = $this->getClassName();
        $this->addBlock("class " . $className . $this->getExtends() . "{",0);
    }

    function getUseStatement()
    {
        $r = 'use ' . implode('\\', $this->pathArray) . ';';
        return $r;
    }

    function genNamespaceStatement()
    {
        $r = 'namespace ' . implode('\\', $this->pathRootArray) . ';';
        $this->buildString[] = $r;
    }

    function openScript()
    {
        $this->buildString[] = '<?php';
    }

    function newLine()
    {
        $this->buildString[] = "\n";
    }

    function addString($str){
        $this->buildString[] = $str;
    }

    function newFunction($name, $parameters = '', callable $body)
    {
        $this->methods[] = function () use ($name, $body, $parameters) {
            $this->addBlock("function " . $name . "(" . $parameters . ")\n\t{\n",1);
            $body($this);
            $this->newLine();
            $this->addBlock("}",1);
        };
    }


    function buildClass(callable $callback = null)
    {
        $this->genContructor();
        $this->openScript();
        $this->newLine();
        $this->genNamespaceStatement();
        $this->newLine();
        $this->newLine();
        // if (count($this->_inject)) {
        //     foreach ($this->_inject as $injectable) {
        //         $this->addBlock($injectable->getUseStatement());
        //     }
        // }

        foreach ($this->_uses as $uses) {
            $this->addBlock($uses['generator']->getUseStatement(),0);
        }

        $this->newLine();
        // if (!is_null($this->_extends)) {
        //     $this->addBlock(
        //         $this->_extends->getUseStatement()
        //     );
        // }
        $this->newLine();
        $this->genClassStatement();
        //   $this->genContructor();
        if (!is_null($callback)){
            $callback($this);
        }
        $this->newLine();
        foreach ($this->methods as $method) {
            $this->newLine();
            $method();
            $this->newLine();
        }
        $this->newLine();
        $this->addBlock("}",0);
        $this->newLine();
        //   $this->getCode();
    }

    function addBlock($block,$indentationLevel = 0)
    {
        $indent = "";

        for ($c = 0;$c < $indentationLevel;$c++){
            $indent.="\t";
        }

        $this->buildString[] = $indent . $block;


    }



    function getCode()
    {
        $this->code = implode("", $this->buildString);
    }

    function buildCustom(callable $callback)
    {
        $callback($this);
        $this->getCode();
    }

    function __toString()
    {
        $this->getCode();
        return $this->code;
    }

    function output()
    {
        $this->getCode();
        return $this->code;
    }

    function getPath(){
        return implode("/",$this->pathArray);
    }

    function commit(){
       $this->getCode();
       $targetFilePath = $this->getPath() . '.php';
       if (!Storage::disk("root")->exists($targetFilePath)){
          Storage::disk("root")->put($targetFilePath,$this->code);
       }
    }

}
