<script context="module">
    import CrudLayoutComponent from "./CrudLayoutComponent.svelte";
    import Layout from "../Dashboard/Layout.svelte";
    import { page, useForm } from "@inertiajs/inertia-svelte";
    import Pagination from "../../components/Pagination.svelte";
    // export const layout = Layout;
</script>

<script>
    export let list; // = $page.props.users;
    export let store;
    export let update;
    export let destroy;
    export let message;
    export let error;
    export let label;
    export let formData;

    let inviteModal = null;
    console.log(users);
    let inviteCandidateForm = useForm(formData);

    // inviteModal

    $: if (message != '' && !error){
        inviteModal.click();
        toastr.success(message);
        message = "";
        $inviteCandidateForm.reset();
    }

    $: if ($inviteCandidateForm.hasErrors){
        for (let i in $inviteCandidateForm.errors){
            toastr.error($inviteCandidateForm.errors[i]);
        }
        $inviteCandidateForm.clearErrors();
    }

    function doAction(){
      if ($inviteCandidateForm.id){
         updateAction($inviteCandidateForm.id);
      }else{
         storeAction();
      }
    }

    function doDestroy(id){
        $inviteCandidateForm.delete(destroy + '/' + id);
    }

    function storeAction(){
       $inviteCandidateForm.post(store);
    }

    function updateAction(id){
       $inviteCandidateForm.put(update + '/' + id);
    }

    function selectRow(item){
        for (let i in item){
            $inviteCandidateForm[i] = item[i];
        }
    }

    // function setCalend(){
    //   Calendly.initPopupWidget({url: 'https://calendly.com/easymagic1/30min'});
    // }

</script>

<section class="content-header">
    <h1>
        {label}
        <!-- <small>Version 1.0</small> -->
    </h1>
    <ol class="breadcrumb">
        <li><a href={null}><i class="fa fa-dashboard" /> Home</a></li>
        <li class="active">{label}</li>
        <!-- <button on:click={setCalend}>
            Schedule
        </button> -->
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">{label}</h3>

                    <div class="box-tools pull-right">
                        <button
                            class="btn btn-info"
                            data-toggle="modal"
                            data-target="#modal-ivuser"
                        >
                            <slot name="addActionText" />
                        </button>
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
                                              <slot name="tableHead" />
                                        </thead>
                                        <tbody>
                                            <!-- svelte-ignore a11y-no-redundant-roles -->
                                            {#each list.data as item}
                                              <slot name="tableRow" data={item}  doDestroy={doDestroy} {selectRow}  />
                                            {/each}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10">
                                    <Pagination pages={list.links} />
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
                        bind:this={inviteModal}
                    >
                        <span aria-hidden="true">×</span></button
                    >
                    <h4 class="modal-title">
                        <slot name="modalTitle" data={$inviteCandidateForm} />
                    </h4>
                </div>
                <form
                    class="form-horizontal"
                    on:submit|preventDefault={doAction}
                    method="post"
                >
                    <div class="modal-body">
                        <div class="row">
                            <slot name="modalBody" data={$inviteCandidateForm}  />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-default pull-left"
                            data-dismiss="modal">Close</button
                        >
                        <button type="submit" disabled={$inviteCandidateForm.processing} class="btn btn-primary">
                            <i class="fa fa-envelope" />
                             <slot name="modalButtonText" data={$inviteCandidateForm} />
                        </button
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
