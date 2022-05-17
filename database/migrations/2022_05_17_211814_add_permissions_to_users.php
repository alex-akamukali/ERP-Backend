<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPermissionsToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('permission_profile_status')->nullable();
            $table->integer('permission_is_super_admin')->nullable();
            $table->integer('permission_is_mgt_admin')->nullable();
            $table->integer('permission_is_accountant')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('permission_profile_status');
            $table->dropColumn('permission_is_super_admin');
            $table->dropColumn('permission_is_mgt_admin');
            $table->dropColumn('permission_is_accountant');
        });
    }
}
