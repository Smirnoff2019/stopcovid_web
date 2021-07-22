<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationResult extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'mac_address_id', 'name', 'status',
    ];
}
