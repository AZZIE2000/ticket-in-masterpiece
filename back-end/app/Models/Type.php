<?php

namespace App\Models;

use App\Models\Concert;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Type extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',

    ];
    public function concerts()
    {
        return $this->hasMany(Concert::class);
    }
}
