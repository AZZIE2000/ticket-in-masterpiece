<?php

namespace App\Models;

use App\Models\Concert;
use App\Models\TicketOrder;
use App\Models\TicketCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ticket extends Model
{
    use HasFactory;

    public function ticketOrders()
    {
        return $this->hasMany(TicketOrder::class);
    }
    public function concert()
    {
        return $this->belongsTo(Concert::class);
    }
    public function category()
    {
        return $this->belongsTo(TicketCategory::class);
    }
}
