<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class makeRepoCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository {name} {--model=}';

    /**
     * The console command description.
     *
     * @var string
     */

    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = $this->argument('name');
        // $path = $this->option('path');
        $model = $this->option('model');

        if (!$name){
            $this->error('name argument is required!');
            return 0;
        }
        if (!$model){
            $this->error('model argument is required!');
            return 0;
        }

        $repositoryBuilder = $this->decodePath($name);
        $modelBuilder = $this->decodePath($model);

        $interfacePath = $repositoryBuilder['pathName'] . '/Interfaces/' . $repositoryBuilder['className'] . 'Interface';

        $interfaceBuilder = $this->decodePath($interfacePath);


        // 'className'=>$className,
        // 'pathName'=>$pathName,
        // 'pathFileName'=>$pathFileName,
        // 'namespace'=>$namespace,
        // 'instanceName'=>$instanceName,
        // 'instanceTypeName'=>$instanceTypeName


        $clsInterface = '<?php
' . $interfaceBuilder['namespace'] . '

interface ' . $interfaceBuilder['className'] . '{

    function create($data);
    function fetch($request);
    function fetchById($id);
    function update($id,$data);
    function remove($id);

}

';

  $clsRepository = '<?php
' . $repositoryBuilder['namespace'] . '
' . $interfaceBuilder['classUseStatement'] . '
' . $modelBuilder['classUseStatement'] . '

class ' . $repositoryBuilder['className'] . ' implements ' . $interfaceBuilder['className'] . '
{

    function fetch($filters=[]){
        $query = ' . $modelBuilder['className'] . '::query();
        return $query;
    }

    function fetchById($id){
        $record = ' . $modelBuilder['className'] . '::query()->find($id);
        return $record;
    }


    function update($id,$data){
        $record = ' . $modelBuilder['className'] . '::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = ' . $modelBuilder['className'] . '::create($data);
        return $record;
    }

    function remove($id){
        $record = ' . $modelBuilder['className'] . '::query()->find($id);
        $record->delete();
        return $record;
    }

}
';

// dd($clsRepository);
// dd($clsInterface);


Storage::disk("root")->put('app/' . $interfaceBuilder['pathFileName'],$clsInterface);
Storage::disk("root")->put('app/' . $repositoryBuilder['pathFileName'],$clsRepository);

$serviceProvider = Storage::disk("root")->get('app/Providers/AppServiceProvider.php');
//#insertRepository
//$this->app->bind('','');
$repoBind = '$this->app->bind(' . $interfaceBuilder['classClassStatement'] . ',' . $repositoryBuilder['classClassStatement'] . ');
#insertRepository';
$serviceProvider = explode("#insertRepository",$serviceProvider);
$serviceProvider = implode($repoBind,$serviceProvider);
Storage::disk("root")->put('app/Providers/AppServiceProvider.php',$serviceProvider);

// dd($repoBind);
// dd($serviceProvider);


// Storage::disk("root")->put('app/' . $path . '/' . $name . '.php',$clsRepo);

        $this->info("class name '" . $name . "' generated successfully");
        return 0;
    }


    function decodePath($path){
       $path = explode('/',$path);
       $path = implode('\\',$path);
       $path = explode('\\',$path);
       $list = $path;
       $className = array_pop($list);
       $pathName = implode('/',$list);
       $pathFileName = $pathName . '/' . $className . '.php';
       $namespace = 'namespace App\\' . implode('\\',$list) . ';';
       $instanceName = '$' . lcfirst($className);
       $instanceTypeName = $className;
       $classUseStatement = 'use App\\' . implode('\\',$list) . '\\' . $className . ';';
       $classClassStatement = '\\App\\' . implode('\\',$list) . '\\' . $className . '::class';

       return [
           'classUseStatement'=>$classUseStatement,
           'classClassStatement'=>$classClassStatement,
           'path'=>$path,
           'className'=>$className,
           'pathName'=>$pathName,
           'pathFileName'=>$pathFileName,
           'namespace'=>$namespace,
           'instanceName'=>$instanceName,
           'instanceTypeName'=>$instanceTypeName
       ];



    }

    function decodeModel($model){

    }
}
