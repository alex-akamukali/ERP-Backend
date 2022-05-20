<?php

namespace App\Http\Requests\Auth\MyProfile;

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
            'first_name'=>'required',
            'middle_name'=>'required',
            'last_name'=>'required',
            'gender'=>'required',
            'profession'=>'required',
            'highest_qualification'=>'required',
            'address'=>'required',
            'date_of_birth'=>'required',
            'phone'=>'required',
            'email'=>'required'
        ];
    }
}
