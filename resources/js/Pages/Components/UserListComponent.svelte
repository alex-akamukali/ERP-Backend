<script context="module">
    // import Layout from "../Dashboard/Layout.svelte";
    import { page, useForm } from "@inertiajs/inertia-svelte";
    import Pagination from "../../components/Pagination.svelte";
    // export const layout = Layout;
</script>

<script>
    export let users; // = $page.props.users;
    export let invite_candidate_route;
    export let reinvite_candidate_route;
    export let message;
    export let error;
    export let label;

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

    $: console.log(message,'message.');

    $: if (message != '' && !error){
        inviteModal.click();
        toastr.success(message);
        message = "";
        $inviteCandidateForm.reset();
    }

    $: if ($inviteCandidateForm.hasErrors){
        for (let i in $inviteCandidateForm.errors){
            toastr.error($inviteCandidateForm.errors[i]);
        }
        $inviteCandidateForm.clearErrors();
    }

    // $:  if ($inviteCandidateForm.first_name){
    //    $inviteCandidateForm.clearErrors('first_name');
    // }

    // $:  if ($inviteCandidateForm.last_name){
    //    $inviteCandidateForm.clearErrors('last_name');
    // }

    // $:  if ($inviteCandidateForm.email){
    //    $inviteCandidateForm.clearErrors('email');
    // }

    // $:  if ($inviteCandidateForm.account_type){
    //    $inviteCandidateForm.clearErrors('account_type');
    // }


    function sendInvitation(){
       $inviteCandidateForm.post(invite_candidate_route);
    }

    function sendReInvitation(user){
       $reInviteCandidateForm.email = user.email;
       $reInviteCandidateForm.put(reinvite_candidate_route + '/' + user.id);
    }


    function setCalend(){
      Calendly.initPopupWidget({url: 'https://calendly.com/easymagic1/30min'});
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
                                            <!-- svelte-ignore a11y-no-redundant-roles -->
                                            <tr role="row"
                                                ><th
                                                    class="sorting_asc"
                                                    tabindex="0"
                                                    aria-controls="DataTables_Table_0"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                    >Name</th
                                                ><th
                                                    class="sorting"
                                                    tabindex="0"
                                                    aria-controls="DataTables_Table_0"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label="Email: activate to sort column ascending"
                                                    >Email</th
                                                ><th
                                                    class="sorting"
                                                    tabindex="0"
                                                    aria-controls="DataTables_Table_0"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label="Program: activate to sort column ascending"
                                                    >Program</th
                                                ><th
                                                    class="sorting"
                                                    tabindex="0"
                                                    aria-controls="DataTables_Table_0"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label="Date: activate to sort column ascending"
                                                    >Created</th
                                                ><th
                                                    class="sorting"
                                                    tabindex="0"
                                                    aria-controls="DataTables_Table_0"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label="Status: activate to sort column ascending"
                                                    >Status</th
                                                ><th
                                                    class="sorting"
                                                    tabindex="0"
                                                    aria-controls="DataTables_Table_0"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label=" &amp;nbsp; : activate to sort column ascending"
                                                >
                                                    Account-Type
                                                </th><th
                                                    class="sorting"
                                                    tabindex="0"
                                                    aria-controls="DataTables_Table_0"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label=" &amp;nbsp; : activate to sort column ascending"
                                                >
                                                    Actions
                                                </th></tr
                                            >
                                        </thead>
                                        <tbody>
                                            <!-- svelte-ignore a11y-no-redundant-roles -->
                                            {#each users.data as user}
                                                <tr role="row" class="odd">
                                                    <td class="sorting_1">
                                                        {user.name}
                                                    </td>
                                                    <td>
                                                        {user.email}
                                                    </td>
                                                    <td />
                                                    <td> {user.created_ago}</td>

                                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                                    <td>
                                                        <label
                                                            class="text-success"
                                                            id="acctstc2aa1951a32f33b047954754f0ae"
                                                        >
                                                            {user.account_status}
                                                        </label></td
                                                    >
                                                    <td>
                                                        {user.account_type}
                                                    </td>
                                                    <td>
                                                        <div class="btn-group">
                                                            <!-- svelte-ignore a11y-label-has-associated-control -->
                                                            <label
                                                                class="dropdown-toggle"
                                                                data-toggle="dropdown"
                                                            >
                                                                ... <!-- <span class="caret"></span> -->
                                                                <span
                                                                    class="sr-only"
                                                                    >Toggle
                                                                    Dropdown</span
                                                                >
                                                            </label>
                                                            <ul
                                                                class="dropdown-menu"
                                                                role="menu"
                                                                style="z-index:9000"
                                                            >
                                                                <li>
                                                                    <a
                                                                        href="userProfileDashboard?scand=c2aa1951a32f33b047954754f0ae"
                                                                    >
                                                                        <i
                                                                            class="fa fa-file text-info"
                                                                        /> View Profile
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a
                                                                        href="null"
                                                                        usx="c2aa1951a32f33b047954754f0ae"
                                                                        on:click|preventDefault={()=>sendReInvitation(user)}

                                                                    >
                                                                        <i
                                                                            class="fa fa-refresh text-info"
                                                                        /> Re-invite</a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
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

    <div class="modal fade" id="modal-ivuser">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        bind:this={inviteModal}
                    >
                        <span aria-hidden="true">×</span></button
                    >
                    <h4 class="modal-title">Invite User</h4>
                </div>
                <form
                    class="form-horizontal"
                    on:submit|preventDefault={sendInvitation}
                    method="post"
                >
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
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
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-default pull-left"
                            data-dismiss="modal">Close</button
                        >
                        <button type="submit" disabled={$inviteCandidateForm.processing} class="btn btn-primary">
                            <i class="fa fa-envelope" /> Send Invite</button
                        >
                    </div>
                </form>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- /.modal -->
</section>
