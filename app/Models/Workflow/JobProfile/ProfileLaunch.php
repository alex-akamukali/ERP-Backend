<?php

namespace App\Models\Workflow\JobProfile;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileLaunch extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'email_password',
        'resume',
        'created_by',
        'status'
    ];
}
