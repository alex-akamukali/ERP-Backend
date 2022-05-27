<?php

namespace App\Http\Requests\Workflow\Assessment\AssessmentResult;

use App\Models\Workflow\Assessment\AssessmentResult;
use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id'=>'required',
            'program_type_id'=>'required',
            'exam_type_id'=>'required',
            'knowledge_area_id'=>'required',
            'no_of_correct_answer'=>'required'
        ];
    }

    function prepareData(){
        $data = $this->validated();
        $data['created_by'] = request()->user()->id;
        $data['status'] = AssessmentResult::$STATUS_UNAPPROVED;
        $data['score'] = 0;
        return $data;

    }
}
