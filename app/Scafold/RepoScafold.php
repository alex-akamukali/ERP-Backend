<?php

namespace App\Scafold;

class RepoScafold extends ScafoldGen
{

    protected $template = 'repo';

    function setModel(ScafoldGen $model){
      $this->setData([
          'model'=>$model->getName(),
          'modelUse'=>$model->getUseExpression()
      ]);
    }
}
