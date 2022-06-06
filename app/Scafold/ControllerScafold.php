<?php

namespace App\Scafold;

class ControllerScafold extends ScafoldGen
{

    protected $template = 'controller';

    private $repository;

    function setRepository(RepoScafold $repository)
    {
        $this->repository = $repository;
        $this->setData([
            'repoInstance' => $repository->getName(),
            'repoUse' => $repository->getUseExpression(),
            'repoName'=>$repository->getName()
        ]);
    }
}
