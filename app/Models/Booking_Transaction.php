<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
class Booking_Transaction extends Model
{
    protected $fillable = [
        'status',
        'id_karyawan',
        'id_customer',
        'note',
        'more'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
