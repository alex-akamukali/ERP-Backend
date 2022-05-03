<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OladeContractType extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'primary_commission',
        'secondary_commission',
        'no_of_months',
        'status',
        'body',
        'instructions'
    ];

    const STATUSES = [
        'active',
        'inactive'
    ];

    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';

    function scopeWithStatus($query, $status)
    {
        return $query->where('status', $status);
    }
}
