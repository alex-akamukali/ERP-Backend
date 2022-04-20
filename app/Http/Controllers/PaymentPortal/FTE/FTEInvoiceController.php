<?php

namespace App\Http\Controllers\PaymentPortal\FTE;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFTEInvoiceRequest;
use App\Http\Requests\UpdateFTEInvoiceRequest;
use App\Models\PaymentPortal\FTE\FTEInvoice;

class FTEInvoiceController extends Controller
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
     * @param  \App\Http\Requests\StoreFTEInvoiceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFTEInvoiceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PaymentPortal\FTE\FTEInvoice  $fTEInvoice
     * @return \Illuminate\Http\Response
     */
    public function show(FTEInvoice $fTEInvoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PaymentPortal\FTE\FTEInvoice  $fTEInvoice
     * @return \Illuminate\Http\Response
     */
    public function edit(FTEInvoice $fTEInvoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFTEInvoiceRequest  $request
     * @param  \App\Models\PaymentPortal\FTE\FTEInvoice  $fTEInvoice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFTEInvoiceRequest $request, FTEInvoice $fTEInvoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PaymentPortal\FTE\FTEInvoice  $fTEInvoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(FTEInvoice $fTEInvoice)
    {
        //
    }
}
