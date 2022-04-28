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

    function inertiaRenderResource($view,$resource='',$__data__=[]){
        // 'store'=>route('settings-knowledge-area.store'),
        // 'update'=>route('settings-knowledge-area.update',''),
        // 'destroy'=>route('settings-knowledge-area.destroy','')
      $__data__['message'] = $this->getMessage();
      $__data__['error'] = $this->getError();
      if (!empty($resource)){
        $__data__['store'] = route($resource . '.store');
        $__data__['update'] = route($resource . '.update','');
        $__data__['destroy'] = route($resource . '.destroy','');
      }
      return inertia()->render($view,$__data__);
    }

}
