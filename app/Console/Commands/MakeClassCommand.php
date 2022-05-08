<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class MakeClassCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:class {name} {--path=} {--model=}';

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
        $path = $this->option('path');
        $model = $this->option('model');

        if (!$name){
            $this->error('name argument is required!');
            return 0;
        }
        if (!$path){
            $this->error('path option is required!');
            return 0;
        }
        $className = '';
        $path = explode('/',$path);
        $path = implode('\\',$path);
        if ($model){
          $model = explode('/',$model);
          $className = end($model);
        //   dd($className);
          $model = implode('\\',$model);
        }

        $clsRepo = '<?php
namespace App\\' . $path . ';
use App\\' . $model . ';

class ' . $name . '
{

function fetch($filters=[]){
    $query = ' . $className . '::query();
    return $query;
}

function fetchById($id){
    $record = ' . $className . '::query()->find($id);
    return $record;
}


function update($id,$data){
    $record = ' . $className . '::query()->find($id);
    $record->update($data);
    return $record;
}

function create($data){
    $record = ' . $className . '::create($data);
    return $record;
}

function remove($id){
   $record = ' . $className . '::query()->find($id);
   $record->delete();
   return $record;
}

}';

        $cls = '<?php

namespace App\\' . $path . ';

class ' . $name . '
{

}';

if ($model){
    Storage::disk("root")->put('app/' . $path . '/' . $name . '.php',$clsRepo);
}else{
    Storage::disk("root")->put('app/' . $path . '/' . $name . '.php',$cls);
}

        $this->info("class name '" . $name . "' generated successfully");
        return 0;
    }
}
