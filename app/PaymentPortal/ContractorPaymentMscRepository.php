<?php

namespace App\PaymentPortal;

use App\Models\PaymentPortal\ContractorPaymentMsc;

class ContractorPaymentMscRepository
{

    function fetch($filters = [])
    {
        $query = ContractorPaymentMsc::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = ContractorPaymentMsc::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = ContractorPaymentMsc::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = ContractorPaymentMsc::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = ContractorPaymentMsc::query()->find($id);
        $record->delete();
        return $record;
    }
}
