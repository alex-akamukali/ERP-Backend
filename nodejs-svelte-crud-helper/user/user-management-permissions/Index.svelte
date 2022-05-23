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
            >Profile Status</th
        >
        <th
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Program: activate to sort column ascending"
            >Is Super-Admin</th>
        <th
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Program: activate to sort column ascending"
            >Is Mgt. Admin</th
        >
        <th
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Program: activate to sort column ascending"
            >Is Accountant</th>


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
                    style="text-align: center;"
                >
                    <input
                        type="checkbox"
                        bind:group={user.permission_profile_status_validated}
                        value="1"
                        on:change={(e) =>
                            dispatch("changeUserPermission", {
                                value: e.target.checked,
                                data:user,
                                key:'permission_profile_status'
                            })}
                    />
                </td>



                <td
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                    aria-label="Program: activate to sort column ascending"
                    style="text-align: center;"
                >
                    <input
                        type="checkbox"
                        bind:group={user.permission_is_super_admin_validated}
                        value="1"
                        on:change={(e) =>
                            dispatch("changeUserPermission", {
                                value: e.target.checked,
                                data:user,
                                key:'permission_is_super_admin'
                            })}
                    />
                </td>
                <td
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                    aria-label="Program: activate to sort column ascending"
                    style="text-align: center;"
                >
                    <input
                        type="checkbox"
                        bind:group={user.permission_is_mgt_admin_validated}
                        value="1"
                        on:change={(e) =>
                            dispatch("changeUserPermission", {
                                value: e.target.checked,
                                data:user,
                                key:'permission_is_mgt_admin'
                            })}
                    />
                </td>
                <td
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                    aria-label="Program: activate to sort column ascending"
                    style="text-align: center;"
                >
                    <input
                        type="checkbox"
                        bind:group={user.permission_is_accountant_validated}
                        value="1"
                        on:change={(e) =>
                            dispatch("changeUserPermission", {
                                value: e.target.checked,
                                data:user,
                                key:'permission_is_accountant'
                            })}
                    />
                </td>

            </tr>

            <!-- e.detail -->
        {/each}
    </tbody>
</table>

<!-- 'permission_profile_status',
'permission_is_super_admin',
'permission_is_mgt_admin',
'permission_is_accountant', -->
