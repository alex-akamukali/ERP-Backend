<script context="module">

import Layout from "../../Auth/Dashboard/Layout.svelte";
    import { useForm,page,inertia } from "@inertiajs/inertia-svelte";

    import Page from "../../../../components/Page.svelte";
    import Modal from "../../../../components/Modal.svelte";



    export const layout = Layout;
</script>

<script>
    export let list;
    export let provinces;
    export let id;

    let mode = "create";



    const resource = "/province-town-city/";

    let closeModal = null;

    // alert(id);


    let form = useForm({
        province_id: +id,
        name: "",

    });

    let filter = useForm({ province_id:+id });

    // $: {
    //     $filter.id = id;
    // }



    function selectRow(data) {
        $form.name = data.name;
        $form.province_id = data.province_id;
        $form.id = data.id;
        mode = "update";
    }

    function removeRow(data) {
        if (confirm("Do you want to confirm this action?")) {
            $form.delete(resource + data.id);
        }
    }

    function clearForm() {
        $form.reset('name');

        mode = "create";
    }

    function callStore() {
        if (mode == "create") {
            $form.post(resource);
        } else {
            $form.put(resource + $form.id);
        }
    }


    function onFilterChange() {
        $form.get(resource);
    }

    $: if ($form.province_id){
    //    onFilterChange();
    }

</script>

<Page>
    <span slot="title">Province</span>
    <button
        slot="createButton"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#modal-progtype"
        on:click|preventDefault={clearForm}
    >
        <i class="fa fa-plus" /> Add Town/City
    </button>
    &nbsp;
    <a class="btn btn-primary btn-sm" use:inertia href="/province" slot="createButton2"> Back </a>

    <div class="col-sm-12" slot="content">
        <div class="col-md-12" style="">
            <label for="title">
                Province*
            </label>
            <select bind:value={$form.province_id} on:change={onFilterChange}>
                <option value="">Select Province</option>
                {#each provinces as item1}
                    <option value={item1.id}>
                        {item1.name}
                    </option>
                {/each}
            </select>
        </div>

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
        <span slot="title">Town/City</span>

        <div class="col-md-12" slot="content">
            <div class="col-md-12" style="text-align: right;">
                <label for="title"> Province* </label>
                <select bind:value={$form.province_id} on:change={onFilterChange}>
                    <option value="">Select Province</option>
                    {#each provinces as item}
                        <option value={item.id}>{item.name}</option>
                    {/each}
                </select>
            </div>

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
        </div>

        <button type="submit" class="btn btn-primary" slot="storeButton">
            <i class="fa fa-save" /> &nbsp; {mode == "create"
                ? "Add Town/City"
                : "Update Town/City"}
        </button>
    </Modal>
</Page>
