<?php

namespace App\Models\Workflow\Assessment;

use App\Traits\Workflow\Assessment\UseAssessmentTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceAgreement extends Model
{
    use HasFactory;
    use UseAssessmentTrait;

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
