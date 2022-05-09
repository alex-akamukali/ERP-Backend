<?php

namespace App\PaymentPortal;

use App\Models\PaymentPortal\ContractorPayment;

class ContractorPaymentRepository
{

    function fetch($filters = [])
    {
        $query = ContractorPayment::query();
        return $query;
    }

    function fetchById($id)
    {
        $record = ContractorPayment::query()->find($id);
        return $record;
    }


    function update($id, $data)
    {
        $record = ContractorPayment::query()->find($id);
        $record->update($data);
        return $record;
    }

    function create($data)
    {
        $record = ContractorPayment::create($data);
        return $record;
    }

    function remove($id)
    {
        $record = ContractorPayment::query()->find($id);
        $record->delete();
        return $record;
    }
}
