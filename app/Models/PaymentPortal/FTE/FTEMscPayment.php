<?php

namespace App\Models\PaymentPortal\FTE;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FTEMscPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'f_t_e_payment_id',
        'impact_on_invoice',
        'amount',
        'description',
        'due_date',
        'taxable'
    ];
}
