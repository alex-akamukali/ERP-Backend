<?php
namespace App\Traits\Workflow\Assessment;

trait UseAssessmentTrait{

    static $STATUS_APPROVED = 'approved';
    static $STATUS_UNAPPROVED = 'unapproved';
    static $STATUSES = ['approved','unapproved'];


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



}
