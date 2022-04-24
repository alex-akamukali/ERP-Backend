<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KnowledgeArea extends Model
{
    use HasFactory;

    protected $fillable = [
        'program_type_id',
        'knowledge_area_type',
        'name',
        'no_of_questions',
        'status'
    ];
}
