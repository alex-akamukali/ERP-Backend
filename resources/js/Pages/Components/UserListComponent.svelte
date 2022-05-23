<script context="module">
    // import Layout from "../Dashboard/Layout.svelte";
    // import { page, useForm } from "@inertiajs/inertia-svelte";
    // import Pagination from "../../components/Pagination.svelte";
    import {createEventDispatcher} from "svelte";
    // import Modal from "../../components/Modal.svelte";
    import {Layout,Modal,useForm} from "nodejs-svelte-crud-helper";
    import Pagination from "nodejs-svelte-crud-helper/Pagination.svelte";

    import UserManagementRow from "nodejs-svelte-crud-helper/UserManagementRow.svelte";
    import UserManagementHead from "nodejs-svelte-crud-helper/UserManagementHead.svelte";

    // export const layout = Layout;
</script>

<script>
    export let users; // = $page.props.users;
    let invite_candidate_route = '/invite-candidate/';
    let reinvite_candidate_route = '/invite-candidate/';
    // export let message;
    // export let error;
    export let label;

    let dispatch = createEventDispatcher();

    let inviteModal = null;
    // console.log(users);
    let inviteCandidateForm = useForm({
        first_name: "",
        last_name: "",
        email: "",
        account_type:""
    });

    let reInviteCandidateForm = useForm({
        email: ""
    });

    // inviteModal


    function sendInvitation(){
       $inviteCandidateForm.post(invite_candidate_route);
    }

    function sendReInvitation(user){
    //    $reInviteCandidateForm.email = user.email;
       $reInviteCandidateForm.put(reinvite_candidate_route + user.id);
    }



</script>

<section class="content-header">
    <h1>
        {label}
        <!-- <small>Version 1.0</small> -->
    </h1>
    <ol class="breadcrumb">
        <li><a href={null}><i class="fa fa-dashboard" /> Home</a></li>
        <li class="active">{label}</li>
        <!-- <button on:click={setCalend}>
            Schedule
        </button> -->
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">{label}</h3>

                    <div class="box-tools pull-right">
                        <button
                            class="btn btn-info"
                            data-toggle="modal"
                            data-target="#modal-ivuser"
                        >
                            Invite User
                        </button>
                        <!-- <button class="btn btn-success" data-toggle="modal" data-target="#modal-ivadmin"> Invite Admin </button> -->
                        <!-- <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
               </button>
               <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button> -->
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="table-responsive">
                        <div>
                            <div class="row">
                                <div class="col-sm-6" />
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table  table-striped">
                                        <thead>
                                            <UserManagementHead template="management" />
                                        </thead>
                                        <tbody>
                                            {#each users.data as user}
                                              <UserManagementRow template="management" data={user} on:sendReInvitation={(e)=>sendReInvitation(e.detail)} />
                                            {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10">
                                    <Pagination pages={users.links} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix" />
                <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </div>
    </div>

    <Modal
    id="modal-ivuser"
    on:submit={sendInvitation}
>
    <span slot="title">Invite User</span>

    <div class="col-md-12" slot="content">


        <div class="col-md-6">
            <label for="inputName" class="control-label"
                >First Name <b style="color:red">*</b
                ></label
            >
            <input
                type="text"
                class="form-control"
                name="FirstName"
                id="inputName"
                placeholder="First Name"
                required=""
                bind:value={$inviteCandidateForm.first_name}
            />
            <!-- {#if $inviteCandidateForm.errors.first_name}
                <div style="color: red;">
                    {$inviteCandidateForm.errors.first_name}
                </div>
            {/if} -->
        </div>

        <div class="col-md-6">
            <label for="inputName" class="control-label"
                >Last Name <b style="color:red">*</b
                ></label
            >
            <input
                type="text"
                class="form-control"
                name="LastName"
                id="inputName"
                placeholder="Last Name"
                required=""
                bind:value={$inviteCandidateForm.last_name}
            />
            <!-- {#if $inviteCandidateForm.errors.last_name}
                <div style="color: red;">
                    {$inviteCandidateForm.errors.last_name}
                </div>
            {/if} -->
        </div>
        <div class="col-md-6">
            <label for="inputName" class="control-label"
                >Email <b style="color:red">*</b></label
            >
            <input
                type="email"
                class="form-control"
                name="Email"
                id="inputName"
                placeholder="Candidate's Email"
                required=""
                bind:value={$inviteCandidateForm.email}
            />
            <!-- {#if $inviteCandidateForm.errors.email}
                <div style="color: red;">
                    {$inviteCandidateForm.errors.email}
                </div>
            {/if} -->
        </div>

        <div class="col-md-6">
            <label for="inputName" class="control-label"
                >Account Type <b style="color:red">*</b></label
            >
            <select
                type="email"
                class="form-control"
                name="Email"
                id="inputName"
                placeholder="Candidate's Email"
                required=""
                bind:value={$inviteCandidateForm.account_type}
            >
            <option value="">Select</option>
            <option value="admin">Admin</option>
            <option value="candidate">Candidate</option>
            <option value="staff">Staff</option>

        </select>
            <!-- {#if $inviteCandidateForm.errors.account_type}
                <div style="color: red;">
                    {$inviteCandidateForm.errors.account_type}
                </div>
            {/if} -->
        </div>


    </div>



    <button type="submit" class="btn btn-primary" slot="storeButton">
        <i class="fa fa-save" /> &nbsp; Send Invite
    </button>
</Modal>

    <!-- /.modal -->
</section>
