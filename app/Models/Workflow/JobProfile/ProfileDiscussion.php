<?php

namespace App\Models\Workflow\JobProfile;

use App\Traits\Workflow\Assessment\UseAssessmentTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileDiscussion extends Model
{
    use HasFactory;

    use UseAssessmentTrait;

    protected $fillable = [
        'user_id',
        'status',
        'scheduled_date',
        'created_by'

    ];
}
