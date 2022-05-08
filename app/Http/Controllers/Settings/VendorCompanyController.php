<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StoreVendorCompanyRequest;
use App\Http\Requests\Settings\UpdateVendorCompanyRequest;
use App\Settings\VendorCompanyRepository;

class VendorCompanyController extends Controller
{

    public function index(VendorCompanyRepository $vendorCompanyRepository)
    {
        return inertia()->render("Settings/Vendor", $this->data([
            'list' => $vendorCompanyRepository->fetch(request()->all())->get()
        ]));
    }

    public function create()
    {
    }

    public function store(StoreVendorCompanyRequest $request, VendorCompanyRepository $vendorCompanyRepository)
    {
        $record = $vendorCompanyRepository->create($request->validated());
        return $this->respondWithSuccess("New record added.");
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(UpdateVendorCompanyRequest $request, $id, VendorCompanyRepository $vendorCompanyRepository)
    {
        $record = $vendorCompanyRepository->update($id, $request->validated());
        return $this->respondWithSuccess("Record updated.");
    }

    public function destroy($id, VendorCompanyRepository $vendorCompanyRepository)
    {
        $vendorCompanyRepository->remove($id);
        return $this->respondWithSuccess("Record removed.");
    }
}
