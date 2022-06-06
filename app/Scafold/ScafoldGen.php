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

    function commit($ext){
       $targetFilePath = $this->getPath() . '.' . $ext;
       if (!Storage::disk("root")->exists($targetFilePath)){
          Storage::disk("root")->put($targetFilePath,$this->getTemplateContent());
       }
    }

    function evaluateTemplate(){


        $name = 6;

        $r1 = [2,3,4,5];

        $r = '

        very good
        {{$name}}--{{$name+3}}
        cool

        @if ($name > 2){@
          nice one
        @}@

        @foreach ($r1 as $item2){@
         <--{{$item2*2}}-->
        @}@

        ';


        $r = explode("{{",$r);
        $r = implode("__sep__=",$r);
        $r = explode("}}",$r);
        $r = implode("__sep__",$r);
        $r = explode("@",$r);
        $r = implode("__sep__",$r);
        $r = explode("__sep__",$r);

        $code = [];
        $code[] = '$list = [];';
        foreach ($r as $k=>$item){
          if ($k%2 == 0){
            $code[] = '$list[]="' . $item . '";';
          }else{
            if (count($t = explode("=",$item)) > 1){
              $code[] = '$list[]=' . $t[1] . ';';
            }else{
              $code[] = $item;
            }

          }
        }
        $code[] = '$list = implode("",$list);';

        $code = implode("",$code);

        //echo $code;

        eval($code);

        // echo $list;



    }


}
