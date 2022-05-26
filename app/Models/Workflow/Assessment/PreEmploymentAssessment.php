<?php

namespace App\Models\Workflow\Assessment;

use App\Traits\Workflow\Assessment\UseAssessmentTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreEmploymentAssessment extends Model
{
    use HasFactory;

    use UseAssessmentTrait;

    protected $fillable = [
       'user_id',
       'status',
       'scheduled_date',
       'created_by'
    ];

    protected $with = ['raised_by'];

    // const STATUS_APPROVED = 'approved';
    // const STATUS_UNAPPROVED = 'unapproved';
    // const STATUSES = [self::STATUS_APPROVED,self::STATUS_UNAPPROVED];


    // function scopeGetByStatus($query,$status){
    //     if (in_array($status,self::STATUSES)){
    //       $query = $query->where('status',$status);
    //     }
    //     return $query;
    // }

    // function scopeStatusApproved($query){
    //     return $query->getByStatus(self::STATUS_APPROVED);
    // }

    // function scopeStatusUnapproved($query){
    //     return $query->getByStatus(self::STATUS_UNAPPROVED);
    // }

    // function scopeGetByUserId($query,$userId){
    //     return $query->where('user_id',$userId);
    // }



}
