<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssessmentResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assessment_results', function (Blueprint $table) {
            $table->id();

            $table->integer('user_id')->nullable();
            $table->integer('program_type_id')->nullable();
            $table->string('exam_type_id')->nullable();
            $table->integer('knowledge_area_id')->nullable();
            $table->string('no_of_correct_answer')->nullable();
            $table->string('score')->nullable();
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
        Schema::dropIfExists('assessment_results');
    }
}
