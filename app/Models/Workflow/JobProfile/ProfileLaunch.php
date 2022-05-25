<?php

namespace App\Models\Workflow\JobProfile;

use App\Traits\Workflow\Assessment\UseAssessmentTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileLaunch extends Model
{
    use HasFactory;
    use UseAssessmentTrait;


    protected $fillable = [
        'user_id',
        'email_password',
        'resume',
        'created_by',
        'status'
    ];
}
