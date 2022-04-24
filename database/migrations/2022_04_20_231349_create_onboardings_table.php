<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOnboardingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('onboardings', function (Blueprint $table) {
            $table->id();

            $table->integer('job_application_id')->nullable();
            $table->string('type')->nullable()->comment('direct or job-application');
            $table->string('job_type')->nullable();
            $table->string('client_name')->nullable();
            $table->string('olade_percent')->nullable();
            $table->integer('vendor_id')->nullable();
            $table->string('back_check_status')->nullable();

            $table->string('olade_contract_id')->nullable();

            // FTE
            $table->string('annual_salary')->nullable();

            //Contract

            $table->string('vendor_rate')->nullable();
            $table->string('olade_rate')->nullable();
            $table->string('consultant_incorporation_name')->nullable();
            $table->string('void_check')->nullable();
            $table->string('incorporation_cost')->nullable();
            $table->string('insurance_cost')->nullable();
            $table->string('hst_no')->nullable();

            // common
            $table->string('onboarding_status')->nullable();
            $table->string('start_date')->nullable();
            $table->string('end_date')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('onboardings');
    }
}
