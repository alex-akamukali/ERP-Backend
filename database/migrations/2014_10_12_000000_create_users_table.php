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


            $table->text('userid')->nullable();
            $table->text('FirstName')->nullable();
            $table->string('MiddleName')->nullable();
            $table->text('LastName')->nullable();


            $table->string('Phone')->nullable();
            $table->string('DOB')->nullable();
            $table->string('Gender')->nullable();
            $table->text('Profession')->nullable();
            $table->text('Education')->nullable();
            $table->integer('ProgramType')->nullable();
            $table->text('Address')->nullable();
            $table->string('apartment')->nullable();
            $table->string('town')->nullable();
            $table->string('postalcode')->nullable();
            $table->string('province')->nullable();
            $table->string('countryOrRegion')->nullable();

            $table->string('RegisteredOn')->nullable();
            $table->string('lastLogin')->nullable();
            $table->integer('user_r')->nullable();
            $table->integer('alumni_r')->nullable();
            $table->integer('account_r')->nullable();
            $table->integer('cuscare_r')->nullable();
            $table->integer('admin_r')->nullable();
            $table->integer('mgt_r')->nullable();
            $table->integer('superadmin_r')->nullable();
            $table->integer('docu_signSigner')->nullable();
            $table->integer('isActive')->nullable();
            $table->text('myIncorp')->nullable();
            $table->text('myIncorpAddress')->nullable();
            $table->text('HST')->nullable();
            $table->integer('Director')->nullable();
            $table->integer('Admin')->nullable();
            $table->text('VoidCheck')->nullable();
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
