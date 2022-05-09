<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');


            ////new
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();

            $table->string('last_name')->nullable();

            $table->string('highest_qualification')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->string('phone')->nullable();

            $table->string('program_type_id')->nullable();
            $table->string('address')->nullable();
            $table->integer('province_id')->nullable();
            $table->integer('province_town_city_id')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('account_status')->nullable();
            $table->string('incorporation_name')->nullable();
            $table->string('incorporation_address')->nullable();
            $table->string('notes')->nullable();
            $table->string('resume')->nullable();
            $table->string('id_card')->nullable();
            $table->string('void_check_doc')->nullable();
            $table->string('hst_no')->nullable();
            $table->integer('assign_admin')->nullable();
            $table->integer('assign_director_id')->nullable();
            $table->string('account_type')->nullable();
            $table->string('dob')->nullable();
            $table->string('gender')->nullable();

            $table->longText("skills")->nullable();

            ///new

            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
