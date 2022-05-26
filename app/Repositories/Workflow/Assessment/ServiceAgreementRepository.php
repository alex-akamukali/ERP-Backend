<?php
namespace App\Repositories\Workflow\Assessment;
use App\Models\Workflow\Assessment\ServiceAgreement;
use Illuminate\Support\Facades\Auth;

class ServiceAgreementRepository
{

    function fetch($filters=[]){
        $query = ServiceAgreement::query();
        return $query;
    }

    function fetchById($id){
        $record = ServiceAgreement::query()->find($id);
        return $record;
    }

    function approved($userId){
        $query = ServiceAgreement::query()->getByUserId($userId)->statusApproved();
        return $query;
     }

     function getLastSignedContract($userId){
        if ($this->approved($userId)->exists()){
            $record = $this->approved($userId)->first();
            return ' Signed contract ' . $record->updated_at->diffForHumans();
          }
          return 'No Signed Contract(s)';
     }



    function update($id,$data){
        $record = ServiceAgreement::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data){
        $record = ServiceAgreement::create($data);
        return $record;
    }

    function remove($id){
        $record = ServiceAgreement::query()->find($id);
        $record->delete();
        return $record;
    }



}
