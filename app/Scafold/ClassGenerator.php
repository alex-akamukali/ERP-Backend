<?php

namespace App\Scafold;

use Illuminate\Support\Facades\Storage;
use stdClass;

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

    function genClassStatement()
    {
        $className = $this->getClassName();
        $this->addBlock("class " . $className . $this->getExtends() . "{");
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

    function newFunction($name, $parameters = '', callable $body)
    {
        $this->methods[] = function () use ($name, $body, $parameters) {
            $this->addBlock("function " . $name . "(" . $parameters . "){");
            $body($this);
            $this->newLine();
            $this->addBlock("}");
        };
    }


    function buildClass(callable $callback)
    {
        $this->genContructor();
        $this->openScript();
        $this->newLine();
        $this->genNamespaceStatement();
        $this->newLine();
        // if (count($this->_inject)) {
        //     foreach ($this->_inject as $injectable) {
        //         $this->addBlock($injectable->getUseStatement());
        //     }
        // }

        foreach ($this->_uses as $uses) {
            $this->addBlock($uses['generator']->getUseStatement());
        }

        // $this->newLine();
        // if (!is_null($this->_extends)) {
        //     $this->addBlock(
        //         $this->_extends->getUseStatement()
        //     );
        // }
        $this->newLine();
        $this->genClassStatement();
        //   $this->genContructor();
        $callback($this);
        $this->newLine();
        foreach ($this->methods as $method) {
            $method();
        }
        $this->newLine();
        $this->addBlock("}");
        $this->newLine();
        //   $this->getCode();
    }

    function addBlock($block)
    {
        $this->buildString[] = $block;
        $this->newLine();
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

    function commit(){
       $this->getCode();
       $targetFilePath = implode("/",$this->pathArray) . '.php';
       if (!Storage::disk("root")->exists($targetFilePath)){
          Storage::disk("root")->put($targetFilePath,$this->code);
       }
    }

}
