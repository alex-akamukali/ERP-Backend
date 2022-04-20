<?php

namespace App\Http\Controllers\PaymentPortal\Contract;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContractMscPaymentRequest;
use App\Http\Requests\UpdateContractMscPaymentRequest;
use App\Models\PaymentPortal\Contract\ContractMscPayment;

class ContractMscPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreContractMscPaymentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContractMscPaymentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractMscPayment  $contractMscPayment
     * @return \Illuminate\Http\Response
     */
    public function show(ContractMscPayment $contractMscPayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractMscPayment  $contractMscPayment
     * @return \Illuminate\Http\Response
     */
    public function edit(ContractMscPayment $contractMscPayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContractMscPaymentRequest  $request
     * @param  \App\Models\PaymentPortal\Contract\ContractMscPayment  $contractMscPayment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContractMscPaymentRequest $request, ContractMscPayment $contractMscPayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractMscPayment  $contractMscPayment
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContractMscPayment $contractMscPayment)
    {
        //
    }
}
