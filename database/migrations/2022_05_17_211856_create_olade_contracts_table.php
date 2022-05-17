<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOladeContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('olade_contracts', function (Blueprint $table) {
            $table->id();
            $table->integer('owner_id')->nullable();
            $table->text('document')->nullable();
            $table->string('document_title')->nullable();
            $table->integer('last_edited_by')->nullable();
            $table->integer('uploaded_by')->nullable();
            $table->string("status")->nullable();
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
        Schema::dropIfExists('olade_contracts');
    }
}
