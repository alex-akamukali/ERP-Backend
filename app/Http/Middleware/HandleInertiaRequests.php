<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'flash'=>[
                'message'=>$request->session()->get('message')
            ],
            'csrf'=>csrf_token(),
            'logout_route'=>route('logout'),
            'olade_logo'=>asset('asset1/Olade_logo_white.png'),
            'user_logo'=>asset('asset1/user2-160x160.jpg'),
            'user_profile_route'=>route('user.profile'),
            'all_users_route'=>route('all.users'),
            'user'=>$request->user(),
            'dashboard_route'=>route('dashboard'),
            'program_type_index_route'=>route('program-type.index'),

        ]);
    }
}
