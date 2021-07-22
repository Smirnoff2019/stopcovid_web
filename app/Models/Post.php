<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $fillable = [
    	'title', 'sub_title', 'content', 'description', 'image_id', 'position',
    ];

    /**
     * Get the author of the publication.
     */
    public function user()
    {
        return $this->belongsTo( User::class );
    }
}
