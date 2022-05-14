<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        inertia()->share('logo_white',asset('asset1/Olade_logo_white.png'));
        inertia()->share('login_form_image',asset('asset1/uNGdWHi.png'));
        // inertia()->share('message2',session()->get('message'));
        // dd(csrf_token());
        // inertia()->share('crsf',csrf_token());
        $this->app->bind('Fusers',function(){
            return User::all();
        });

        // $this->renderable()
        // $message = '';
        // // $error = false;
        // if (session()->has('message')){
        //   $message = session()->get('message');
        // //   $error = session()->get('error');
        // }
        // return $message;



$this->app->bind(\App\Repositories\Settings\Interfaces\ConfigRepositoryInterface::class,\App\Repositories\Settings\ConfigRepository::class);
$this->app->bind(\App\Repositories\Settings\Interfaces\KnowledgeAreaRepositoryInterface::class,\App\Repositories\Settings\KnowledgeAreaRepository::class);
$this->app->bind(\App\Repositories\Settings\Interfaces\ProgramTypeRepositoryInterface::class,\App\Repositories\Settings\ProgramTypeRepository::class);
$this->app->bind(\App\Repositories\Auth\Interfaces\UserRepositoryInterface::class,\App\Repositories\Auth\UserRepository::class);
$this->app->bind(\App\Repositories\Auth\Interfaces\UserRepositoryInterface::class,\App\Repositories\Auth\UserRepository::class);
$this->app->bind(\App\Repositories\Auth\Interfaces\UserRepositoryInterface::class,\App\Repositories\Auth\UserRepository::class);
#insertRepository

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        // view()->share('message','ok...');
        // view()->share('error',false);
    }
}
