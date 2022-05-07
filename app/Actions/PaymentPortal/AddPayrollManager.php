<?php

namespace App\Actions\PaymentPortal;

use App\Http\Requests\PaymentPortal\AddPayrollManagerRequest;
use App\Models\Settings\PayrollManager;

class AddPayrollManager
{
    private $request = null;

    function __construct(AddPayrollManagerRequest $request)
    {
      $this->request = $request;
    }

    function exec(){
       PayrollManager::create($this->request->validated());
    }

}
