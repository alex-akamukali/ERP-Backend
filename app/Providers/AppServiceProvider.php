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

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //

    }
}
