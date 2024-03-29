<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class makeRepoCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repository {name} {--model=} {--useAuth} {--useFields}';

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

        $useAuth = $this->option('useAuth');

        $useFields = $this->option('useFields');

        $authSnipinInterfaceTemplate = '';
        $authSnipinRepositoryTemplate = '';

        $version = 'v' . env('CG_VERSION',1);



        if (!$name){
            $this->error('name argument is required!');
            return 0;
        }
        if (!$model){
            $this->error('model argument is required!');
            return 0;
        }

        $nameBuilder = $this->decodePath($name);

        $repositoryBuilder = $this->decodePath('Repositories/' . $name . 'Repository');
        $modelBuilder = $this->decodePath($model);

        $fields = [];


        $fieldsDefinition = '';
        $fillableDefinition = '';

        if ($useFields){
            $modelObject = $modelBuilder['classObject']();
            $tableName = $modelObject->getTable();
            // dd($tableName);
            $fields = Schema::getColumnListing($tableName);
            $fields = array_diff($fields,["id","created_at","updated_at"]);
            // dd($fields);
            //gen fields
            $fieldsDefinitionArray = [];
            $fillableDefinitionArray = [];
            foreach ($fields as $field){
               $fieldsDefinitionArray[] = $field . ':""';
               $fillableDefinitionArray[] = "'" . $field . "'";
            }
            $fieldsDefinition = implode(",\n",$fieldsDefinitionArray);
            $fillableDefinition = "\n" . 'protected $fillable = [' . "\n" . implode(",\n",$fillableDefinitionArray) . "];\n";

            dd($fieldsDefinition,$fillableDefinition);
        }


        $scriptJsTemplate = '
        import {writable,get} from "svelte/store";
        import { useForm } from "@inertiajs/inertia-svelte";

        let form = useForm({
            ' . $fieldsDefinition . '
        });

        /**
         copy this to the next page for reference
        foo_detail

        * */



        const Script = writable({

            data(){
              return form;
            },



            form(){
               return form;
            },

            get(url){
               get(form).get(url);
            },

            select(data){
              form.update((old)=>({...old,...data}));
              Script.update((old)=>({...old,...data}));
            //   get(Script).title = data.title;
            },

            put(url){
                get(form).put(url);
            },

            delete(url){
                get(form).delete(url);
            },

            reset(){
               get(form).reset();
            },

            post(url){
                get(form).post(url);
            }

        });

        export default Script;

        ';

        $interfacePath = $repositoryBuilder['pathName'] . '/Interfaces/' . $repositoryBuilder['className'] . 'Interface';

        $interfaceBuilder = $this->decodePath($interfacePath);

        $authPath = 'Illuminate\Support\Facades\Auth';
        $authPathBuilder = $this->decodePath($authPath);


        if ($useAuth){

            $authSnipinInterfaceTemplate = '

function login($request=[]);
function logout();
function isLogged();
function auth();

            ';

            $authSnipinRepositoryTemplate = '

function login($request=[]){
    $auth = Auth::attempt($request);
    return $auth;
}

function logout(){
    Auth::logout();
    return true;
}

function isLogged(){
    return Auth::check();
}

function auth(){
    return Auth::user();
}

            ';

        }
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

    ' . $authSnipinInterfaceTemplate . '

}

';

//' . $interfaceBuilder['classUseStatement'] . '
// implements ' . $interfaceBuilder['className'] . '
  $clsRepository = '<?php
' . $repositoryBuilder['namespace'] . '
' . $modelBuilder['classUseStatement'] . '
' . $authPathBuilder['classUseRawStatement'] . '

class ' . $repositoryBuilder['className'] . '
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

    ' . $authSnipinRepositoryTemplate . '

}
';

$controllerPath = 'Http/Controllers/' . $version . '/' . $name . 'Controller';

$storeRequestPath = 'Http/Requests/' . $name . '/StoreRequest';
$updateRequestPath = 'Http/Requests/' . $name . '/UpdateRequest';

$storeRequestBuilder = $this->decodePath($storeRequestPath);
$updateRequestBuilder = $this->decodePath($updateRequestPath);

$clsStoreRequest = '<?php

' . $storeRequestBuilder['namespace'] . '

use Illuminate\Foundation\Http\FormRequest;

class ' . $storeRequestBuilder['className'] . ' extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
';

$clsUpdateRequest = '<?php

' . $updateRequestBuilder['namespace'] . '

use Illuminate\Foundation\Http\FormRequest;

class ' . $updateRequestBuilder['className'] . ' extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
';

// dd($clsStoreRequest,$clsUpdateRequest);

$controllerBuilder = $this->decodePath($controllerPath);
$svelteViewRootPath = 'resources/js/Pages/';
$controllerIndexPath = $version . '/' . $name . '/Index';
$controllerCreatePath = $version . '/' . $name . '/Create';
$controllerEditPath = $version . '/' . $name . '/Edit';
$controllerShowPath = $version . '/' . $name . '/Show';

$controllerIndexPathBuilder = $this->decodePath($controllerIndexPath);
$controllerCreatePathBuilder = $this->decodePath($controllerCreatePath);
$controllerEditPathBuilder = $this->decodePath($controllerEditPath);
$controllerShowPathBuilder = $this->decodePath($controllerShowPath);

//' . $interfaceBuilder['classUseStatement'] . '
$clsController = '<?php
' . $controllerBuilder['namespace'] . '
' . $repositoryBuilder['classUseStatement'] . '
' . $storeRequestBuilder['classUseStatement'] . '
' . $updateRequestBuilder['classUseStatement'] . '
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ' . $controllerBuilder['className'] . ' extends Controller
{
    //
    private ' . $repositoryBuilder['instanceName'] . ' = null;

    function __construct(' . $repositoryBuilder['className']  . ' ' . $repositoryBuilder['instanceName']  . '){
        $this->' . $repositoryBuilder['instanceNamePlain'] . ' = ' . $repositoryBuilder['instanceName'] . ';
    }

    function index(){
        $list = $this->' . $repositoryBuilder['instanceNamePlain'] . '->fetch(request()->all())->get();
        return inertia()->render("' . $controllerIndexPathBuilder['pathFileNameNoExt'] . '",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("' . $controllerCreatePathBuilder['pathFileNameNoExt'] . '");
    }

    function edit($id){
        $data = $this->' . $repositoryBuilder['instanceNamePlain'] . '->fetchById($id);
        return inertia()->render("' . $controllerEditPathBuilder['pathFileNameNoExt'] . '",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->' . $repositoryBuilder['instanceNamePlain'] . '->fetchById($id);
        return inertia()->render("' . $controllerShowPathBuilder['pathFileNameNoExt'] . '",[
            "data"=>$data
        ]);
    }

    function store(' . $storeRequestBuilder['className'] . ' $request){
      $record = $this->' . $repositoryBuilder['instanceNamePlain'] . '->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,' . $updateRequestBuilder['className'] . ' ' . $updateRequestBuilder['instanceName']  . '){
        $record = $this->' . $repositoryBuilder['instanceNamePlain'] . '->update($id,' . $updateRequestBuilder['instanceName'] . '->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->' . $repositoryBuilder['instanceNamePlain'] . '->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
';

// dd($clsController);

// dd($clsRepository);
// dd($clsInterface);

// $this->createScafold('app/' . $interfaceBuilder['pathFileName'],$clsInterface);

$this->createScafold('app/' . $repositoryBuilder['pathFileName'],$clsRepository);
$this->createScafold('app/' . $storeRequestBuilder['pathFileName'],$clsStoreRequest);
$this->createScafold('app/' . $updateRequestBuilder['pathFileName'],$clsUpdateRequest);
$this->createScafold('app/' . $controllerBuilder['pathFileName'],$clsController);


$svelteTemplate = '<script context="module">

import { page, useForm } from "@inertiajs/inertia-svelte";

</script>

<script>

//export let name;

</script>';

$this->createScafold($svelteViewRootPath . $controllerIndexPathBuilder['pathFileNameNoExt'] . '.svelte',$svelteTemplate);
$this->createScafold($svelteViewRootPath . $controllerCreatePathBuilder['pathFileNameNoExt'] . '.svelte',$svelteTemplate);
$this->createScafold($svelteViewRootPath . $controllerEditPathBuilder['pathFileNameNoExt'] . '.svelte',$svelteTemplate);
$this->createScafold($svelteViewRootPath . $controllerShowPathBuilder['pathFileNameNoExt'] . '.svelte',$svelteTemplate);



// $serviceProvider = Storage::disk("root")->get('app/Providers/AppServiceProvider.php');
//#insertRepository
//$this->app->bind('','');
// $repoBind = '$this->app->bind(' . $interfaceBuilder['classClassStatement'] . ',' . $repositoryBuilder['classClassStatement'] . ');
#insertRepository';
// $serviceProvider = explode("#insertRepository",$serviceProvider);
// $serviceProvider = implode($repoBind,$serviceProvider);
// Storage::disk("root")->put('app/Providers/AppServiceProvider.php',$serviceProvider);

//Register controller in route.

$route = Storage::disk("root")->get("routes/web.php");
$resource = Str::snake($nameBuilder['className']);
$resource = explode("_",$resource);
$resource = implode("-",$resource);

//Route::resource('update-user-skill',\App\Http\Controllers\User\UpdateUserSkillController::class)->middleware(['auth']);
$inlineRouteResourceTemplate = 'Route::resource("' . $resource . '",' . $controllerBuilder['classClassStatement'] . ')->middleware(["auth"]);';
Storage::disk("root")->put("routes/web.php",$route . '
' . $inlineRouteResourceTemplate . '
');

// dd($repoBind);
// dd($serviceProvider);


// Storage::disk("root")->put('app/' . $path . '/' . $name . '.php',$clsRepo);

        $this->info("Repository '" . $name . "' scafolded successfully");
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
       $pathFileNameNoExt = $pathName . '/' . $className;
       $namespace = 'namespace App\\' . implode('\\',$list) . ';';
       $instanceName = '$' . lcfirst($className);
       $instanceNamePlain = lcfirst($className);
       $instanceTypeName = $className;
       $classUseStatement = 'use App\\' . implode('\\',$list) . '\\' . $className . ';';
       $classUseRawStatement = 'use ' . implode('\\',$list) . '\\' . $className . ';';
       $classClassStatement = '\\App\\' . implode('\\',$list) . '\\' . $className . '::class';
       $classClass = '\\App\\' . implode('\\',$list) . '\\' . $className;
       $classObject = function() use ($classClass){
             return new $classClass(); //lazy load this.
       };

       return [
           "classObject"=>$classObject,
           'classUseRawStatement'=>$classUseRawStatement,
           'pathFileNameNoExt'=>$pathFileNameNoExt,
           'classUseStatement'=>$classUseStatement,
           'instanceNamePlain'=>$instanceNamePlain,
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

    function createScafold($path,$value){
      if (!Storage::disk("root")->exists($path)){
         Storage::disk("root")->put($path,$value);
      }
    }
}
