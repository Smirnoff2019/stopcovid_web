<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\{User};

class Image extends Model
{
    //

    /**
     * Get the author of the publication.
     */
    public function user()
    {
        return $this->belongsTo( User::class );
    }
    
}
