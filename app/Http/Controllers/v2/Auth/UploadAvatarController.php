<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\UploadAvatarRepository;
use App\Http\Requests\Auth\UploadAvatar\StoreRequest;
use App\Http\Requests\Auth\UploadAvatar\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class UploadAvatarController extends Controller
{
    //
    private $uploadAvatarRepository = null;

    function __construct(UploadAvatarRepository $uploadAvatarRepository){
        $this->uploadAvatarRepository = $uploadAvatarRepository;
    }

    function index(){
        // $list = $this->uploadAvatarRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Auth/UploadAvatar/Index");
    }

    function create(){
        return inertia()->render("v2/Auth/UploadAvatar/Create");
    }

    function edit($id){
        $data = $this->uploadAvatarRepository->fetchById($id);
        return inertia()->render("v2/Auth/UploadAvatar/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->uploadAvatarRepository->fetchById($id);
        return inertia()->render("v2/Auth/UploadAvatar/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->uploadAvatarRepository->create($request->validated());
      return $this->respondWithSuccess("New record added");
    }

    function update($id,UpdateRequest $updateRequest){
        $this->uploadAvatarRepository->update($id,$updateRequest->uploadAvatar());
        return $this->respondWithSuccess("Avatar updated");
    }

    function destroy($id){
      $record = $this->uploadAvatarRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
