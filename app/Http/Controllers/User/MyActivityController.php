<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreMyActivityRequest;
use App\Http\Requests\User\UpdateMyActivityRequest;
use App\User\MyActivityRepository;

class MyActivityController extends Controller
{

    public function index(MyActivityRepository $myActivityRepository)
    {
        return inertia()->render("User/MyActivity",$this->data([
            'list'=>$myActivityRepository->fetch(request()->all())->get()
        ]));
    }

    public function create()
    {
        return inertia()->render("User/MyActivityCreate",$this->data([]));
    }

    public function store(StoreMyActivityRequest $request,MyActivityRepository $myActivityRepository)
    {
        $record = $myActivityRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id,MyActivityRepository $myActivityRepository)
    {
        return inertia()->render("User/MyActivityShow",$this->data([
            "data"=>$myActivityRepository->fetchById($id)
        ]));
    }

    public function edit($id,MyActivityRepository $myActivityRepository)
    {
        return inertia()->render("User/MyActivityCreate",$this->data([
            "data"=>$myActivityRepository->fetchById($id)
        ]));
    }

    public function update(UpdateMyActivityRequest $request, $id ,MyActivityRepository $myActivityRepository)
    {
        $record = $myActivityRepository->update($id,$request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id,MyActivityRepository $myActivityRepository)
    {
        $myActivityRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }

}
