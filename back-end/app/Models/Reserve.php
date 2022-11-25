<?php

namespace App\Models;

use App\Models\Concert;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reserve extends Model
{
    use HasFactory;
    public function concert()
    {
        return $this->belongsTo(Concert::class);
    }
}
