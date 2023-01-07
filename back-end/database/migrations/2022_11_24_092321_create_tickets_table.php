<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('serial_num');
            $table->foreignId('ticket_category_id')->constrained()->onDelete('cascade');
            $table->string('seat');
            $table->string('note')->nullable();
            $table->boolean('scanned')->default(false);
            $table->string("scanner")->nullable();
            $table->string("sold_from")->nullable();
            $table->boolean("invitation")->default(false)->nullable();
            $table->foreignId('concert_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
            // user -> hasOne -> concert -> throw -> tickets
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
};
