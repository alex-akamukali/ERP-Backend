<?php

use App\Http\Controllers\Auth\CheckAuthController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Settings\ProgramTypeController;
use App\Http\Controllers\User\InviteCandidateController;
use App\Http\Controllers\User\UserController;
// use App\Http\Controllers\User\DashboardController;
// use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\Workflow\Assessment\PreEmploymentAssessmentController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     // dd(csrf_token());
//     if (!Gate::allows('create-foo')){
//         // dd('nope');
//     }
//     $message = '';
//     if (session()->has('message')){
//     //   dd(session()->get('message'));
//     $message = session()->get('message');
//     }
//     // return view('welcome');
//     // dd($message);
//     return inertia()->render('Auth/Login',[
//         'version'=>'2.0.0',
//         'login_route'=>route('login.store'),
//         'csrf'=>csrf_token(),
//         'message'=>$message
//     ]);
// });


Route::get('migrate',function(){
   Artisan::call("migrate");
   // --seed
   return [
       'message'=>'Migration ran with seeders',
       'error'=>false
   ];
});

Route::get('/',function(){
    return redirect()->route('login.index');
})->name('root');



// Route::resource('login',LoginController::class);

// Route::get('logout',[LoginController::class,'destroy'])->name('logout');



// Route::get('/dashboard',[DashboardController::class,'index'])->name('dashboard')->middleware(['auth']);

// Route::get('all-users',[UserController::class,'index'])->name('all.users')->middleware(['auth']);

// Route::get('user/profile',[ProfileController::class,'index'])->name('user.profile')->middleware(['auth']);

// Route::resource('program-type',ProgramTypeController::class)->middleware(['auth']);

// Route::resource('invite-candidate',InviteCandidateController::class);

/////////////////////////////// [Workflow]////////////////////////////////




Route::resource('workflow-assessment',\App\Http\Controllers\Workflow\Assessment\AssessmentController::class)->middleware(['auth']);

// Route::resource('workflow-assessment',\App\Http\Controllers\Workflow\Assessment\AssessmentInterviewController::class)->middleware(['auth']);

// Route::resource('workflow-assessment',\App\Http\Controllers\Workflow\Assessment\AssessmentResultController::class)->middleware(['auth']);

// Route::resource('invite-candidate',\App\Http\Controllers\User\InviteCandidateController::class)->middleware(['auth']);

// Route::resource('check-auth',\App\Http\Controllers\Auth\CheckAuthController::class);

// Route::resource('knowledge-area',\App\Http\Controllers\Settings\KnowledgeAreaController::class)->middleware(['auth']);

// // Route::get('xlogin',[CheckAuthController::class,'xlogin'])->name('xlogin');

// Route::resource('olade-contract-type',\App\Http\Controllers\Settings\OladeContractTypeController::class)->middleware(['auth']);

// Route::resource('province',\App\Http\Controllers\Settings\ProvinceController::class)->middleware(['auth']);

// Route::resource('province-town-city',\App\Http\Controllers\Settings\ProvinceTownCityController::class)->middleware(['auth']);

// // Route::resource('vendor-company',\App\Http\Controllers\Settings\VendorController::class)->middleware(['auth']);

// Route::resource('payroll-manager',\App\Http\Controllers\Settings\PayrollManagerController::class)->middleware(['auth']);

// // Route::resource('config',\App\Http\Controllers\Settings\ConfigController::class)->middleware(['auth']);

// Route::resource('vendor-company',\App\Http\Controllers\Settings\VendorCompanyController::class)->middleware(['auth']);

// // Route::resource('my-document',\App\Http\Controllers\User\MyDocumentController::class)->middleware(['auth']);

// Route::resource('my-activity',\App\Http\Controllers\User\MyActivityController::class)->middleware(['auth']);

// Route::resource('my-profile',\App\Http\Controllers\User\MyProfileController::class)->middleware(['auth']);

// Route::resource('upload-avatar',\App\Http\Controllers\User\UploadAvatarController::class)->middleware(['auth']);

// Route::resource('update-user-skill',\App\Http\Controllers\User\UpdateUserSkillController::class)->middleware(['auth']);




///////////////New Divide/////////////////////////

// Route::resource("config",\App\Http\Controllers\v1\Settings\ConfigController::class)->middleware(["auth"]);

// Route::resource("knowledge-area",\App\Http\Controllers\v1\Settings\KnowledgeAreaController::class)->middleware(["auth"]);

// Route::resource("program-type",\App\Http\Controllers\v1\Settings\ProgramTypeController::class)->middleware(["auth"]);

// Route::resource("user",\App\Http\Controllers\v1\Auth\UserController::class)->middleware(["auth"]);


// Route::resource("dashboard",\App\Http\Controllers\v1\Auth\DashboardController::class)->middleware(["auth"]);

Route::resource("login",\App\Http\Controllers\v2\Auth\LoginController::class);

Route::resource("logout",\App\Http\Controllers\v2\Auth\LogoutController::class)->middleware(["auth"]);

Route::resource("dashboard",\App\Http\Controllers\v2\Auth\DashboardController::class)->middleware(["auth"]);

Route::resource("my-profile",\App\Http\Controllers\v2\Auth\MyProfileController::class)->middleware(["auth"]);

Route::resource("my-document",\App\Http\Controllers\v2\Auth\MyDocumentController::class)->middleware(["auth"]);

Route::resource("upload-avatar",\App\Http\Controllers\v2\Auth\UploadAvatarController::class)->middleware(["auth"]);

Route::resource("update-user-skill",\App\Http\Controllers\v2\Auth\UpdateUserSkillController::class)->middleware(["auth"]);

Route::resource("user",\App\Http\Controllers\v2\Auth\UserController::class)->middleware(["auth"]);

Route::resource("invite-candidate",\App\Http\Controllers\v2\Auth\InviteCandidateController::class)->middleware(["auth"]);

Route::resource("program-type",\App\Http\Controllers\v2\Settings\ProgramTypeController::class)->middleware(["auth"]);

Route::resource("config",\App\Http\Controllers\v2\Settings\ConfigController::class)->middleware(["auth"]);

Route::resource("knowledge-area",\App\Http\Controllers\v2\Settings\KnowledgeAreaController::class)->middleware(["auth"]);

Route::resource("olade-contract-type",\App\Http\Controllers\v2\Settings\OladeContractTypeController::class)->middleware(["auth"]);

Route::resource("payroll-manager",\App\Http\Controllers\v2\Settings\PayrollManagerController::class)->middleware(["auth"]);

Route::resource("province",\App\Http\Controllers\v2\Settings\ProvinceController::class)->middleware(["auth"]);

Route::resource("province-town-city",\App\Http\Controllers\v2\Settings\ProvinceTownCityController::class)->middleware(["auth"]);

Route::resource("vendor-company",\App\Http\Controllers\v2\Settings\VendorCompanyController::class)->middleware(["auth"]);

Route::resource("assessment-interview",\App\Http\Controllers\v2\Workflow\Assessment\AssessmentInterviewController::class)->middleware(["auth"]);

Route::resource("assessment-result",\App\Http\Controllers\v2\Workflow\Assessment\AssessmentResultController::class)->middleware(["auth"]);

Route::resource("pre-employment-assessment",\App\Http\Controllers\v2\Workflow\Assessment\PreEmploymentAssessmentController::class)->middleware(["auth"]);

Route::resource("service-agreement",\App\Http\Controllers\v2\Workflow\Assessment\ServiceAgreementController::class)->middleware(["auth"]);

Route::resource("job-application",\App\Http\Controllers\v2\Workflow\JobApplication\JobApplicationController::class)->middleware(["auth"]);

Route::resource("mock-interview",\App\Http\Controllers\v2\Workflow\JobProfile\MockInterviewController::class)->middleware(["auth"]);

Route::resource("mock-interview-result",\App\Http\Controllers\v2\Workflow\JobProfile\MockInterviewResultController::class)->middleware(["auth"]);

Route::resource("profile-discussion",\App\Http\Controllers\v2\Workflow\JobProfile\ProfileDiscussionController::class)->middleware(["auth"]);

Route::resource("profile-launch",\App\Http\Controllers\v2\Workflow\JobProfile\ProfileLaunchController::class)->middleware(["auth"]);

Route::resource("resume-walkthrough",\App\Http\Controllers\v2\Workflow\JobProfile\ResumeWalkthroughController::class)->middleware(["auth"]);

Route::resource("onboarding",\App\Http\Controllers\v2\Workflow\Onboarding\OnboardingController::class)->middleware(["auth"]);

Route::resource("employment-contract",\App\Http\Controllers\v2\DocumentLibrary\OladeContractController::class)->middleware(["auth"]);

Route::resource("docusign",\App\Http\Controllers\v2\Auth\DocusignController::class)->middleware(["auth"]);

Route::resource("user-permission",\App\Http\Controllers\v2\Auth\UserPermissionController::class)->middleware(["auth"]);
