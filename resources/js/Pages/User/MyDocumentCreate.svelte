<script context="module">
    import {createEventDispatcher} from "svelte";
    import { page, useForm } from "@inertiajs/inertia-svelte";
    import Modal from "../../components/Modal.svelte";
    import MessageNotification from "../Components/MessageNotification.svelte";
</script>

<script>
    export let message;
    export let error;
    export let types;
    export let data;

    let mode = "create";
    let dispatch = createEventDispatcher();

    const resource = "/province/";

    let closeModal = null;

    let form = useForm({
        _method: "POST",
        title: "",
        path: null,
        type: "",
        id:0
    });

    $: {
        if (data) {
            $form.title = data.title;
            $form.path = data.path;
            $form.type = data.type;
            mode = 'update';
        }else{
            mode = 'create'
        }
    }

    function selectRow(data) {
        $form.name = data.name;
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

    function updateAvatar() {
        $form.post("/upload-avatar/" + auth.id);
    }

    function callStore() {
        if (mode == "create") {
            $form.post(resource);
        } else {
            $form.put(resource + $form.id);
        }
    }

    function onResetMessage() {
        dispatch("ResetMessage");
        // toastr.success(message);
        message = "";
        // $form.clearErrors();
        // avatarImage.src = null;
    }

    function onCloseModal() {
        // alert('called');
        // console.log(closeModal);
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

<Modal
    id="modal-my-document"
    on:submit={callStore}
    on:setRef={(ref) => (closeModal = ref.detail)}
>
    <span slot="title">My Documents</span>

    <div class="col-md-12" slot="content">
        <div class="col-md-12">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="control-label">
                Title<b style="color:red">*</b>
            </label>
            <input
                type="text"
                class="form-control"
                name="proTitle"
                placeholder=""
                required=""
                bind:value={$form.title} />
        </div>

        <!-- types -->
        <div class="col-md-12">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="control-label">Types <b style="color:red">*</b></label
            >
            <select
                type="text"
                class="form-control"
                name="proTitle"
                placeholder=""
                required=""
                bind:value={$form.types}
            >
                <option value="">--Select--</option>
                {#each types as type}
                    <option value={type}>{type}</option>
                {/each}
            </select>
        </div>

        <div class="col-md-12">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="control-label"
                >Document<b style="color:red">*</b></label
            >
            <input
                type="file"
                class="form-control"
                name="proTitle"
                placeholder=""
                required=""
                on:input={(e) => ($form.path = e.target.files[0])}
            />
        </div>
    </div>

    <button type="submit" class="btn btn-primary" slot="storeButton">
        <i class="fa fa-save" /> &nbsp; {mode == "create"
            ? "Upload Document"
            : "Update Document"}
    </button>
</Modal>
