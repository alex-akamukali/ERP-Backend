<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssessmentInterviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assessment_interviews', function (Blueprint $table) {
            $table->id();

            $table->string('user_id')->nullable();
            $table->string('status')->nullable()->comment('pass or fail');
            $table->string('scheduled_date')->nullable();
            $table->string('created_by')->nullable();

            //  (pass or fail)

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
        Schema::dropIfExists('assessment_interviews');
    }
}
