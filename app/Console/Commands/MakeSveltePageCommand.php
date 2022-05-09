<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class MakeSveltePageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:svelte-page {name} {--extension=}';

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
        $extension = $this->option('extension');
        if (!$name){
            $this->error('name argument is required!');
            return 0;
        }
        if (!$extension){
          $extension = 'svelte';
        }

        $file = "resources/js/Pages/" . $name . "." . $extension;
        if (Storage::disk("root")->exists($file)){
            $this->info("Skipping overwrite, file exists!");
            return;
        }
        Storage::disk("root")->put($file,"<script context=\"module\">
\nimport { page, useForm } from \"@inertiajs/inertia-svelte\";
\n</script>\n
<script>\n
//export let name;\n
</script>
");
        $this->info("Page/" . $name . '.svelte created successfully.');
        return 0;

    }
}
