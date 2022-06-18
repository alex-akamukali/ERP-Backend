<script context="module">
    import {
        Modal,
    } from "nodejs-svelte-crud-helper";
</script>
<script>

  export let createForm;
  export let create;

</script>


<Modal id="modal-create" on:submit={create}>
    <span slot="title">Program Type</span>

    <div class="col-md-12" slot="content">

<!-- content here  -->

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
    bind:value={$createForm.title}
/>

</div>

<div class="col-md-12">
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-label"
    >Program Description.<b style="color:red">*</b></label
>
<textarea
    class="form-control"
    name="proDescription"
    required=""
    bind:value={$createForm.description}
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
    bind:value={$createForm.status}
>
    <option value="">Select</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
</select>
</div>

      <!-- <InputCreate /> -->

    </div>

    <button type="submit" class="btn btn-primary" slot="storeButton">
        <i class="fa fa-save" /> &nbsp; Add Program Type
    </button>
</Modal>
