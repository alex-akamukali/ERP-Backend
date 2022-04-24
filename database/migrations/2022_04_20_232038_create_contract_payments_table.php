<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract_payments', function (Blueprint $table) {
            $table->id();

            $table->integer('user_id')->nullable();
            $table->integer('onboarding_id')->nullable();
            $table->string('hourly_rate')->nullable();
            $table->string('olade_rate')->nullable();

            $table->string('incomming_amount')->nullable();
            $table->string('outgoing_amount')->nullable();

            $table->string('date_invoiced')->nullable();
            $table->string('date_processed')->nullable();

            $table->string('start_period')->nullable();
            $table->string('end_period')->nullable();

            $table->string('payment_status')->nullable();
            $table->string('payment_ref')->nullable();
            $table->integer('created_by')->nullable();

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
        Schema::dropIfExists('contract_payments');
    }
}
