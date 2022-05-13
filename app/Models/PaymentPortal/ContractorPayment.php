<?php

namespace App\Models\PaymentPortal;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractorPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'onboarding_id', 'user_id', 'date_invoiced', 'date_processed', 'start_period',
        'end_period', 'payment_status', 'payment_ref', 'created_by', 'olade_percent', 'net_pay', 'olade_fee', 'number_of_hours',
        'hourly_rate', 'olade_rate', 'incomming_amount', 'outgoing_amount'
    ];
}
