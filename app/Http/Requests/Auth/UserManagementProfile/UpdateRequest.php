<?php

namespace App\Http\Requests\Auth\UserManagementProfile;

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
            "first_name"=>"required",
            "middle_name"=>"required",
            "last_name"=>"required",
            "gender"=>"required",
            "highest_qualification"=>"required",
            "dob"=>"required",
            "phone"=>"required",
            "program_type_id"=>"required",
            "address"=>"required",
            "province_id"=>"required",
            "province_town_city_id"=>"required",
            "postal_code"=>"required",
            "account_status"=>"required",
            "incorporation_name"=>"required",
            "incorporation_address"=>"nullable",
            "notes"=>"nullable",
            "resume"=>"nullable",
            "id_card"=>"nullable",
            "void_check_doc"=>"nullable",
            "hst_no"=>"required",
            "assign_admin"=>"nullable",
            "assign_director_id"=>"nullable",
        ];
    }

    function preparedData(){
        $data = $this->validated();

        return $data;
    }
}
