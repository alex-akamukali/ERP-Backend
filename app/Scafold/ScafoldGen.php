<?php
namespace App\Scafold;

use Illuminate\Support\Facades\Storage;

class ScafoldGen{

    private $pathArray = [];
    private $path = '';
    private $pathRootArray = [];
    private $code = '';

    protected $template = '';
    private $data = [];


    function __construct($path)
    {
        $this->path = $path;
        $this->initPathArray();
        $this->data['namespace'] = $this->getNamespace();
        $this->data['name'] = $this->getName();
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

    function setData($data){
        foreach ($data as $k=>$v){
            $this->data[$k] = $v;
        }
    }

    function getTemplateContent(){
        $content = Storage::disk("root")->get("app/Scafold/templates/" . $this->template . ".stub");
        foreach ($this->data as $key=>$value){
            $content = explode("{{" . $key . "}}",$content);
            $content = implode($value,$content);
        }
        return $content;
    }

    function getPath(){
        return implode("/",$this->pathArray);
    }

    function getName(){
        $r = $this->pathArray;
        $r = array_pop($r);
        return $r;
    }

    function getUseExpression(){
        $r = ucfirst(implode("\\",$this->pathArray));
        return $r;
    }

    function getNamespace(){
        $r = $this->pathArray;
        array_pop($r);
        return ucfirst(implode("\\",$r));
    }

    function commit($ext){
       $targetFilePath = $this->getPath() . '.' . $ext;
       if (!Storage::disk("root")->exists($targetFilePath)){
          Storage::disk("root")->put($targetFilePath,$this->evaluateTemplate());
       }
    }

    function evaluateTemplate(){
        $__content__ = Storage::disk("root")->get("app/Scafold/templates/" . $this->template . ".stub");
        extract($this->data);
        // $name = 6;

        // $r1 = [2,3,4,5];

        // $r = '

        // very good
        // {{$name}}--{{$name+3}}
        // cool

        // @if ($name > 2){@
        //   nice one
        // @}@

        // @foreach ($r1 as $item2){@
        //  <--{{$item2*2}}-->
        // @}@

        // ';

        $r = explode("{{",$__content__);
        $r = implode("__sep__=",$r);
        $r = explode("}}",$r);
        $r = implode("__sep__",$r);
        $r = explode("@",$r);
        $r = implode("__sep__",$r);
        $r = explode("__sep__",$r);

        $__code__ = [];
        $__code__[] = '$__list__ = [];';
        foreach ($r as $k=>$__item__){
          if ($k%2 == 0){
            $__code__[] = '$__list__[]=\'' . $__item__ . '\';';
          }else{
            if (count($__t__ = explode("=",$__item__)) > 1){
              $__code__[] = '$__list__[]=' . $__t__[1] . ';';
            }else{
              $__code__[] = $__item__;
            }

          }
        }
        $__code__[] = '$__list__ = implode("",$__list__);';

        $__code__ = implode("",$__code__);

        // dd($__code__);

        eval($__code__);

        return $__list__;
        // echo $list;

    }


}
