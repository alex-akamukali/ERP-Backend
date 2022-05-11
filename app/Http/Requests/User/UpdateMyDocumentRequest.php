<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMyDocumentRequest extends FormRequest
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
            'user_id'=>['required','exists:users,id'],
            'type'=>'required',
            'path'=>['required','file'],
            'title'=>'required'
        ];
    }

    function uploadDocument(){
        $uploaded = $this->file('avatar')->store("avatar",[
            'disk'=>'upload'
        ]);
        $data = $this->validated();
        $data['path'] = $uploaded;
        return $data;
    }

}
