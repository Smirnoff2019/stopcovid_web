<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id')->nullable()->default(null);

            $table->string('title')->nullable()->default(null);

            $table->text('description')->nullable()->default(null);

            $table->string('name')->nullable()->default(null);
            
            $table->string('format')->nullable()->default(null);
            
            $table->text('path')->nullable()->default(null);

            $table->text('url')->nullable()->default(null);
           
            $table->integer('status')->nullable()->default(0);

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
        Schema::dropIfExists('images');
    }
}
