<?php

namespace App\Models\Workflow\Onboarding;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Onboarding extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_application_id',
        'type',
        'job_type',
        'client_name',
        'olade_percent',
        'vendor_id',
        'back_check_status',
        'olade_contract_id',
        'annual_salary',
        'vendor_rate',
        'olade_rate',
        'consultant_incorporation_name',
        'void_check',
        'incorporation_cost',
        'insurance_cost',
        'hst_no',
        'onboarding_status',
        'start_date',
        'end_date',
        'status'

    ];
}
