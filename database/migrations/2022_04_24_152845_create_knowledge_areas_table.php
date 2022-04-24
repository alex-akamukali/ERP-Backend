<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKnowledgeAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('knowledge_areas', function (Blueprint $table) {
            $table->id();
            $table->integer('program_type_id')->nullable();
            $table->string('knowledge_area_type')->nullable();
            $table->string('name')->nullable();
            $table->string('no_of_questions')->nullable();
            $table->string('status')->nullable();
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
        Schema::dropIfExists('knowledge_areas');
    }
}
