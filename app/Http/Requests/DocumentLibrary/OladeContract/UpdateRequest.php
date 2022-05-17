<?php

namespace App\Http\Requests\DocumentLibrary\OladeContract;

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
            'owner_id'=>'required|exists:users,id',
            'document'=>'nullable',
            'document_title'=>'required',
            'status'=>'required'
        ];
    }

    function uploadDocument(){
        $data = $this->validated();
        if ($this->file('document')){
            $uploaded = $this->file('document')->store("document-library",[
                'disk'=>'upload'
            ]);
            $data['document'] = $uploaded;
        }
        $data['last_edited_by'] = $this->user()->id;
        return $data;
    }
}
