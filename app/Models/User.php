<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */



    ////new


    protected $fillable = [
        'name',
        'email',
        'password',

        'first_name',
        'middle_name',
        'last_name',
        'highest_qualification',
        'date_of_birth',
        'phone',
        'program_type_id',
        'address',
        'province_id',
        'province_town_city_id',
        'postal_code',
        'account_status',
        'incorporation_name',
        'incorporation_address',
        'notes',
        'resume',
        'id_card',
        'void_check_doc',
        'hst_no',
        'assign_admin',
        'assign_director_id',
        'account_type',
        'dob',
        'gender',

        'avatar',
        'skills',

        'permission_profile_status',
        'permission_is_super_admin',
        'permission_is_mgt_admin',
        'permission_is_accountant',

        'profession',

        'is_docusigner'
    ];



    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'created_ago',
        'is_docusigner_validated',
        'permission_profile_status_validated',
        'permission_is_super_admin_validated',
        'permission_is_mgt_admin_validated',
        'permission_is_accountant_validated'
    ];

    // 'permission_profile_status',
    // 'permission_is_super_admin',
    // 'permission_is_mgt_admin',
    // 'permission_is_accountant',

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    const ACCOUNT_TYPE_CANDIDATE = 'candidate';
    const ACCOUNT_TYPE_ADMIN = 'admin';
    const ACCOUNT_TYPE_STAFF = 'staff';

    const ACCOUNT_STATUS_PENDING = 'pending'; //account_status
    const ACCOUNT_STATUS_INVITED = 'invited'; //account_status
    const ACCOUNT_STATUS_ACTIVE = 'active'; //account_status
    const ACCOUNT_STATUS_INACTIVE = 'inactive';


    function getCreatedAgoAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    function scopeCandidates($query)
    {
        return $query->where('account_type', self::ACCOUNT_TYPE_CANDIDATE);
    }

    function scopeStatus($query, $status)
    {
        return $query->where('account_status', $status);
    }

    function getIsDocusignerValidatedAttribute()
    {
        if (empty($this->is_docusigner)) {
            return "no";
        }
        return $this->is_docusigner;
    }

    function getPermissionProfileStatusValidatedAttribute()
    {
        if (empty($this->permission_profile_status)) {
            return "0";
        }
        return $this->permission_profile_status . "";
    }

    function getPermissionIsSuperAdminValidatedAttribute()
    {
        if (empty($this->permission_is_super_admin)) {
            return "0";
        }
        return $this->permission_is_super_admin . "";
    }
    function getPermissionIsMgtAdminValidatedAttribute()
    {
        if (empty($this->permission_is_mgt_admin)) {
            return "0";
        }
        return $this->permission_is_mgt_admin . "";
    }
    function getPermissionIsAccountantValidatedAttribute()
    {
        if (empty($this->permission_is_accountant)) {
            return "0";
        }
        return $this->permission_is_accountant . "";
    }

    // function getskillsAttribute(){
    //    $val = $this->skills;
    //    if (empty($val)){
    //      return 'Researcher';
    //    }
    //    return $val;
    // }

}
