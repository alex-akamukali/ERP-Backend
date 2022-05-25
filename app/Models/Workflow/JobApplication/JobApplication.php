<?php

namespace App\Models\Workflow\JobApplication;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'job_title',
        'job_id_string',
        'job_type',
        'job_status',
        'company_name',
        'interview_date',
        'job_description',
        'status'
    ];
}
