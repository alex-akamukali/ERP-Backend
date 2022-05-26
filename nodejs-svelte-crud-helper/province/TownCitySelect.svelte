<script context="module">
    import { createEventDispatcher } from "svelte";
    import { provinceStore } from "./Store";
</script>

<script>
    export let list;
    export let query;
    export let value;
    // let dispatch = createEventDispatcher();

    provinceStore.subscribe(({ province }) => {
      query(province);
    });
</script>

<select class="form-control"  bind:value={value}>
    <option>--Select Town/City--</option>
    {#each list as item}
        <option value={item.id}>{item.name}</option>
    {/each}
</select>
