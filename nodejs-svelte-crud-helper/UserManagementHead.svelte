<script>
    export let template; //management , docusign , role-permission
</script>

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

    {#if template == "management"}
        <th
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Program: activate to sort column ascending">Program</th
        ><th
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Date: activate to sort column ascending">Created</th
        ><th
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Status: activate to sort column ascending">Status</th
        ><th
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label=" &amp;nbsp; : activate to sort column ascending"
        >
            Account-Type
        </th>

        <th
        class="sorting"
        tabindex="0"
        aria-controls="DataTables_Table_0"
        rowspan="1"
        colspan="1"
        aria-label=" &amp;nbsp; : activate to sort column ascending"
    >
        Actions
    </th>
    {/if}

    {#if template == "docusign"}
        <th
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Program: activate to sort column ascending"
            >Has Docusign Right?</th
        >
    {/if}


    {#if template == "role-permission"}
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
            >Is Accountant</th
        >

        {/if}




</tr>
