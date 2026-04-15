<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('studio_sessions', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable();
            $table->string('title');
            $table->string('trainer_name');
            $table->string('date');
            $table->string('time');
            $table->string('duration');
            $table->string('capacity');
            $table->string('remaining_slots');
            $table->string('level');
            $table->string('equipment');
            $table->string('price');
            $table->string('payment_methods');
            $table->text('description');
            $table->string('button_text');
            $table->string('button_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('studio_sessions');
    }
};
