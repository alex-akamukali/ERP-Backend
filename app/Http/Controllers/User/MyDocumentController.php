<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreMyDocumentRequest;
use App\Http\Requests\User\UpdateMyDocumentRequest;
use App\User\MyDocumentRepository;

class MyDocumentController extends Controller
{

    public function index(MyDocumentRepository $myDocumentRepository)
    {
        return inertia()->render("User/MyDocument",$this->data([
            'list'=>$myDocumentRepository->fetch(request()->all())->get()
        ]));
    }

    public function create()
    {
        return inertia()->render("User/MyDocumentCreate",$this->data([]));
    }

    public function store(StoreMyDocumentRequest $request,MyDocumentRepository $myDocumentRepository)
    {
        $data = $request->uploadDocument();
        $record = $myDocumentRepository->create($data);
        return $this->respondWithSuccess("Document uploaded.");
    }

    public function show($id,MyDocumentRepository $myDocumentRepository)
    {
        return inertia()->render("User/MyDocumentShow",$this->data([
            "data"=>$myDocumentRepository->fetchById($id)
        ]));
    }

    public function edit($id,MyDocumentRepository $myDocumentRepository)
    {
        return inertia()->render("User/MyDocumentCreate",$this->data([
            "data"=>$myDocumentRepository->fetchById($id)
        ]));
    }

    public function update(UpdateMyDocumentRequest $request, $id ,MyDocumentRepository $myDocumentRepository)
    {
        $data = $request->uploadDocument();
        $record = $myDocumentRepository->update($id,$data);
        return $this->respondWithSuccess("Document updated.");
    }

    public function destroy($id,MyDocumentRepository $myDocumentRepository)
    {
        $myDocumentRepository->remove($id);
        return $this->respondWithSuccess("Document removed.");
    }

}
