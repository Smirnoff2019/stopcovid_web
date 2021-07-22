<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('user_id')->nullable()->default(null);

            $table->string('slug')->nullable()->default(null);

            $table->string('title')->nullable()->default(null);

            $table->text('description')->nullable()->default(null);

            $table->unsignedBigInteger('image_id')->nullable()->default(null);
           
            $table->unsignedBigInteger('position')->nullable()->default(0);

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
        Schema::dropIfExists('categories');
    }
}
