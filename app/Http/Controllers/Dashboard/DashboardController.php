<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    function index(){
       return inertia()->render('Dashboard/Dashboard',[]);
    }
}
