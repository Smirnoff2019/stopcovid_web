<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\{User, Image, QuarantineMeasure};

class QuarantineMeasuresType extends Model
{
    //

    /**
     * Get the author of the publication.
     */
    public function user()
    {
        return $this->belongsTo( User::class );
    }

    /**
     * Get the image of the publication.
     */
    public function image()
    {
        return $this->hasOne( Images::class );
    }

    /**
     * Get attached posts.
     */
    public function posts()
    {
        return $this->hasMany( QuarantineMeasure::class );
    }

}
