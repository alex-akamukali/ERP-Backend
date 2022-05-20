<script context="module">
    import {
        Modal,
        Page,
        useForm,
        page,
        inertia,
        Layout,
    } from "nodejs-svelte-crud-helper";
    export const layout = Layout;
</script>

<script>
    export let statuses;
    // export let program_types;
    // export let knowledge_area_types;
    export let list;
    // export let store;
    // export let update;
    // export let destroy;
    // export let csrf;

    let mode = "create";

    const resource = "/olade-contract-type/";

    let closeModal = null;
    // 'title' => 'required',
    //         'primary_commission' => 'required',
    //         'secondary_commission' => 'required',
    //         'no_of_months' => 'required',
    //         'status' => 'required',
    //         'body' => 'required',
    //         'instructions' => 'required'

    let form = useForm({
        title: "",
        primary_commission: "",
        secondary_commission: "",
        no_of_months: 6,
        status: "active",
        body: "",
        instructions: "",
    });

    let filter = useForm({
        status: "",
    });

    function removeRow(data) {
        if (confirm("Do you want to confirm this action?")) {
            $form.delete(resource + data.id);
        }
    }

    function doFilter() {
        $filter.get(resource);
    }
</script>

<Page>
    <span slot="title">Olade Contract Types.</span>

    <a
        use:inertia
        href={resource + "create"}
        slot="createButton"
        class="btn btn-primary btn-sm"
    >
        <i class="fa fa-plus" />&nbsp;Add Olade Contract Type
    </a>

    <div slot="content">
        <div class="col-md-12">
            <select bind:value={$filter.status} on:change={doFilter}>
                <option value="">All Statuses</option>
                {#each statuses as status}
                    <option value={status}>{status}</option>
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
                    <tr role="row">
                        <th>Title</th>
                        <th>Primary Commission</th>
                        <th>Secondary Commission</th>
                        <th>No Of Months</th>
                        <th>Status</th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {#each list as item}
                        <tr class="odd">
                            <td>
                                {item.title}
                            </td>
                            <td>
                                {item.primary_commission}
                            </td>
                            <td>
                                {item.secondary_commission}
                            </td>
                            <td>
                                {item.no_of_months}
                            </td>
                            <td>{item.status}</td>
                            <td>
                                <a
                                    use:inertia
                                    href={resource + item.id + "/edit"}
                                >
                                    <i class="fa fa-edit text-green" />
                                </a>
                                &nbsp;&nbsp;
                                <a
                                    href={null}
                                    on:click|preventDefault={() =>
                                        removeRow(item)}
                                >
                                    <i class="fa fa-trash text-red" />
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
