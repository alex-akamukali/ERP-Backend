<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyActivity extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'action', 'entity', 'payload'];
}
