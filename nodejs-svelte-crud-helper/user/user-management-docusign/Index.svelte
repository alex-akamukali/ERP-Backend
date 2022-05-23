<script context="module">
    import { createEventDispatcher } from "svelte";
</script>

<script>
    export let list;
    let dispatch = createEventDispatcher();
</script>

<table class="table  table-striped">
    <thead>
        <!-- svelte-ignore a11y-no-redundant-roles -->
        <tr role="row"
            ><th
                class="sorting_asc"
                tabindex="0"
                aria-controls="DataTables_Table_0"
                rowspan="1"
                colspan="1"
                aria-sort="ascending"
                aria-label="Name: activate to sort column descending">Name</th
            ><th
                class="sorting"
                tabindex="0"
                aria-controls="DataTables_Table_0"
                rowspan="1"
                colspan="1"
                aria-label="Email: activate to sort column ascending">Email</th
            >

            <th
                class="sorting"
                tabindex="0"
                aria-controls="DataTables_Table_0"
                rowspan="1"
                colspan="1"
                aria-label="Program: activate to sort column ascending"
                style="text-align: right;">Apply Docusign Permission</th
            >
        </tr>
    </thead>
    <tbody>
        {#each list as user}
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <tr role="row" class="odd">
                <td class="sorting_1">
                    {user.name}
                </td>
                <td>
                    {user.email}
                </td>

                <td
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                    aria-label="Program: activate to sort column ascending"
                    style="text-align: right;"
                >
                    <input
                        type="checkbox"
                        bind:group={user.is_docusigner_validated}
                        value="yes"
                        on:change={(e) =>
                            dispatch("changeDocusignPermission", {
                                checked: e.target.checked,
                                data:user,
                            })}
                    />
                    <!-- bind:group={is_docusigner} -->
                    <!-- {is_docusigner} -->
                </td>
            </tr>

            <!-- e.detail -->
        {/each}
    </tbody>
</table>
