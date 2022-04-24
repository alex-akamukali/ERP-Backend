<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResumeWalkthroughsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resume_walkthroughs', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->string('status')->nullable()->comment('completed,pending');
            $table->string('scheduled_date')->nullable();
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
        Schema::dropIfExists('resume_walkthroughs');
    }
}
