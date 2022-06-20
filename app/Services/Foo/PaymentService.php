<?php
namespace App\Services\Foo;
use App\Repositories\Foo\PaymentRepository;
//use Illuminate\Support\Facades\Auth;

class PaymentService
{
    private $paymentRepository = null;

    function __construct(PaymentRepository $paymentRepository){
        $this->paymentRepository = $paymentRepository;
    }


    function fetch($filters=[]){
        $query = $this->paymentRepository->query();
        return $query;
    }

    function fetchById($id){
        $record = $this->paymentRepository->fetchById($id);
        return $record;
    }


    function update($id,$data){
        $record = $this->paymentRepository->update($id,$data);
        return $record;
    }

    function create($data){
        $record = $this->paymentRepository->create($data);
        return $record;
    }

    function remove($id){
        $record = $this->paymentRepository->remove($id);
        return $record;
    }


}
