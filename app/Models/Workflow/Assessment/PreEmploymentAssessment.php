<?php

namespace App\Models\Workflow\Assessment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreEmploymentAssessment extends Model
{
    use HasFactory;

    protected $fillable = [
       'user_id',
       'status',
       'scheduled_date',
       'created_by'
    ];
}
