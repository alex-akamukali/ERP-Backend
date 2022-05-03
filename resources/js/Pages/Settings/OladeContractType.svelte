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
    export let statuses;
    export let program_types;
    export let knowledge_area_types;
    export let list;
    // export let store;
    // export let update;
    // export let destroy;
    export let message;
    export let error;
    // export let csrf;

    let mode = "create";

    let closeModal = null;


    // 'program_type_id'=>'required',
    //         'knowledge_area_type'=>'required',
    //         'name'=>'required',
    //         'no_of_questions'=>'required',
    //         'status'=>'required'


    let form = useForm({
        program_type_id: "",
        knowledge_area_type: "",
        name:"",
        no_of_questions:10,
        status: "active",
        id: "0",
    });

    let filter = useForm({
        knowledge_area_type:''
    });

    function selectRow(data) {
        $form.program_type_id = data.program_type_id;
        $form.knowledge_area_type = data.knowledge_area_type;
        $form.name = data.name;
        $form.no_of_questions = data.no_of_questions;
        $form.status = data.status;
        $form.id = data.id;
        mode = "update";
    }

    function removeRow(data) {
        if (confirm("Do you want to confirm this action?")) {
            $form.delete( "/knowledge-area/" + data.id);
        }
    }

    function clearForm() {
        $form.reset();
        mode = "create";
    }

    function callStore() {
        if (mode == "create") {
            $form.post('/knowledge-area');
        } else {
            $form.put( "/knowledge-area/" + $form.id);
        }
    }

    function doFilter(){
        $filter.get('/knowledge-area');
    }



    function onResetMessage(){
        $form.clearErrors();
        message = '';
    }

    function onCloseModal(){
        closeModal.click();
    }

</script>

<MessageNotification {onCloseModal} {onResetMessage} {message} hasErrors={$form.hasErrors}  errors={$form.errors} {error} />

<Page>
  <span slot="title">Olade Contract Types</span>

  <button
  slot="createButton"
  class="btn btn-primary btn-sm"
  data-toggle="modal"
  data-target="#modal-progtype"
  on:click|preventDefault={clearForm}>
  <i class="fa fa-plus" />Add Knowledge Area
</button>



<div slot="content">
    <div class="col-sm-12">
        <table
            id="example1"
            class="table table-data table-striped table-hover dataTable no-footer"
            role="grid"
            aria-describedby="example1_info"
        >
            <thead>
                <!-- svelte-ignore a11y-no-redundant-roles -->
                <tr role="row">
                    <th>Title</th>
                    <th>Knowledge Area Type</th>
                    <th>Name</th>
                    <th>No Of Question</th>
                    <th>Status</th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {#each list as item}
                    <tr class="odd">
                        <td>
                            {item.program_type.title}
                        </td>
                        <td>
                            {item.knowledge_area_type}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.no_of_questions}
                        </td>
                        <td>{item.status}</td>
                        <td>
                            <a
                                data-toggle="modal"
                                data-target="#modal-progtype"
                                href={null}
                                on:click|preventDefault={() =>
                                    selectRow(
                                        item
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
                                        item
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
<!-- end -->




</Page>
