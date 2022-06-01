<script context="module">

    import Script from "./Script";

</script>
<script>

    let form  = $Script.form();

</script>
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
        >Program Description.<b style="color:red">*</b></label
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
