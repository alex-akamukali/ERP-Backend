<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramType extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'status'
    ];

    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';


    function scopeActive($query)
    {
        return $query->where('status', self::STATUS_ACTIVE);
    }

    function scopeInActive($query)
    {
        return $query->where('status', self::STATUS_INACTIVE);
    }
}
