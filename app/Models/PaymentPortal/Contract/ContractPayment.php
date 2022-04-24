<?php

namespace App\Models\PaymentPortal\Contract;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'onboarding_id',
        'hourly_rate',
        'olade_rate',
        'incomming_amount',
        'outgoing_amount',
        'date_invoiced',
        'date_processed',
        'start_period',
        'end_period',
        'payment_status',
        'payment_ref',
        'created_by'
    ];

}
