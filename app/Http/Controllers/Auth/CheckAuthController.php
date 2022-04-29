<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAuthController extends Controller
{

    function index(){
        $check = Auth::check();
        return [
            'is_logged'=>$check
        ];
        // return inertia()->render("Auth/Chec")
    }


}
