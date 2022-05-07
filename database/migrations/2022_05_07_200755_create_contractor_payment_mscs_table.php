<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractorPaymentMscsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contractor_payment_mscs', function (Blueprint $table) {
            $table->id();

            $table->integer('contractor_payment_id')->nullable();
            $table->string('impact_on_invoice')->nullable()->comment('(addition or deduction)');
            $table->string('amount')->nullable();
            $table->string('description')->nullable();
            $table->string('due_date')->nullable();
            $table->string('taxable')->nullable();

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
        Schema::dropIfExists('contractor_payment_mscs');
    }
}
