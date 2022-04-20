<?php

namespace App\Http\Controllers\PaymentPortal\Contract;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContractInvoiceRequest;
use App\Http\Requests\UpdateContractInvoiceRequest;
use App\Models\PaymentPortal\Contract\ContractInvoice;

class ContractInvoiceController extends Controller
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
     * @param  \App\Http\Requests\StoreContractInvoiceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContractInvoiceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractInvoice  $contractInvoice
     * @return \Illuminate\Http\Response
     */
    public function show(ContractInvoice $contractInvoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractInvoice  $contractInvoice
     * @return \Illuminate\Http\Response
     */
    public function edit(ContractInvoice $contractInvoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContractInvoiceRequest  $request
     * @param  \App\Models\PaymentPortal\Contract\ContractInvoice  $contractInvoice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContractInvoiceRequest $request, ContractInvoice $contractInvoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PaymentPortal\Contract\ContractInvoice  $contractInvoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContractInvoice $contractInvoice)
    {
        //
    }
}
