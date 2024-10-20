<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserver extends Pivot
{
    use HasFactory;
    protected $fillable = [
        'quantite',
        'oeuvre_id',
        'user_id'
    ];
}
