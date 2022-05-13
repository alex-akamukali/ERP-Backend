<script context="module">
   import {createEventDispatcher,onMount} from "svelte";
   import {useCloseModalOnSuccess} from "../Helpers/closeModalOnSuccess";
</script>
<script>
    export let id;
    // let closeModal = null;
    let dispatch = createEventDispatcher();
    let ref;
    let getRef;

    onMount(()=>{
        if (getRef)getRef(ref);
        // console.log(ref,'ref');
        dispatch("setRef",ref);
    });




</script>
<div class="modal fade" use:useCloseModalOnSuccess {id}>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    bind:this={ref}
                >
                    <span aria-hidden="true">×</span></button
                >
                <h4 class="modal-title">
                    <slot name="title" />
                </h4>
            </div>
            <form
                on:submit={(e)=>dispatch("submit",e)}
                class="form-horizontal"
                method="post"
            >
                <div class="modal-body">
                    <div class="row">

                        <slot name="content" />

                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-default pull-left"
                        data-dismiss="modal">Close</button
                    >
                    <slot name="storeButton" />
                </div>
            </form>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
