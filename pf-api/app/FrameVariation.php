<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FrameVariation extends Model
{
    protected $table = 'frames_variations';

    protected $fillable = [
        'var_bgimage', 'thumb_image', 'frame_design_image', 'description','price', 'status', 'frame_id'
    ];

}
