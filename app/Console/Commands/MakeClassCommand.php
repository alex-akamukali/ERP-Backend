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
    protected $signature = 'make:class {name} {--path=}';

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
        if (!$name){
            $this->error('name argument is required!');
            return 0;
        }
        if (!$path){
            $this->error('path option is required!');
            return 0;
        }
        $path = explode('/',$path);
        $path = implode('\\',$path);

        $cls = '<?php

namespace App\\' . $path . ';

class ' . $name . '
{

}';

        Storage::disk("root")->put('app/' . $path . '/' . $name . '.php',$cls);

        $this->info("class name '" . $name . "' generated successfully");
        return 0;
    }
}
