<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StorePayrollManagerRequest;
use App\Http\Requests\Settings\UpdatePayrollManagerRequest;
use App\Settings\PayrollManagerRepository;

class PayrollManagerController extends Controller
{

    public function index(PayrollManagerRepository $payrollManagerRepository)
    {
        return inertia()->render("Settings/PayrollManager", $this->data([
            'list' => $payrollManagerRepository->fetch(request()->all())->get()
        ]));
    }

    public function create()
    {
    }

    public function store(StorePayrollManagerRequest $request, PayrollManagerRepository $payrollManagerRepository)
    {
        $record = $payrollManagerRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(UpdatePayrollManagerRequest $request, $id, PayrollManagerRepository $payrollManagerRepository)
    {
        $record = $payrollManagerRepository->update($id, $request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id, PayrollManagerRepository $payrollManagerRepository)
    {
        $payrollManagerRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }
}
