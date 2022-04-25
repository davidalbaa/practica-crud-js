<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CursosRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "name" => ["required"]
        ];
    }
    public function messages()
    {
        return [
            "name.required" => "falto porner el nombre"
        ];
    }
}
