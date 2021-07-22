<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MacAddress extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'mac_address', 'status',
    ];

    public function notificationResults()
    {
        return $this->hasMany('App\Models\NotificationResult', 'mac_address_id', 'id');
    }

    public static function saveMacAddress( $macAddress ) {
        return self::create(array(
            'mac_address' => $macAddress,
            'status' => 0
        ));
    }

    public function addNotificationResult( $name ) {
        return $this->notificationResults()->create(array(
            'name' => $name ?? null,
            'status' => 1
        ));
    }

}
