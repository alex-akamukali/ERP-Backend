<?php
namespace App\Http\Controllers\v2\Settings;
use App\Repositories\Settings\VendorCompanyRepository;
use App\Http\Requests\Settings\VendorCompany\StoreRequest;
use App\Http\Requests\Settings\VendorCompany\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class VendorCompanyController extends Controller
{
    //
    private $vendorCompanyRepository = null;

    function __construct(VendorCompanyRepository $vendorCompanyRepository){
        $this->vendorCompanyRepository = $vendorCompanyRepository;
    }

    function index(){
        $list = $this->vendorCompanyRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/VendorCompany/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/VendorCompany/Create");
    }

    function edit($id){
        $data = $this->vendorCompanyRepository->fetchById($id);
        return inertia()->render("v2/Settings/VendorCompany/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->vendorCompanyRepository->fetchById($id);
        return inertia()->render("v2/Settings/VendorCompany/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->vendorCompanyRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->vendorCompanyRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->vendorCompanyRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
