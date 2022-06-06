<?php

namespace App\Console\Commands;

use App\Models\Workflow\Assessment\AssessmentResult;
use App\Scafold\ClassGenerator;
use App\Scafold\ControllerScafold;
use App\Scafold\RepoScafold;
use App\Scafold\RepositoryGenerator;
use App\Scafold\ScafoldGen;
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
        // $classBuilder = new RepositoryGenerator("app/RepositoriesExample/UserModule/UserRepository");
        // $classBuilder2 = new ClassGenerator("App\Http\Controllers\Controller");
        // $classModelInject = new ClassGenerator("app/Models/Settings/Config");
        // // $classInject2 = new ClassGenerator("app/Services/Inject2");
        // // $classBuilder->extends($classBuilder2);
        // $classBuilder->uses($classModelInject,'model');
        // // $classBuilder->inject($classInject2);

        // $classBuilder->buildClass(function(ClassGenerator $builder){
        //     $builder->newFunction("foo",'$a,$b',function(ClassGenerator $classGenerator){
        //         $classGenerator->addBlock('return  $a + $b;',2);
        //     });
        // });

        // $classBuilder->commit();

        // dd($classBuilder->output());

        $userModel = new ScafoldGen("app/Models/User");
        $repoGen = new RepoScafold("app/Repositoriesv2/UserRepository");
        $controllerGen = new ControllerScafold("app/Repositoriesv2/Controllers/User2Controller");

        $repoGen->setModel($userModel);

        $controllerGen->setRepository($repoGen);

        $repoGen->commit("php");
        $controllerGen->commit("php");

        return 0;
    }
}
