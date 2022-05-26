<script context="module">
    import { createEventDispatcher } from "svelte";
    import { provinceStore } from "./Store";
</script>

<script>
    export let list;
    export let value;
    let dispatch = createEventDispatcher();
    $: {
        console.log('v-changed.',value);
        dispatch("change", value);
        $provinceStore.province = value;
    }
</script>

<select class="form-control" bind:value={value} >
    <option>--Select Province--</option>
    {#each list as item}
        <option value={item.id}>{item.name}</option>
    {/each}
</select>
