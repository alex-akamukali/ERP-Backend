<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;

class InertiaControllerCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:inertia-controller {name} {--path=} {--repository=} {--extension=}';

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
        $repository = $this->option('repository');
        $extension = $this->option('extension');

        if (!$name){
            $this->error('name argument is required!');
            return 0;
        }
        if (!$path){
            $this->error('path option is required!');
            return 0;
        }
        if (!$repository){
            $this->error('repository option is required!');
            return 0;
        }

        $className = '';
        $path = explode('/',$path);

        $path = implode('\\',$path);

        $sveltePath = explode('\\',$path);
        $sveltePath = implode('/',$sveltePath) . '/' . $name;
        $svelteBasePath = explode('/',$sveltePath);
        $svelteBasePath = $svelteBasePath[0];

        $repository = explode('/',$repository);
        $repositoryName = end($repository);
        $repositoryInstanceName = lcfirst($repositoryName);
        $repository = implode('\\',$repository);

        $storeRequest = $path . '\\Store' . $name . 'Request';
        $storeRequestName = 'Store' . $name . 'Request';
        $updateRequest = $path . '\\Update' . $name . 'Request';
        $updateRequestName = 'Update' . $name . 'Request';

        $artisanStoreRequest = explode("\\",$storeRequest);
        $artisanStoreRequest = implode("/",$artisanStoreRequest);

        $artisanUpdateRequest = explode("\\",$updateRequest);
        $artisanUpdateRequest = implode("/",$artisanUpdateRequest);

        // dd($artisanStoreRequest);

        Artisan::call('make:request "' . $artisanStoreRequest . '"');
        Artisan::call('make:request "' . $artisanUpdateRequest . '"');

        $svelteCreateView = $sveltePath . 'Create';
        $svelteEditView = $sveltePath . 'Edit';
        $svelteShowView = $sveltePath . 'Show';

        Artisan::call('make:svelte-page "' . $sveltePath . '" --extension=' . $extension);
        Artisan::call('make:svelte-page "' . $svelteCreateView . '" --extension=' . $extension);
        Artisan::call('make:svelte-page "' . $svelteEditView . '" --extension=' . $extension);
        Artisan::call('make:svelte-page "' . $svelteShowView . '" --extension=' . $extension);

        $clsRepo = '<?php

namespace App\Http\Controllers\\' . $path . ';

use App\Http\Controllers\Controller;
use App\Http\Requests\\' . $storeRequest . ';
use App\Http\Requests\\' . $updateRequest . ';
use App\\' . $repository . ';

class ' . $name . 'Controller extends Controller
{

    public function index(' . $repositoryName . ' $' . $repositoryInstanceName . ')
    {
        return inertia()->render("' . $sveltePath . '",$this->data([
            \'list\'=>$' . $repositoryInstanceName . '->fetch(request()->all())->get()
        ]));
    }

    public function create()
    {
        return inertia()->render("' . $svelteCreateView . '",$this->data([]));
    }

    public function store(' . $storeRequestName . ' $request,' . $repositoryName . ' $' . $repositoryInstanceName . ')
    {
        $record = $' . $repositoryInstanceName . '->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id,' . $repositoryName . ' $' . $repositoryInstanceName . ')
    {
        return inertia()->render("' . $svelteShowView . '",$this->data([
            "data"=>$' . $repositoryInstanceName . '->fetchById($id)
        ]));
    }

    public function edit($id,' . $repositoryName . ' $' . $repositoryInstanceName . ')
    {
        return inertia()->render("' . $svelteCreateView . '",$this->data([
            "data"=>$' . $repositoryInstanceName . '->fetchById($id)
        ]));
    }

    public function update(' . $updateRequestName . ' $request, $id ,' . $repositoryName . ' $' . $repositoryInstanceName . ')
    {
        $record = $' . $repositoryInstanceName . '->update($id,$request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id,' . $repositoryName . ' $' . $repositoryInstanceName . ')
    {
        $' . $repositoryInstanceName . '->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }

}
';


        Storage::disk("root")->put('app/Http/Controllers/' . $path . '/' . $name . 'Controller.php',$clsRepo);

        $this->info("inertia controller '" . $name . "Controller' generated successfully");
        return 0;
    }
}

