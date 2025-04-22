<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'status',
        'user_id',
        'room',
        'ps',
        'booking_time',
        'note'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
