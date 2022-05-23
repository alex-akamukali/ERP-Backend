<script context="module">
    import { createEventDispatcher } from "svelte";
    import {inertia} from "@inertiajs/inertia-svelte";
</script>

<script>
    export let data;
    export let template;
    let is_docusigner = "no";
    let dispatch = createEventDispatcher();

    // is_docusigner = data.is_docusigner;

    // if (is_docusigner == null){
    //    is_docusigner = "no";
    // }

    // $: is_docusigner = data.is_docusigner? data.is_docusigner : "no";


</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<tr role="row" class="odd">
    <td class="sorting_1">
        {data.name}
    </td>
    <td>
        {data.email}
    </td>

    {#if template == "management"}
        <td />
        <td> {data.created_ago}</td>

        <!-- svelte-ignore a11y-label-has-associated-control -->
        <td>
            <label class="text-success" id="acctstc2aa1951a32f33b047954754f0ae">
                {data.account_status}
            </label></td
        >
        <td>
            {data.account_type}
        </td>
        <td>
            <div class="btn-group">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="dropdown-toggle" data-toggle="dropdown">
                    ... <!-- <span class="caret"></span> -->
                    <span class="sr-only">Toggle Dropdown</span>
                </label>
                <ul class="dropdown-menu" role="menu" style="z-index:9000">
                    <li>
                        <a use:inertia  href={`/user-management/${data.id}`}>

                            <i class="fa fa-file text-info" /> View Profile
                        </a>
                    </li>

                    <li>
                        <a
                            href="null"
                            usx="c2aa1951a32f33b047954754f0ae"
                            on:click|preventDefault={() =>
                                dispatch("sendReInvitation", data)}
                        >
                            <i class="fa fa-refresh text-info" /> Re-invite</a
                        >
                    </li>
                </ul>
            </div>
        </td>
    {/if}

    {#if template == "docusign"}
        <td
            class="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Program: activate to sort column ascending"
            style="text-align: right;"
        >
       <input type="checkbox" bind:group={data.is_docusigner_validated} value="yes"  on:change={(e)=>dispatch("changeDocusignPermission",{checked:e.target.checked,data})} />
       <!-- bind:group={is_docusigner} -->
       <!-- {is_docusigner} -->
    </td>
    {/if}
</tr>
