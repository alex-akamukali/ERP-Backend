<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractMscPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract_msc_payments', function (Blueprint $table) {
            $table->id();
            $table->integer('contract_payment_id')->nullable();
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
        Schema::dropIfExists('contract_msc_payments');
    }
}
