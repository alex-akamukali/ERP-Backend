<script context="module">
    import { createEventDispatcher } from "svelte";
    import { provinceStore } from "./Store";
</script>

<script>
    export let list;
    let dispatch = createEventDispatcher();
    function emitChange(e) {
        dispatch("change", e.target.value);
        $provinceStore.province = e.target.value;
    }
</script>

<select class="form-control" on:change={emitChange}>
    <option>--Select Province--</option>
    {#each list as item}
        <option value={item.id}>{item.name}</option>
    {/each}
</select>
