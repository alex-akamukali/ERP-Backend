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

    const KNOWLEDGE_AREA_TYPES = [
        'internal',
        'external'
    ];

    const STATUSES = [
        'active',
        'inactive'
    ];

    const KNOWLEDGE_AREA_TYPE_INTERNAL = 'internal';
    const KNOWLEDGE_AREA_TYPE_EXTERNAL = 'external';
    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';

    protected $with = ['program_type'];

    function program_type()
    {
        return $this->belongsTo(ProgramType::class, 'program_type_id');
    }

    function scopeActive($query){
       return $query->where('status',self::STATUS_ACTIVE);
    }

    function scopeInactive($query){
        return $query->where('status',self::STATUS_INACTIVE);
    }

    function scopeKnowledgeAreaType($query,$type){
       return $query->where('knowledge_area_type',$type);
    }

}
