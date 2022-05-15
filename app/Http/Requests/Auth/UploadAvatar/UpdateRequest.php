<?php

namespace App\Http\Requests\Auth\UploadAvatar;

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
            'avatar'=>['required','file']
        ];
    }

    function uploadAvatar(){
        $uploaded = $this->file('avatar')->store("avatar",[
            'disk'=>'upload'
        ]);
        $data = $this->validated();
        $data['avatar'] = $uploaded;
        return $data;
    }

}
