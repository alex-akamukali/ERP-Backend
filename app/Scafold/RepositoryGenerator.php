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
        parent::buildClass(function () use ($callback) {
            $callback($this);
            $this->genRepoCrud($this);
        });
    }

    function genRepoCrud(ClassGenerator $classGenerator)
    {

        $classGenerator->newFunction('fetch', '$filter', function (ClassGenerator $builder) {
            $builder->addBlock('$query = ' . $builder->getUses('model')->getClassName()  . '::query();',2);
            $builder->newLine();
            $builder->addBlock('return $query;',2);
        });

        $classGenerator->newFunction('create', '$data', function (ClassGenerator $builder) {
            $builder->addBlock('$new = ' . $builder->getUses('model')->getClassName()  . "::create(\$data);",2);
            $builder->newLine();
            $builder->addBlock("return \$new;",2);
        });

        $classGenerator->newFunction('update', '$id,$data', function (ClassGenerator $builder) {
            $builder->addBlock('$record = ' . $builder->getUses('model')->getClassName()  . '::query()->find($id)->update($data);',2);
            $builder->newLine();
            $builder->addBlock('return $record;',2);
        });
        $classGenerator->newFunction('remove', '$id', function (ClassGenerator $builder) {
            $builder->addBlock('$record = ' . $builder->getUses('model')->getClassName()  . '::query()->find($id);',2);
            $builder->newLine();
            $builder->addBlock('$record->delete();',2);
            $builder->newLine();
            $builder->addBlock('return $record;',2);
        });

    }

}
