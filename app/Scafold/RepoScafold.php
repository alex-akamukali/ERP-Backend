<?php
namespace App\Scafold;

class RepoScafold extends ScafoldGen{


    protected $template = 'repo';

    function setModelUse($modelUse){
        $this->setData([
            'modelUse'=>$modelUse
        ]);
    }

    function setModel($model){
        $this->setData([
            'model'=>$model
        ]);
    }

    function setName($name){
        $this->setData([
            'name'=>$name
        ]);
    }

}
