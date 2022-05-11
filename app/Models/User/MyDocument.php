<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyDocument extends Model
{

    use HasFactory;

    protected $fillable = ['user_id','type','title','path'];

    const TYPES = ['resume','certificate','expense'];

}
