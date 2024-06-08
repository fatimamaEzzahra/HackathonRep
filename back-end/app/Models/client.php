<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class client extends Model
{
    use HasFactory;
    public function travailleurs()
    {
        return $this->belongsToMany(Travailleur::class, 'client_travailleurs');
    }
}
