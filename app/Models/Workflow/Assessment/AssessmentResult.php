<?php

namespace App\Models\Workflow\Assessment;

use App\Models\Settings\KnowledgeArea;
use App\Traits\Workflow\Assessment\UseAssessmentTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssessmentResult extends Model
{
    use HasFactory;
    use UseAssessmentTrait;

    protected $with = ['knowledge_area'];

    protected $fillable = [
        'user_id',
        'program_type_id',
        'exam_type_id',
        'knowledge_area_id',
        'no_of_correct_answer',
        'score',
        'created_by',
        'status'
    ];

    function knowledge_area(){
        return $this->belongsTo(KnowledgeArea::class,"knowledge_area_id");
    }
}
