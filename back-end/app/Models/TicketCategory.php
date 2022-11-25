<?php

namespace App\Models;

use App\Models\Ticket;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Concert;

class TicketCategory extends Model
{
    use HasFactory;
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
    public function concert()
    {
        return $this->belongsTo(Concert::class);
    }
}
