<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\MyDocumentRepository;
use App\Http\Requests\Auth\MyDocument\StoreRequest;
use App\Http\Requests\Auth\MyDocument\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class MyDocumentController extends Controller
{
    //
    private $myDocumentRepository = null;

    function __construct(MyDocumentRepository $myDocumentRepository){
        $this->myDocumentRepository = $myDocumentRepository;
    }

    function index(){
        $list = $this->myDocumentRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Auth/MyDocument/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/MyDocument/Create");
    }

    function edit($id){
        $data = $this->myDocumentRepository->fetchById($id);
        return inertia()->render("v2/Auth/MyDocument/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->myDocumentRepository->fetchById($id);
        return inertia()->render("v2/Auth/MyDocument/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->myDocumentRepository->create($request->uploadDocument());
      return $this->respondWithSuccess("New Document uploaded.");
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->myDocumentRepository->update($id,$updateRequest->uploadDocument());
        return $this->respondWithSuccess("Document updated");
    }

    function destroy($id){
      $record = $this->myDocumentRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
