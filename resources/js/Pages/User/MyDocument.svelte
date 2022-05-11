<script context="module">
import Modal from "../../components/Modal.svelte";
import { page, useForm } from "@inertiajs/inertia-svelte";
import MessageNotification from "../Components/MessageNotification.svelte";

</script>

<script>
export let list;

export let message;

export let error;

export let types;

export let user_id;

let mode = "create";



const resource = "/my-document/";

let closeModal = null;

// alert(id);


let form = useForm({
    title: '',
    path: null,
    type:'',
    id:0,
    user_id
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
    // console.log(closeModal);
    closeModal.click();
}

function onFilterChange() {
    $form.get(resource);
}

$: console.log($form.message);

//export let name;

</script>


<MessageNotification
    {message}
    {error}
    errors={$form.errors}
    {onResetMessage}
    hasErrors={$form.hasErrors}
    {onCloseModal}
/>


<div class="row">
    <div class="col-md-12"> <button on:click|preventDefault={clearForm} data-toggle="modal" data-target="#modal-my-document" class="btn btn-success btn-sm pull-right"> <i class="fa fa-plus"></i> Upload Document  </button>  </div>
  </div>
  <div class="table-responsive">
     <table class="table table-stripe">
       <thead>
         <tr>
           <th>Doc ID</th>
           <th>Doc Type</th>
           <th>Doc Title</th>
           <th> &nbsp; </th>
         </tr>
       </thead>
       <tbody>
         {#each list as item}
         <tr>
           <td> doc-{item.id}</td>
           <td> {item.type} </td>
           <td> {item.title}</td>
           <td>
             <a href={'/uploads/' + item.path} target="_blank">
               <i class="fa fa-edit text-blue"></i>
             </a>
               &nbsp; &nbsp;
             <!-- svelte-ignore a11y-invalid-attribute -->
             <a href="#">
               <i class="fa fa-edit text-blue"></i>
             </a>
           </td>
         </tr>
         {/each}
       </tbody>

     </table>
   </div>



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
                bind:value={$form.type}
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

