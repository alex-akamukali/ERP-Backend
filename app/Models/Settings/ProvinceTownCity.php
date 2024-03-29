<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProvinceTownCity extends Model
{
    use HasFactory;

    protected $fillable = [
      'province_id',
      'name'
    ];

    function scopeProvince($query,$province_id){
        return $query->where('province_id',$province_id);
    }

}
