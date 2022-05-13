<?php

namespace App\Models\PaymentPortal;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractorPaymentMsc extends Model
{
    use HasFactory;

    protected $fillable = ['contractor_payment_id', 'impact_on_invoice', 'amount', 'description', 'due_date', 'taxable'];
}
