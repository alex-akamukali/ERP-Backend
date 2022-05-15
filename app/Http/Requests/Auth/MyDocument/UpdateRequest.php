<?php

namespace App\Http\Requests\Auth\MyDocument;

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
            'user_id'=>['required','exists:users,id'],
            'type'=>'required',
            // 'path'=>['nullable','file'],
            'title'=>'required'
        ];
    }

    function uploadDocument(){
        $data = $this->validated();
        if ($this->file('path')){
            $uploaded = $this->file('path')->store("my_documents",[
                'disk'=>'upload'
            ]);
            $data['path'] = $uploaded;
        }
        return $data;
    }
}
