<?php

namespace App\Console\Commands;

use App\Models\Workflow\Assessment\AssessmentResult;
use App\Scafold\ClassGenerator;
use App\Scafold\RepositoryGenerator;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;

class LabTest extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'lab:test';

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
        // AssessmentResult::query()->colu
        // Schema::getColumnListing(AssessmentResult::get
        // $tableName = (new AssessmentResult)->getTable();
        // dd(Schema::getColumnListing($tableName));
        // dd((new AssessmentResult)->getTable());
        $classBuilder = new RepositoryGenerator("app/RepositoriesExample/UserRepository");
        $classBuilder2 = new ClassGenerator("App\Http\Controllers\Controller");
        $classInject = new ClassGenerator("app/Models/Customer");
        $classInject2 = new ClassGenerator("app/Services/Inject2");
        $classBuilder->extends($classBuilder2);
        $classBuilder->uses($classInject,'model');
        $classBuilder->inject($classInject2);

        $classBuilder->buildClass(function(ClassGenerator $builder){
            $builder->newFunction("foo",'$a,$b',function(ClassGenerator $classGenerator){
                $classGenerator->addBlock(' return  $a + $b;');
            });
        });

        $classBuilder->commit();

        dd($classBuilder->output());

        return 0;
    }
}
