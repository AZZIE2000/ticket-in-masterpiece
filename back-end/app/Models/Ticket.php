<?php

namespace App\Models;

use App\Models\Concert;
use App\Models\TicketOrder;
use App\Models\CustomerOrder;
use App\Models\TicketCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'serial_num',
        'ticket_category_id',
        'seat',
        'concert_id',
        'user_id',
        'scanned',
    ];

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
        return $this->belongsTo(TicketCategory::class, 'ticket_category_id');
    }
    // public function category()
    // {
    //     return $this->belongsTo(TicketCategory::class);
    // }
    public function orders()
    {
        return $this->belongsToMany(CustomerOrder::class);
    }
}
