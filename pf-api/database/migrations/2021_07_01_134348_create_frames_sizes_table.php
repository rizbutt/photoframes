<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFramesSizesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('frames_sizes', function (Blueprint $table) {
            $table->unsignedBigInteger('size_id');
            $table->string('dimention');
            $table->foreignId('vari_id')->constrained('frames_variations')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropForeign('vari_id');
        Schema::dropIfExists('frames_sizes');
    }
}
