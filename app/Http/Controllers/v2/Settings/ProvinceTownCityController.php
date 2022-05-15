<?php
namespace App\Http\Controllers\v2\Settings;
use App\Repositories\Settings\ProvinceTownCityRepository;
use App\Http\Requests\Settings\ProvinceTownCity\StoreRequest;
use App\Http\Requests\Settings\ProvinceTownCity\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class ProvinceTownCityController extends Controller
{
    //
    private $provinceTownCityRepository = null;

    function __construct(ProvinceTownCityRepository $provinceTownCityRepository){
        $this->provinceTownCityRepository = $provinceTownCityRepository;
    }

    function index(){
        $list = $this->provinceTownCityRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Settings/ProvinceTownCity/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Settings/ProvinceTownCity/Create");
    }

    function edit($id){
        $data = $this->provinceTownCityRepository->fetchById($id);
        return inertia()->render("v2/Settings/ProvinceTownCity/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->provinceTownCityRepository->fetchById($id);
        return inertia()->render("v2/Settings/ProvinceTownCity/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->provinceTownCityRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->provinceTownCityRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->provinceTownCityRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
