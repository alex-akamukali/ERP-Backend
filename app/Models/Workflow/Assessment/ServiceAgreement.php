<?php

namespace App\Models\Workflow\Assessment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceAgreement extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'olade_contract_id',
        'date_opened',
        'date_signed',
        'signature',
        'status',
        'created_by'
    ];
}
