<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('booking__transactions', function (Blueprint $table) {
            $table->id();
            $table->string('status')->nullable();
            $table->string('id_karyawan')->nullable();
            $table->string('id_customer');
            $table->string('note')->nullable();
            $table->string('more')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking__transactions');
    }
};
