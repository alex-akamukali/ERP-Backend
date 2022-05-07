<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PayrollManager extends Model
{
    use HasFactory;

    protected $fillable = ['name','description','status'];


}
