<script context="module">
    import Layout from "../../Auth/Dashboard/Layout.svelte";
    import { useForm } from "@inertiajs/inertia-svelte";

    import Page from "../../../../components/Page.svelte";
    import Modal from "../../../../components/Modal.svelte";

    export const layout = Layout;
</script>

<script>
    export let list;
    export let users;
    export let statuses;
    // export let csrf;

    let mode = "create";

    const resource = "/employment-contract/";

    let closeModal = null;

    // 'owner_id',
    //     'document',
    //     'document_title',
    //     'last_edited_by',
    //     'uploaded_by'

    let form = useForm({
        owner_id:"",
        document: "",
        document_title: "",
        status:"",
        id: "0",
    });

    // alert(message);

    function selectRow(data) {
        $form.document = data.document;
        $form.document_title = data.document_title;
        $form.id = data.id;
        $form.status = data.status;
        $form.owner_id = data.owner_id;
        mode = "update";
    }

    function removeRow(data) {
        if (confirm("Do you want to confirm this action?")) {
            $form.delete(resource + data.id);
        }
    }

    function clearForm() {
        $form.reset();
        mode = "create";
    }

    function callStore() {
        if (mode == "create") {
            $form.post(resource);
        } else {
            $form.put(resource + $form.id);
        }
    }

    function onResetMessage() {
        // toastr.success(message);
        message = "";
        $form.clearErrors();
    }

    function onCloseModal() {
        // alert('called');
        console.log(closeModal);
        closeModal.click();
    }
</script>


<Page>
    <span slot="title">Employement Contract</span>
    <button
        slot="createButton"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#modal-progtype"
        on:click|preventDefault={clearForm}
    >
        <i class="fa fa-upload" /> Upload Contract Document
    </button>

    <div class="col-sm-12" slot="content">
        <table
            id="example1"
            class="table table-data table-striped table-hover dataTable no-footer"
            role="grid"
            aria-describedby="example1_info"
            style="font-size: 12px;"
        >
            <thead>
                <!-- svelte-ignore a11y-no-redundant-roles -->
                <tr role="row">
                    <th>Doc-ID</th>
                    <th>Title</th>
                    <th>Owner's Profile</th>
                    <th>Uploaded By</th>
                    <th>Uploaded</th>
                    <th>Edited By</th>
                    <th>Edited</th>
                    <th>Status</th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>

                <!-- 'owner_id',
                'document',
                'document_title',
                'last_edited_by',
                'uploaded_by',
                'status' -->

                {#each list as item}
                    <tr class="odd">
                        <td>
                            DOC-{item.id}
                        </td>
                        <td>
                            {item.document_title}
                        </td>
                        <td>
                            {item.owner.name}
                        </td>
                        <td>
                            {item.uploaded_by.name}
                        </td>
                        <td>
                            {item.created_at_formatted}
                        </td>
                        <td>
                            {item.last_edited_by.name}
                        </td>
                        <td>
                            {item.updated_at_formatted}
                        </td>
                        <td>
                            {item.status}
                        </td>


                        <td>
                            <a
                                data-toggle="modal"
                                data-target="#modal-progtype"
                                href={null}
                                on:click|preventDefault={() =>
                                    selectRow(item)}
                            >
                                <i class="fa fa-edit text-green" />
                            </a>
                            &nbsp;&nbsp;
                            <a
                                href={null}
                                on:click|preventDefault={() =>
                                    removeRow(item)}
                            >
                                <i class="fa fa-trash text-red" />
                            </a>
                            &nbsp;&nbsp;
                            <a
                                href={'/uploads/' + item.document}
                            >
                                <i class="fa fa-download text-green" />
                            </a>

                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <Modal
        id="modal-progtype"
        on:submit={callStore}
    >
        <span slot="title">Upload Contract Document</span>

        <div class="col-md-12" slot="content">
            <div class="col-md-12">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="control-label"
                    >Owner's Profile<b style="color:red">*</b></label
                >
                <select class="form-control" bind:value={$form.owner_id}>
                    <option value="">Select User</option>
                    {#each users as user}
                       <option value={user.id}>{user.name}</option>
                    {/each}
                </select>
            </div>

            <div class="col-md-12">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="control-label"
                    >Document Title<b style="color:red">*</b></label
                >
                <input
                    type="text"
                    class="form-control"
                    name="proTitle"
                    placeholder=""
                    required=""
                    bind:value={$form.document_title}
                />
            </div>


            <div class="col-md-12">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="control-label"
                    >Document <b style="color:red">*</b></label
                >
                <input
                type="file"
                class="form-control"
                name="proTitle"
                placeholder=""
                required=""
                on:input={(e)=>$form.document = e.target.files[0]}
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
                    <option value="">Select</option>
                    {#each statuses as status}
                    <option value={status}>{status}</option>
                    {/each}
                </select>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" slot="storeButton">
            <i class="fa fa-upload" /> &nbsp; {mode == "create"
                ? "Upload Contract"
                : "Update Contract"}
        </button>
    </Modal>
</Page>
