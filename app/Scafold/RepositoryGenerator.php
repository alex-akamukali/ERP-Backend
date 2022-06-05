<?php

namespace App\Scafold;

class RepositoryGenerator extends ClassGenerator
{

    function __construct($path)
    {
        parent::__construct($path);
        // $this->genRepoCrud($this);
    }

    function buildClass(callable $callback)
    {
        parent::buildClass(function () {
            $this->genRepoCrud($this);
        });
    }

    function genRepoCrud(ClassGenerator $classGenerator)
    {

        // dd(123);

        $classGenerator->newFunction('fetch', '$filter', function (ClassGenerator $builder) {
            $builder->addBlock('
    $query = ' . $builder->getUses('model')->getClassName()  . '::query();
            ');
            $builder->addBlock('    return $query;');
        });


        $classGenerator->newFunction('create', '$data', function (ClassGenerator $builder) {
            $builder->addBlock('
    $new = ' . $builder->getUses('model')->getClassName()  . '::create($data);
           ');
            $builder->addBlock('     return $new;');
        });


        $classGenerator->newFunction('update', '$id,$data', function (ClassGenerator $builder) {
            $builder->addBlock('
    $record = ' . $builder->getUses('model')->getClassName()  . '::query()->find($id)->update($data);
            ');
            $builder->addBlock('    return $record;');
        });
    }

    // function useRepoCrud(ClassGenerator $classGenerator){

    // }
}
