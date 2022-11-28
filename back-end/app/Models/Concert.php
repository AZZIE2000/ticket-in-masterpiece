<?php

namespace App\Models;

use App\Models\Ticket;
use App\Models\Type;
use App\Models\TicketCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Concert extends Model
{
    use HasFactory;

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
    public function categories()
    {
        return $this->hasMany(TicketCategory::class);
    }
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
    public function type()
    {
        return $this->belongsTo(Type::class);
    }
}
