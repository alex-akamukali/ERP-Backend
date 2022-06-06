<?php
namespace App\Scafold;

class SvelteScafold extends ScafoldGen{

    protected $template = 'svelte';

    private $page = '';

    function __construct($path)
    {
        parent::__construct("resources/js/Pages/v3/" . $path);
        $this->page = $path;
    }

    function getPage(){
        return $this->page;
        // $path = $this->getPath();
        // $removePath = 'resources/js/Pages';
        // $path = explode($removePath,$path);
    }

    function commitFile()
    {
        $this->commit("svelte");
    }



}
