<?php
namespace App\Http\Controllers\v2\Auth;
use App\Repositories\Auth\InviteCandidateRepository;
use App\Http\Requests\Auth\InviteCandidate\StoreRequest;
use App\Http\Requests\Auth\InviteCandidate\UpdateRequest;
use App\Http\Controllers\Controller;
//use Illuminate\Http\Request;

class InviteCandidateController extends Controller
{
    //
    private $inviteCandidateRepository = null;

    function __construct(InviteCandidateRepository $inviteCandidateRepository){
        $this->inviteCandidateRepository = $inviteCandidateRepository;
    }

    function index(){
        $list = $this->inviteCandidateRepository->fetch(request()->all())->get();
        return inertia()->render("v2/Auth/InviteCandidate/Index",[
            "list"=>$list
        ]);
    }

    function create(){
        return inertia()->render("v2/Auth/InviteCandidate/Create");
    }

    function edit($id){
        $data = $this->inviteCandidateRepository->fetchById($id);
        return inertia()->render("v2/Auth/InviteCandidate/Edit",[
            "data"=>$data
        ]);
    }

    function show($id){
        $data = $this->inviteCandidateRepository->fetchById($id);
        return inertia()->render("v2/Auth/InviteCandidate/Show",[
            "data"=>$data
        ]);
    }

    function store(StoreRequest $request){
      $record = $this->inviteCandidateRepository->create($request->validated());
      return $this->respondWithSuccess("Invite sent to candidate.");
    }

    function update($id){
        $record = $this->inviteCandidateRepository->update($id,[]);
        return $this->respondWithSuccess("Invite resent.");
    }

    function destroy($id){
      $record = $this->inviteCandidateRepository->remove($id);
      return $this->respondWithSuccess("Record removed");
    }
}
