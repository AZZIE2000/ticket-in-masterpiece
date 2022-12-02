<?php

namespace App\Models;

use App\Models\User;
use App\Models\Concert;
use App\Models\CustomerOrder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'concert_id',
        'total',
        'card_num',

    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function order()
    {
        return $this->belongsTo(CustomerOrder::class);
    }
    public function concert()
    {
        return $this->belongsTo(Concert::class);
    }
}
