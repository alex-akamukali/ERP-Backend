<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVendorsRequest;
use App\Http\Requests\UpdateVendorsRequest;
use App\Models\Settings\VendorCompany;
use App\Repositories\VendorRepo;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(VendorRepo $vendorRepo)
    {
        //
        return inertia()->render("Settings/Vendor",[
            'list'=>$vendorRepo->fetch()->get(),
            'message'=>$this->getMessage(),
            'error'=>$this->getError()
        ]);

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
     * @param  \App\Http\Requests\StoreVendorsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVendorsRequest $request)
    {
        //
        VendorCompany::create($request->validated());
        return $this->respondWithSuccess("New Vendor Added.");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Settings\Vendors  $vendors
     * @return \Illuminate\Http\Response
     */
    public function show(VendorCompany $vendorCompany)
    {
        //
        return $vendorCompany;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Settings\Vendors  $vendors
     * @return \Illuminate\Http\Response
     */
    public function edit(VendorCompany $vendorCompany)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVendorsRequest  $request
     * @param  \App\Models\Settings\Vendors  $vendors
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVendorsRequest $request,VendorCompany $vendorCompany)
    {
        // dd($vendors);
        $vendorCompany->update($request->validated());
        // dd($vendors);
        return $this->respondWithSuccess("Vendor updated.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Settings\Vendors  $vendors
     * @return \Illuminate\Http\Response
     */
    public function destroy(VendorCompany $vendorCompany)
    {
        $vendorCompany->delete();
        return $this->respondWithSuccess("Vendor removed.");
    }
}
