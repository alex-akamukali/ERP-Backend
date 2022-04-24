<?php

namespace App\Models\Workflow\JobProfile;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumeWalkthrough extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'status',
        'scheduled_date',
        'created_by'
    ];
}
