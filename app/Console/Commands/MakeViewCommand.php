<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class MakeViewCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:view {name}';

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
        if (!$name){
            $this->error('name argument is required!');
            return 0;
        }
        $file = "resources/views/" . $name . ".blade.php";
        if (Storage::disk("root")->exists($file)){
            $this->info("Skipping overwrite, file exists!");
            return;
        }
        Storage::disk("root")->put($file,"<div>Blade template goes here...</div>");
        $this->info($name . '.blade.php created successfully.');
        return 0;
    }

}
