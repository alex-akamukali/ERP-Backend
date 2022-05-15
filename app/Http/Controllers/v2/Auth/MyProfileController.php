<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\MyProfileRepository;
use App\Http\Requests\Auth\MyProfile\StoreRequest;
use App\Http\Requests\Auth\MyProfile\UpdateRequest;
use App\Http\Controllers\Controller;
use App\Repositories\Auth\MyDocumentRepository;

//use Illuminate\Http\Request;

class MyProfileController extends Controller
{
    //
    private $myProfileRepository = null;

    function __construct(MyProfileRepository $myProfileRepository){
        $this->myProfileRepository = $myProfileRepository;
    }

    function index(MyDocumentRepository $myDocumentRepository){
        $auth = $this->myProfileRepository->auth();
        return inertia()->render("v2/Auth/MyProfile/Index",[
            "auth"=>$auth,
            "my_documents"=>$myDocumentRepository->fetch([])->get(),
            "types"=>$myDocumentRepository->types()
        ]);
    }

    function update($id,UpdateRequest $updateRequest){
        $record = $this->myProfileRepository->update($id,$updateRequest->validated());
        return $this->respondWithSuccess("Record updated");
    }

    function destroy($id){
      //$record = $this->myProfileRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
