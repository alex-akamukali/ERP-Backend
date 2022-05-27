<?php

namespace App\Http\Requests\Workflow\Assessment\AssessmentResult;

use App\Models\Workflow\Assessment\AssessmentResult;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            "no_of_correct_answer"=>'required',
            "no_of_questions"=>"required"
        ];
    }

    function prepareData(){
        $data = $this->validated();
        $data['score'] = round($data['no_of_correct_answer']/$data['no_of_questions'] * 100); //no_of_correct_answer
        if ($data['score'] > 40){
          $data['status'] = AssessmentResult::$STATUS_APPROVED;
        }else{
            $data['status'] = AssessmentResult::$STATUS_UNAPPROVED;
        }
        return $data;
    }

}
