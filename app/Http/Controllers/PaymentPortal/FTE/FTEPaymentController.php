<?php

namespace App\Http\Controllers\PaymentPortal\FTE;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFTEPaymentRequest;
use App\Http\Requests\UpdateFTEPaymentRequest;
use App\Models\PaymentPortal\FTE\FTEPayment;

class FTEPaymentController extends Controller
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
     * @param  \App\Http\Requests\StoreFTEPaymentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFTEPaymentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PaymentPortal\FTE\FTEPayment  $fTEPayment
     * @return \Illuminate\Http\Response
     */
    public function show(FTEPayment $fTEPayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PaymentPortal\FTE\FTEPayment  $fTEPayment
     * @return \Illuminate\Http\Response
     */
    public function edit(FTEPayment $fTEPayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFTEPaymentRequest  $request
     * @param  \App\Models\PaymentPortal\FTE\FTEPayment  $fTEPayment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFTEPaymentRequest $request, FTEPayment $fTEPayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PaymentPortal\FTE\FTEPayment  $fTEPayment
     * @return \Illuminate\Http\Response
     */
    public function destroy(FTEPayment $fTEPayment)
    {
        //
    }
}
