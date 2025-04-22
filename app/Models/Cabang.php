<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Cabang extends Model
{
    protected $fillable = ['nama', 'alamat', 'telepon'];
    use HasFactory;
    public function karyawans()
    {
        return $this->hasMany(User::class, 'cabang_id');
    }
}
