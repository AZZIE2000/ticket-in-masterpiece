<?php

namespace App\Models;

use App\Models\Ticket;
use App\Models\CustomerOrder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TicketOrder extends Model
{
    use HasFactory;
    public function order()
    {
        return $this->belongsTo(CustomerOrder::class);
    }
    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }
}
