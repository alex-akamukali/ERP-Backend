<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePayrollManagerRequest;
use App\Http\Requests\UpdatePayrollManagerRequest;
use App\Models\Settings\PayrollManager;
use App\Repositories\PayrollManagerRepo;

class PayrollManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(PayrollManagerRepo $payrollManagerRepo)
    {

        return inertia()->render("Settings/PayrollManager",$this->data([
            'list'=>$payrollManagerRepo->fetch()->get()
        ]));
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
     * @param  \App\Http\Requests\StorePayrollManagerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePayrollManagerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Settings\PayrollManager  $payrollManager
     * @return \Illuminate\Http\Response
     */
    public function show(PayrollManager $payrollManager)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Settings\PayrollManager  $payrollManager
     * @return \Illuminate\Http\Response
     */
    public function edit(PayrollManager $payrollManager)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePayrollManagerRequest  $request
     * @param  \App\Models\Settings\PayrollManager  $payrollManager
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePayrollManagerRequest $request, PayrollManager $payrollManager)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Settings\PayrollManager  $payrollManager
     * @return \Illuminate\Http\Response
     */
    public function destroy(PayrollManager $payrollManager)
    {
        //
    }
}
