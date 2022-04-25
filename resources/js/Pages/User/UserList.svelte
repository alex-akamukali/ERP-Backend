<script context="module">
    import Layout from "../Dashboard/Layout.svelte";
    import { page, useForm } from "@inertiajs/inertia-svelte";
    import Pagination from "../../components/Pagination.svelte";
    export const layout = Layout;
</script>

<script>
    export let users; // = $page.props.users;
    export let invite_candidate_route;
    console.log(users);
    let inviteCandidateForm = useForm({
        first_name: "",
        last_name: "",
        email: ""
    });


    function sendInvitation(){
       $inviteCandidateForm.post();
    }

</script>

<section class="content-header">
    <h1>
        Users
        <small>Version 1.0</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="./"><i class="fa fa-dashboard" /> Home</a></li>
        <li class="active">Users</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">All Users</h3>

                    <div class="box-tools pull-right">
                        <button
                            class="btn btn-info"
                            data-toggle="modal"
                            data-target="#modal-ivuser"
                        >
                            Invite Candidate
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
                                                    >Date</th
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
                                                    &nbsp;
                                                </th><th
                                                    class="sorting"
                                                    tabindex="0"
                                                    aria-controls="DataTables_Table_0"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label=" &amp;nbsp; : activate to sort column ascending"
                                                >
                                                    &nbsp;
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
                                                    <td> {user.created_at}</td>

                                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                                    <td>
                                                        <label
                                                            class="text-success"
                                                            id="acctstc2aa1951a32f33b047954754f0ae"
                                                        >
                                                            Active
                                                        </label></td
                                                    >
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
                                                                        onclick="reInvite(this)"
                                                                    >
                                                                        <i
                                                                            class="fa fa-refresh text-info"
                                                                        /> Re-invite</a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <b style="color:#FFF">
                                                            ________
                                                        </b>
                                                    </td>
                                                </tr>
                                            {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-7">
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
                    >
                        <span aria-hidden="true">×</span></button
                    >
                    <h4 class="modal-title">Invite Candidate</h4>
                </div>
                <form
                    class="form-horizontal"
                    action="../utility/inviteCandidate"
                    method="post"
                >
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-md-4">
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
                                    />
                                    <input
                                        type="hidden"
                                        value="U"
                                        name="UserType"
                                    />
                                </div>

                                <div class="col-md-4">
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
                                    />
                                </div>
                                <div class="col-md-4">
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
                                    />
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
                        <button type="submit" class="btn btn-primary">
                            <i class="fa fa-envelope" /> Send Invite</button
                        >
                    </div>
                </form>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <div class="modal fade" id="modal-ivadmin">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span></button
                    >
                    <h4 class="modal-title">Invite Admin</h4>
                </div>
                <form
                    class="form-horizontal"
                    action="../utility/inviteCandidate"
                    method="post"
                >
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-md-4">
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
                                    />
                                    <input
                                        type="hidden"
                                        value="A"
                                        name="UserType"
                                    />
                                </div>

                                <div class="col-md-4">
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
                                    />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputName" class="control-label"
                                        >Email <b style="color:red">*</b></label
                                    >
                                    <input
                                        type="email"
                                        class="form-control"
                                        name="Email"
                                        id="inputName"
                                        placeholder="Admin's Email"
                                        required=""
                                    />
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
                        <button type="submit" class="btn btn-primary">
                            <i class="fa fa-send" /> Send Invite</button
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
