<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserver extends Model
{
    use HasFactory;
    protected $fillable = [
        'quantite',
        'oeuvre_id',
        'user_id'
    ];
}
