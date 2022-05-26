<?php
namespace App\Traits\Workflow\Assessment;

use App\Models\User;

trait UseAssessmentTrait{

    static $STATUS_APPROVED = 'approved';
    static $STATUS_UNAPPROVED = 'pending';
    static $STATUSES = ['approved','pending'];


    function scopeGetByStatus($query,$status){
        if (in_array($status,static::$STATUSES)){
          $query = $query->where('status',$status);
        }
        return $query;
    }

    function scopeStatusApproved($query){
        return $query->getByStatus(static::$STATUS_APPROVED);
    }

    function scopeStatusUnapproved($query){
        return $query->getByStatus(static::$STATUS_UNAPPROVED)->orWhereNull('status');
    }

    function scopeGetByUserId($query,$userId){
        return $query->where('user_id',$userId);
    }

    function raised_by(){
        return $this->belongsTo(User::class,'created_by');
    }



}
