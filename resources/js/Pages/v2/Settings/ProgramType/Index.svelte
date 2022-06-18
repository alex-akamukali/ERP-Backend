<script context="module">
    import {
        Modal,
        Page,
        Layout
    } from "nodejs-svelte-crud-helper";

    import {updateForm,createForm,selectRow,update,create,remove,setResource,reset} from "./Form";

    import ModalCreate from "./ModalCreate.svelte";
    import ModalUpdate from "./ModalUpdate.svelte";

    export const layout = Layout;
</script>

<script>
    export let list;

    setResource("/program-type/");

    // const resource = "/program-type/";
    // let form = $Script.form();
</script>

<Page>
    <span slot="title">Program Type.</span>
    <button
        slot="createButton"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#modal-create"
        on:click|preventDefault={reset}
    >
        <i class="fa fa-plus" /> Program Type
    </button>

    <div class="col-sm-12" slot="content">
        <table
            id="example1"
            class="table table-data table-striped table-hover dataTable no-footer"
            role="grid"
            aria-describedby="example1_info"
        >
            <thead>
                <!-- svelte-ignore a11y-no-redundant-roles -->
                <tr role="row"
                    ><th>Title</th><th>Description</th><th>Status</th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {#each list as programType}
                    <tr class="odd">
                        <td>
                            {programType.title}
                        </td>
                        <td>
                            {programType.description}
                        </td>
                        <td>
                            {programType.status}
                        </td>
                        <td>
                            <a
                                data-toggle="modal"
                                data-target="#modal-update"
                                href={null}
                                on:click|preventDefault={() =>
                                    selectRow(programType)}
                            >
                                <i class="fa fa-edit text-green" />
                            </a>
                            &nbsp;&nbsp;
                            <a
                                href={null}
                                on:click|preventDefault={() =>
                                    remove(programType)}
                            >
                                <i class="fa fa-trash text-red" />
                            </a>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

<ModalCreate {create} {createForm} />

<ModalUpdate {update} {updateForm} />

</Page>
