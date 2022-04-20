<?php

namespace App\Http\Controllers\PaymentPortal\Contract;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContractPaymentRequest;
use App\Http\Requests\UpdateContractPaymentRequest;
use App\Models\PaymentPortal\Contract\ContractPayment;

class ContractPaymentController extends Controller
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
     * @param  \App\Http\Requests\StoreContractPaymentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContractPaymentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractPayment  $contractPayment
     * @return \Illuminate\Http\Response
     */
    public function show(ContractPayment $contractPayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractPayment  $contractPayment
     * @return \Illuminate\Http\Response
     */
    public function edit(ContractPayment $contractPayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContractPaymentRequest  $request
     * @param  \App\Models\PaymentPortal\Contract\ContractPayment  $contractPayment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContractPaymentRequest $request, ContractPayment $contractPayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractPayment  $contractPayment
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContractPayment $contractPayment)
    {
        //
    }
}
