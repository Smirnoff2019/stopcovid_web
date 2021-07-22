<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\{User, Image, QuarantineMeasuresType};

class QuarantineMeasure extends Model
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
     * Get the type the record is attached to.
     */
    public function type()
    {
        return $this->belongsTo( QuarantineMeasuresType::class );
    }

}
