<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMockInterviewResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mock_interview_results', function (Blueprint $table) {
            $table->id();

            $table->integer('user_id')->nullable();
            $table->string('first_trial')->nullable()->comment('pass or fail');
            $table->string('second_trial')->nullable()->comment('pass or fail');
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();

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
        Schema::dropIfExists('mock_interview_results');
    }
}
