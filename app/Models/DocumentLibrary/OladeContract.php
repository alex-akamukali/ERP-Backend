<?php

namespace App\Models\DocumentLibrary;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OladeContract extends Model
{
    use HasFactory;

    protected $fillable = [
        'owner_id',
        'document',
        'document_title',
        'last_edited_by',
        'uploaded_by',
        'status'
    ];

    protected $with  = [
        'uploadedBy',
        'lastEditedBy',
        'owner'
    ];

    protected $appends = [
        'created_at_formatted',
        'updated_at_formatted'
    ];



    const STATUSES = ['signed','not-signed'];

    function owner(){
        return $this->belongsTo(User::class,'owner_id');
    }

    function uploadedBy(){
      return $this->belongsTo(User::class,'uploaded_by');
    }

    function lastEditedBy(){
        return $this->belongsTo(User::class,'last_edited_by');
    }

    function getCreatedAtFormattedAttribute(){
        //getCreatedAtFormattedAttribute
        return $this->created_at->diffForHumans();
    }


    function getUpdatedAtFormattedAttribute(){
        //getCreatedAtFormattedAttribute
        return $this->updated_at->diffForHumans();
    }

}
