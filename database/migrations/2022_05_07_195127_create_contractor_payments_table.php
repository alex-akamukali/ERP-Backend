<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractorPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contractor_payments', function (Blueprint $table) {
            $table->id();

            $table->integer('onboarding_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->string('date_invoiced')->nullable();
            $table->string('date_processed')->nullable();
            $table->string('start_period')->nullable();
            $table->string('end_period')->nullable();
            $table->string('payment_status')->nullable()->comment('success or pending');
            $table->string('payment_ref')->nullable();
            $table->string('created_by')->nullable();
            $table->string('olade_percent')->nullable();

            //fte section
            $table->string('net_pay')->nullable();
            $table->string('olade_fee')->nullable();

            //contract
            $table->string('number_of_hours')->nullable();
            $table->string('hourly_rate')->nullable()->comment('This is also the vendor rate.');
            $table->string('olade_rate')->nullable();
            $table->string('incomming_amount')->nullable();
            $table->string('outgoing_amount')->nullable();

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
        Schema::dropIfExists('contractor_payments');
    }
}
