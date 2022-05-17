<?php

namespace App\Http\Requests\DocumentLibrary\OladeContract;

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
            'owner_id'=>'required|exists:users,id',
            'document'=>'required|file',
            'document_title'=>'required',
            'status'=>'required'
        ];
    }

    function uploadDocument(){
        $uploaded = $this->file('document')->store("document-library",[
            'disk'=>'upload'
        ]);
        $data = $this->validated();
        $data['document'] = $uploaded;
        $data['last_edited_by'] = $this->user()->id;
        $data['uploaded_by'] = $this->user()->id;
        // $data['owner_id'] = $this->user()->id;
        return $data;
    }

}

