<?php

namespace App\Models;

use App\Models\User;
use App\Models\Ticket;
use App\Models\Payment;
use App\Models\TicketOrder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CustomerOrder extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
    public function orderTickets()
    {
        return $this->hasMany(TicketOrder::class);
    }
    public function tickets()
    {
        return $this->belongsToMany(Ticket::class);
    }
}
