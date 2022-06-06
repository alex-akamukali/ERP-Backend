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

    function setSvelteIndex(SvelteScafold $svelteScafold){
       $this->setData([
           'svelteIndex'=>$svelteScafold->getPage()
       ]);
    }

    function setSvelteCreate(SvelteScafold $svelteScafold){
        $this->setData([
            'svelteCreate'=>$svelteScafold->getPage()
        ]);
     }

     function setSvelteEdit(SvelteScafold $svelteScafold){
        $this->setData([
            'svelteEdit'=>$svelteScafold->getPage()
        ]);
     }


     function setSvelteShow(SvelteScafold $svelteScafold){
        $this->setData([
            'svelteShow'=>$svelteScafold->getPage()
        ]);
     }

     function setStoreFormRequest(FormRequestScafold $formRequestScafold){
       $this->setData([
           'storeFormRequestUseExpression'=>$formRequestScafold->getUseExpression()
       ]);
     }

}
