<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        // $this->reportable(function (Throwable $e) {
        //     //
        // });
        // dd(990);

        // $this->reportable(function(Exception $ex){
        //     // dd(9909);
        //     // return redirect()->back()->with([
        //     //     'message'=>'msg.....'
        //     // ]);
        //     // dd(9909);
        //     return response()->json([
        //         'message'=>$ex->getMessage(),
        //         'error'=>true
        //     ],422);
        // });
    }

    function render($request, Throwable $e)
    {
        if ($e instanceof MyException){
           return redirect()->back()->with([
               'message'=>$e->getMessage(),
               'error'=>true
           ]);
        }
        return parent::render($request,$e);
    }
}
