<script context="module">
    import Layout from "../../Auth/Dashboard/Layout.svelte";
    import { useForm } from "@inertiajs/inertia-svelte";

    import Page from "../../../../components/Page.svelte";
    import Modal from "../../../../components/Modal.svelte";

    import Calendly from "../../../../components/Calendly.svelte";

    export const layout = Layout;
</script>

<script>
    export let list;

    let mode = "create";

    const resource = '/config/';

    let closeModal = null;

    let form = useForm({
        name: "",
        value: "",
        id: "0",
    });

    // alert(message);

    function selectRow(data) {
        $form.name = data.name;
        $form.value = data.value;
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
</script>


<Page>
    <span slot="title">#Config Options.</span>
    <button
        slot="createButton"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#modal-progtype"
        on:click|preventDefault={clearForm}
    >
        <i class="fa fa-plus" /> Add Config
    </button>

    <div class="col-sm-12" slot="content">
        <!-- <Calendly on:eventScheduled={(e)=>console.log(e.detail)} url="easymagic1/30min" /> -->
        <table
            id="example1"
            class="table table-data table-striped table-hover dataTable no-footer"
            role="grid"
            aria-describedby="example1_info"
        >
            <thead>
                <!-- svelte-ignore a11y-no-redundant-roles -->
                <tr role="row"
                    ><th>#Config Name</th><th>Value</th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {#each list as item}
                    <tr class="odd">
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.value}
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
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <Modal id="modal-progtype"  on:submit={callStore} on:setRef={(ref)=>closeModal=ref.detail}>
        <span slot="title">Config</span>

        <div class="col-md-12" slot="content">
            <div class="col-md-12">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="control-label"
                    >Config Name <b style="color:red">*</b></label
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
                    >Config Value <b style="color:red">*</b></label
                >
                <textarea
                    class="form-control"
                    name="proDescription"
                    required=""
                    bind:value={$form.value}
                />
            </div>
        </div>

        <button type="submit" class="btn btn-primary" slot="storeButton">
            <i class="fa fa-save" /> &nbsp; {mode == "create"
                ? "Add Config"
                : "Update Config"}
        </button>
    </Modal>
</Page>
