<script context="module">
    import Layout from "../Dashboard/Layout.svelte";
    import { page, useForm } from "@inertiajs/inertia-svelte";
    import Pagination from "../../components/Pagination.svelte";
    import Page from "../../components/Page.svelte";
    import Modal from "../../components/Modal.svelte";
    import MessageNotification from "../Components/MessageNotification.svelte";

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

    function removeRow(data) {
        if (confirm("Do you want to confirm this action?")) {
            $form.delete(destroy + "/" + data.id);
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
            $form.put(update + "/" + $form.id);
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

<MessageNotification
    {message}
    {error}
    errors={$form.errors}
    {onResetMessage}
    hasErrors={$form.hasErrors}
    {onCloseModal}
/>

<Page>
    <span slot="title">Program Type</span>
    <button
        slot="createButton"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#modal-progtype"
        on:click|preventDefault={clearForm}
    >
        <i class="fa fa-plus" /> Program Type
    </button>

    <div class="col-sm-12" slot="content">
        <table
            id="example1"
            class="table table-data table-striped table-hover dataTable no-footer"
            role="grid"
            aria-describedby="example1_info"
        >
            <thead>
                <!-- svelte-ignore a11y-no-redundant-roles -->
                <tr role="row"
                    ><th>Title</th><th>Description</th><th>Status</th>
                    <th> Actions </th>
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
                                    selectRow(programType)}
                            >
                                <i class="fa fa-edit text-green" />
                            </a>
                            &nbsp;&nbsp;
                            <a
                                href={null}
                                on:click|preventDefault={() =>
                                    removeRow(programType)}
                            >
                                <i class="fa fa-trash text-red" />
                            </a>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <Modal id="modal-progtype"  on:submit={callStore} on:setRef={(ref)=>closeModal=ref.detail}>
        <span slot="title">Program Type</span>

        <div class="col-md-12" slot="content">
            <div class="col-md-12">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="control-label"
                    >Program Title <b style="color:red">*</b></label
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
                    >Program Description <b style="color:red">*</b></label
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
                    <option value="">Select</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" slot="storeButton">
            <i class="fa fa-save" /> &nbsp; {mode == "create"
                ? "Add Program Type"
                : "Update Program Type"}
        </button>
    </Modal>
</Page>
