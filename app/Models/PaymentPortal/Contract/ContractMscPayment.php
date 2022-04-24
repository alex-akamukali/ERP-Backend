<?php

namespace App\Models\PaymentPortal\Contract;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractMscPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'contract_payment_id',
        'impact_on_invoice',
        'amount',
        'description',
        'due_date',
        'taxable'
    ];
}
