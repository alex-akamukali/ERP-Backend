<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFTEPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('f_t_e_payments', function (Blueprint $table) {
            $table->id();

            $table->integer('user_id')->nullable();
            $table->integer('onboarding_id')->nullable();
            $table->string('net_pay')->nullable();
            $table->string('olade_fee')->nullable();
            $table->string('date_invoiced')->nullable();
            $table->string('date_processed')->nullable();
            $table->string('start_period')->nullable();
            $table->string('end_period')->nullable();
            $table->string('payment_status')->nullable();
            $table->string('payment_ref')->nullable();
            $table->string('created_by')->nullable();

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
        Schema::dropIfExists('f_t_e_payments');
    }
}
