<?php

namespace App\Http\Requests\Workflow\Assessment\PreEmploymentAssessment;

use App\Models\Workflow\Assessment\PreEmploymentAssessment;
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
            "user_id"=>"required|exists:users,id",
            "scheduled_date"=>"required"
        ];
    }

    function prepareData(){
        $data = $this->validated();
        $data['status'] = PreEmploymentAssessment::$STATUS_UNAPPROVED;
        $data['created_by'] = request()->user()->id;
        return $data;
    }
}
