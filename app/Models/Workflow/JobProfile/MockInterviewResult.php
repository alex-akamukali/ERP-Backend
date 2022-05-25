<?php

namespace App\Models\Workflow\JobProfile;

use App\Traits\Workflow\Assessment\UseAssessmentTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MockInterviewResult extends Model
{
    use HasFactory;

    use UseAssessmentTrait;

    protected $fillable = [
        'user_id',
        'first_trial',
        'second_trial',
        'created_by',
        'updated_by',
        'status'
    ];
}
