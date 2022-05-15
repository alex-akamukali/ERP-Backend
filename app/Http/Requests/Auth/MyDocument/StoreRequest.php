<?php

namespace App\Http\Requests\Auth\MyDocument;

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
            'user_id'=>['required','exists:users,id'],
            'type'=>'required',
            'path'=>['required','file'],
            'title'=>'required'
        ];
    }

    function uploadDocument(){
        $uploaded = $this->file('path')->store("my_documents",[
            'disk'=>'upload'
        ]);
        $data = $this->validated();
        $data['path'] = $uploaded;
        return $data;
    }
}
