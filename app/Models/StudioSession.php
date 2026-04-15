<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudioSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'title',
        'trainer_name',
        'date',
        'time',
        'duration',
        'capacity',
        'remaining_slots',
        'level',
        'equipment',
        'price',
        'payment_methods',
        'description',
        'button_text',
        'button_url',
    ];
}
