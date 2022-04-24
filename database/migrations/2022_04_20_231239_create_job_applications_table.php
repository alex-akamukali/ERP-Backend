<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();

            $table->integer('user_id')->nullable();
            $table->string('job_title')->nullable();
            $table->string('job_id_string')->nullable();
            $table->string('job_type')->nullable();
            $table->string('job_status')->nullable();
            $table->string('company_name')->nullable();
            $table->string('interview_date')->nullable();
            $table->string('job_description')->nullable();

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
        Schema::dropIfExists('job_applications');
    }
}
