<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFramesVariationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('frames_variations', function (Blueprint $table) {
            $table->unsignedBigInteger('vari_id');
            $table->string('var_bgimage');
            $table->string('thumb_image');
            $table->string('frame_design_image');
            $table->text('description')->nullable();
            $table->integer('price');
            $table->boolean('status');
            $table->foreignId('frame_id')->constrained('frames')->onUpdate('cascade')->onDelete('cascade');

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
        Schema::dropIfExists('frames_variations');
        Schema::dropForeign('frame_id');

    }
}
