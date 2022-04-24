<script context="module">
    import { inertia, Link } from "@inertiajs/inertia-svelte";
</script>

<script>
    export let pages; //
</script>



<div
    class="dataTables_paginate paging_simple_numbers"
    id="DataTables_Table_0_paginate"
>
    <ul class="pagination">
        {#each pages as page, index}
            <li
                class={(index == 0 ? " previous " : "") +
                    "paginate_button" +
                    (page.active ? " active " : "") +
                    (pages.length - 1 == index ? " next " : "")}
            >

                <Link href={page.url? page.url : ''}>
                    {#if index == 0}
                        &laquo; Previous
                    {:else if pages.length - 1 == index}
                        &raquo; Next
                    {:else}
                        {page.label}
                    {/if}
                </Link>
            </li>
        {/each}

        <!-- <li class="paginate_button active">
            <a
                href="#"
                aria-controls="DataTables_Table_0"
                data-dt-idx="1"
                tabindex="0">1</a
            >
        </li>
        <li class="paginate_button ">
            <a
                href="null"
                aria-controls="DataTables_Table_0"
                data-dt-idx="2"
                tabindex="0">2</a
            >
        </li>
        <li class="paginate_button next" id="DataTables_Table_0_next">
            <a
                href="null"
                aria-controls="DataTables_Table_0"
                data-dt-idx="3"
                tabindex="0">Next</a
            >
        </li> -->
    </ul>
</div>
