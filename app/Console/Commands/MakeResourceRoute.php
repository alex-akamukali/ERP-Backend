<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class MakeResourceRoute extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:resource-route {name} {--controller=}';

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
        // dd($this->option('name'));
        $name = $this->argument('name');
        $controller = $this->option('controller');
        if (!$name){
            $this->error('name argument is required!');
            return 0;
        }
        if (!$controller){
            $this->error('--controller= option required!');
            return 0;
        }
        $controller = explode("/",$controller);
        $controller = implode("\\",$controller);
        $routeOld = Storage::disk("root")->get("routes/web.php");

        $output = "\nRoute::resource('" . $name . "',\App\Http\Controllers\\" . $controller  . "::class)->middleware(['auth']);\n";
        Storage::disk("root")->put("routes/web.php",$routeOld . $output);
        $this->info('Resource route (' . $name . ') generated');

        return 0;

    }
}
