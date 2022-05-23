<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\DocusignRepository;
use App\Http\Requests\Auth\Docusign\StoreRequest;
use App\Http\Requests\Auth\Docusign\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class DocusignController extends Controller
{
    //
    private $docusignRepository = null;

    function __construct(DocusignRepository $docusignRepository){
        $this->docusignRepository = $docusignRepository;
    }

    function index(){
        $list = $this->docusignRepository->activeUsers(request()->all())->paginate(12);
        return inertia()->render("v2/Auth/Docusign/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/Docusign/Create");
    }

    function edit($id){
        $data = $this->docusignRepository->fetchById($id);
        return inertia()->render("v2/Auth/Docusign/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->docusignRepository->fetchById($id);
        return inertia()->render("v2/Auth/Docusign/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->docusignRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->docusignRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      $record = $this->docusignRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
