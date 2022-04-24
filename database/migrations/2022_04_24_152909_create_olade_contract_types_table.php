<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOladeContractTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('olade_contract_types', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('primary_commission')->nullable();
            $table->string('secondary_commission')->nullable();
            $table->string('no_of_months')->nullable();
            $table->string('status')->nullable();
            $table->longText('body')->nullable();
            $table->text('instructions')->nullable();
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
        Schema::dropIfExists('olade_contract_types');
    }
}
