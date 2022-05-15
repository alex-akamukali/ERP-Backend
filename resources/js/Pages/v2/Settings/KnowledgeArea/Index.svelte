<script context="module">

import Layout from "../../Auth/Dashboard/Layout.svelte";
    import { useForm } from "@inertiajs/inertia-svelte";

    import Page from "../../../../components/Page.svelte";
    import Modal from "../../../../components/Modal.svelte";

    export const layout = Layout;
</script>

<script>
    export let statuses;
    export let program_types;
    export let knowledge_area_types;
    export let list;

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




</script>



<Page>
  <span slot="title">Knowledge Area</span>

  <button
  slot="createButton"
  class="btn btn-primary btn-sm"
  data-toggle="modal"
  data-target="#modal-progtype"
  on:click|preventDefault={clearForm}>
  <i class="fa fa-plus" />Add Knowledge Area
</button>



<div slot="content">
    <div class="col-md-12">
        <select bind:value={$filter.knowledge_area_type} on:change={doFilter}>
            <option value="">All Types</option>
            {#each knowledge_area_types as knowledge_area_type}
            <option value={knowledge_area_type}>{knowledge_area_type}</option>
          {/each}
        </select>
    </div>
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
                    ><th>Program Type</th><th
                        >Knowledge Area Type</th
                    >
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




<Modal id="modal-progtype" on:submit={callStore} on:setRef={(e)=>closeModal=e.detail}>

    <span slot="title">Knowledge Area</span>


    <div class="col-md-12" slot="content">
        <div class="col-md-12">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="control-label"
                >Program Type <b style="color:red">*</b
                ></label
            >
            <select
                type="text"
                class="form-control"
                name="proTitle"
                placeholder=""
                required=""
                bind:value={$form.program_type_id}
            >
           <option value="">Select</option>
           {#each program_types as program_type}
             <option value={program_type.id}>{program_type.title}</option>
           {/each}
        </select>
        </div>

        <div class="col-md-12">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="control-label"
                >Knowledge Area Type<b style="color:red">*</b
                ></label
            >
            <select
                type="text"
                class="form-control"
                name="proTitle"
                placeholder=""
                required=""
                bind:value={$form.knowledge_area_type}
            >
           <option value="">Select</option>
           {#each knowledge_area_types as knowledge_area_type}
             <option value={knowledge_area_type}>{knowledge_area_type}</option>
           {/each}
        </select>
        </div>



        <div class="col-md-12">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="control-label"
                >Name<b
                    style="color:red">*</b
                ></label
            >
            <input
                class="form-control"
                name="proDescription"
                required=""
                bind:value={$form.name}
            />
        </div>


        <div class="col-md-12">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="control-label"
                >No Of Questions<b
                    style="color:red">*</b
                ></label
            >
            <input
                class="form-control"
                name="proDescription"
                required=""
                bind:value={$form.no_of_questions}
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
                bind:value={$form.status}>
                <option value="">Select</option>
                {#each statuses as status}
                <option value={status}>{status}</option>
                {/each}

            </select>
            {#if $form.errors.status}
                <div style="color: red;">
                    {$form.errors.status}
                </div>
            {/if}
        </div>
    </div>
    <!-- end -->

    <button slot="storeButton" type="submit" class="btn btn-primary">
        <i class="fa fa-save" /> &nbsp; {mode == "create"
            ? "Add Knowledge Area"
            : "Update Knowledge Area"}
    </button>




</Modal>


</Page>
