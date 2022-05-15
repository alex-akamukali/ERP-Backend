<?php
namespace App\Http\Controllers\v2\Settings;
use App\Repositories\Settings\PayrollManagerRepository;
use App\Http\Requests\Settings\PayrollManager\StoreRequest;
use App\Http\Requests\Settings\PayrollManager\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class PayrollManagerController extends Controller
{
    //
    private $payrollManagerRepository = null;

    function __construct(PayrollManagerRepository $payrollManagerRepository){
        $this->payrollManagerRepository = $payrollManagerRepository;
    }

    function index(){
        $list = $this->payrollManagerRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/PayrollManager/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/PayrollManager/Create");
    }

    function edit($id){
        $data = $this->payrollManagerRepository->fetchById($id);
        return inertia()->render("v2/Settings/PayrollManager/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->payrollManagerRepository->fetchById($id);
        return inertia()->render("v2/Settings/PayrollManager/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->payrollManagerRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->payrollManagerRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->payrollManagerRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
