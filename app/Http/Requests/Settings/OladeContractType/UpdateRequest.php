<?php

namespace App\Http\Requests\Settings\OladeContractType;

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
            'title' => 'required',
            'primary_commission' => 'required',
            'secondary_commission' => 'required',
            'no_of_months' => 'required',
            'status' => 'required',
            'body' => 'required',
        ];
    }
}
