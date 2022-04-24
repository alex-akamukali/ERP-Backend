<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfileDiscussionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profile_discussions', function (Blueprint $table) {
            $table->id();

            $table->integer('user_id')->nullable();
            $table->string('status')->nullable()->comment('completed,pending');
            $table->string('scheduled_date')->nullable();
            $table->integer('created_by')->nullable();

//  (completed,pending)

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
        Schema::dropIfExists('profile_discussions');
    }
}
