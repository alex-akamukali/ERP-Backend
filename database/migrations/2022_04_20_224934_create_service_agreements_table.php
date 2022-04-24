<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceAgreementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_agreements', function (Blueprint $table) {
            $table->id();

            $table->integer('user_id')->nullable();
            $table->integer('olade_contract_id')->nullable();

            $table->string('date_opened')->nullable();
            $table->string('date_signed')->nullable();
            $table->text('signature')->nullable();
            $table->string('status')->nullable();
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
        Schema::dropIfExists('service_agreements');
    }
}
