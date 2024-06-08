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
        Schema::create('travailleurs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('cin');
            $table->string('nom');
            $table->string('prenom');
            $table->string('telephon');
            $table->string('miete');
            $table->string('type_contrat');
            $table->integer('age');
            $table->float('prices_services');
            $table->string('ville');
            $table->string('adresse_full');
            $table->string('photo')->nullable();
            $table->string('email')->unique();
            $table->boolean('is_travailleurs')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('travailleurs');
    }
};
