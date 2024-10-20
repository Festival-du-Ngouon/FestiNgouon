<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oeuvre extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'img',
        'description',
    ];

    public function user(){
        return $this->belongsToMany(User::class)->using(Reserver::class)->withTimestamps();
    }
}
