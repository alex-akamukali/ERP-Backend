<?php

namespace App\Http\Controllers\v1\Auth;

use App\Repositories\Auth\Interfaces\DashboardRepositoryInterface;
use App\Http\Requests\Auth\Dashboard\StoreRequest;
use App\Http\Requests\Auth\Dashboard\UpdateRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    private $dashboardRepository = null;

    function __construct(DashboardRepositoryInterface $dashboardRepository){
        $this->dashboardRepository = $dashboardRepository;
    }

    function index(){
        return inertia()->render("v2/Auth/Dashboard/Index");
    }

}
