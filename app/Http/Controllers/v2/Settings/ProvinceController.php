<?php
namespace App\Http\Controllers\v2\Settings;
use App\Repositories\Settings\ProvinceRepository;
use App\Http\Requests\Settings\Province\StoreRequest;
use App\Http\Requests\Settings\Province\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    //
    private $provinceRepository = null;

    function __construct(ProvinceRepository $provinceRepository){
        $this->provinceRepository = $provinceRepository;
    }

    function index(){
        $list = $this->provinceRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/Province/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/Province/Create");
    }

    function edit($id){
        $data = $this->provinceRepository->fetchById($id);
        return inertia()->render("v2/Settings/Province/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->provinceRepository->fetchById($id);
        return inertia()->render("v2/Settings/Province/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->provinceRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->provinceRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->provinceRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
