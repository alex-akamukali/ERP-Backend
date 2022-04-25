<script context="module">
    import Layout from "../Dashboard/Layout.svelte";
    import { page, useForm } from "@inertiajs/inertia-svelte";
    import Pagination from "../../components/Pagination.svelte";
    export const layout = Layout;
</script>

<script>
    export let programTypes;
    export let store;
    export let update;
    export let destroy;
    export let message;
    export let error;
    // export let csrf;

    let mode = "create";

    let closeModal = null;

    let form = useForm({
        description: "",
        title: "",
        status: "active",
        id: "0",
    });

    function selectRow(data) {
        $form.description = data.description;
        $form.title = data.title;
        $form.status = data.status;
        $form.id = data.id;
        mode = "update";
    }

    function removeRow(data){
        if (confirm("Do you want to confirm this action?")){
            $form.delete(destroy + '/' + data.id);
        }
    }

    function clearForm() {
        $form.reset();
        mode = "create";
    }

    function callStore() {
        if (mode == "create") {
            $form.post(store);
        } else {
            $form.put(update + '/' + $form.id);
        }
    }

    $: if (message != "" && !error) {
        closeModal.click();
        toastr.success(message);
        message = "";
    }
</script>

<section class="content-header">
    <h1>
        Program Type
        <!-- <small>Version 1.0</small> -->
    </h1>
    <ol class="breadcrumb">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a href="#"><i class="fa fa-dashboard" /> Home</a></li>
        <li class="active">Program Type</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <!-- svelte-ignore a11y-missing-content -->
                    <h3 class="box-title" />

                    <div class="box-tools pull-right">
                        <button
                            class="btn btn-primary btn-sm"
                            data-toggle="modal"
                            data-target="#modal-progtype"
                            on:click|preventDefault={clearForm}
                        >
                            <i class="fa fa-plus" /> Program Type
                        </button>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="table-responsive">
                        <div
                            id="example1_wrapper"
                            class="dataTables_wrapper form-inline dt-bootstrap no-footer"
                        >
                            <div class="row" />
                            <div class="row">
                                <div class="col-sm-12">
                                    <table
                                        id="example1"
                                        class="table table-data table-striped table-hover dataTable no-footer"
                                        role="grid"
                                        aria-describedby="example1_info"
                                    >
                                        <thead>
                                            <!-- svelte-ignore a11y-no-redundant-roles -->
                                            <tr role="row"
                                                ><th
                                                    >Title</th
                                                ><th
                                                    >Description</th
                                                ><th
                                                    >Status</th
                                                >
                                                <th
                                                >
                                                    Actions
                                                </th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                            {#each programTypes as programType}
                                                <tr class="odd">
                                                    <td>
                                                        {programType.title}
                                                    </td>
                                                    <td>
                                                        {programType.description}
                                                    </td>
                                                    <td>
                                                        {programType.status}
                                                    </td>
                                                    <td>
                                                        <a
                                                            data-toggle="modal"
                                                            data-target="#modal-progtype"
                                                            href={null}
                                                            on:click|preventDefault={() =>
                                                                selectRow(
                                                                    programType
                                                                )}
                                                        >
                                                            <i
                                                                class="fa fa-edit text-green"
                                                            />
                                                        </a>
                                                        &nbsp;&nbsp;
                                                        <a
                                                        href={null}
                                                        on:click|preventDefault={() =>
                                                            removeRow(
                                                                programType
                                                            )}
                                                    >
                                                        <i
                                                            class="fa fa-trash text-red"
                                                        />
                                                    </a>

                                                    </td>
                                                </tr>
                                            {/each}
                                        </tbody>
                                    </table>
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

    <div class="modal fade" id="modal-progtype">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        bind:this={closeModal}
                    >
                        <span aria-hidden="true">×</span></button
                    >
                    <h4 class="modal-title">Program Type</h4>
                </div>
                <form
                    on:submit|preventDefault={callStore}
                    class="form-horizontal"
                    method="post"
                >
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-md-12">
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label class="control-label"
                                        >Program Title <b style="color:red">*</b
                                        ></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="proTitle"
                                        placeholder=""
                                        required=""
                                        bind:value={$form.title}
                                    />
                                </div>

                                <div class="col-md-12">
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label class="control-label"
                                        >Program Description <b
                                            style="color:red">*</b
                                        ></label
                                    >
                                    <textarea
                                        class="form-control"
                                        name="proDescription"
                                        required=""
                                        bind:value={$form.description}
                                    />
                                </div>
                                <div class="col-md-12">
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label class="control-label"
                                        >Status<b style="color:red">*</b></label
                                    >
                                    <select
                                        class="form-control"
                                        name="proDescription"
                                        required=""
                                        bind:value={$form.status}
                                    >
                                        <option>Select</option>
                                        <option value="active">Active</option>
                                        <option value="inactive"
                                            >Inactive</option
                                        >
                                    </select>
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
                            <i class="fa fa-save" /> &nbsp; {mode == 'create'? "Add Program Type":"Update Program Type"}
                        </button>
                    </div>
                </form>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

    <!-- /.modal -->
</section>
