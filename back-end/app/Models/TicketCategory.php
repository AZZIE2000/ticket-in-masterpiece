<?php

namespace App\Models;

use App\Models\Ticket;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Concert;

class TicketCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'class',
        'description',
        'area',
        'price',
        'seats',
        'concert_id',
        'active',
    ];
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
    public function concert()
    {
        return $this->belongsTo(Concert::class);
    }
}
