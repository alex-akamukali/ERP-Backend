<?php

namespace App\Models\PaymentPortal\FTE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FTEPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'onboarding_id',
        'net_pay',
        'olade_fee',
        'date_invoiced',
        'date_processed',
        'start_period',
        'end_period',
        'payment_status',
        'payment_ref',
        'created_by'
    ];
}
