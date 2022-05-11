<script context="module">
    import Layout from "../Dashboard/Layout.svelte";
    import { page, useForm, inertia } from "@inertiajs/inertia-svelte";
    import Pagination from "../../components/Pagination.svelte";
    import Page from "../../components/Page.svelte";
    import Modal from "../../components/Modal.svelte";
    import MessageNotification from "../Components/MessageNotification.svelte";

    import {currentRow} from "../../Stores/GlobalStore";

    export const layout = Layout;
</script>

<script>
    export let list;
    export let message;

    export let error;


    let mode = "create";

    $currentRow = 23;

    console.log($currentRow);



    const resource = "/vendor-company/";

    let closeModal = null;

    // alert(id);


    let form = useForm({
        description: '',
        name: "",
        id:0
    });



    function selectRow(data) {
        $form.name = data.name;
        $form.description = data.description;
        $form.id = data.id;
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

    function onFilterChange() {
        $form.get(resource);
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
    <span slot="title">Vendors</span>
    <button
        slot="createButton"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#modal-progtype"
        on:click|preventDefault={clearForm}
    >
        <i class="fa fa-plus" /> Add Vendor
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
                <tr role="row"><th>name</th> </tr>
            </thead>
            <tbody>
                {#each list as item}
                    <tr class="odd">
                        <td>
                            {item.name}
                        </td>
                        <td>
                            <a
                                data-toggle="modal"
                                data-target="#modal-progtype"
                                href={null}
                                on:click|preventDefault={() => selectRow(item)}
                            >
                                <i class="fa fa-edit text-green" />
                            </a>
                            &nbsp;&nbsp;
                            <a
                                href={"#"}
                                on:click|preventDefault={() => removeRow(item)}
                            >
                                <i class="fa fa-trash text-red" />
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
        on:setRef={(ref) => (closeModal = ref.detail)}
    >
        <span slot="title">Vendor</span>

        <div class="col-md-12" slot="content">

            <div class="col-md-12">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="control-label"
                    >Name <b style="color:red">*</b></label
                >
                <input
                    type="text"
                    class="form-control"
                    name="proTitle"
                    placeholder=""
                    required=""
                    bind:value={$form.name}
                />
            </div>

            <div class="col-md-12">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="control-label"
                    >Description <b style="color:red">*</b></label
                >
                <textarea
                    type="text"
                    class="form-control"
                    name="proTitle"
                    placeholder=""
                    required=""
                    bind:value={$form.description}
                ></textarea>
            </div>

        </div>

        <button type="submit" class="btn btn-primary" slot="storeButton">
            <i class="fa fa-save" /> &nbsp; {mode == "create"
                ? "Add Vendor"
                : "Update Vendor"}
        </button>
    </Modal>
</Page>
