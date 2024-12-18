<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class publication extends Model
{
    use HasFactory;
    protected $fillable = [
        'titre',
        'richText',
        'description',
        'image',
        'lien',
        'user_id'
    ];
    public function user(){
        return $this->hasMany(User::class);
    }
}
