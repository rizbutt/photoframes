<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Frames extends Model
{
    protected $table = 'frames';
    protected $fillable = [
        'name', 'frametype', 'image', 'Description'
    ];
}
