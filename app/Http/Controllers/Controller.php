<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function getMessage(){
        $message = '';
        // $error = false;
        if (session()->has('message')){
          $message = session()->get('message');
        //   $error = session()->get('error');
        }
        return $message;
    }

    function getError(){
        // $message = '';
        $error = false;
        if (session()->has('message')){
        //   $message = session()->get('message');
          $error = session()->get('error');
        }
        return $error;
    }

    function respondWithSuccess($message){
        return redirect()->back()->with([
            'message' => $message,
            'error' => false
        ]);
    }

    function respondWithError($message){
        return redirect()->back()->with([
            'message' => $message,
            'error' => true
        ]);
    }

}
