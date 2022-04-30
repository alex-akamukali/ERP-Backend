<script context="module">
    import Layout from "./Layout.svelte";
    import { onMount } from "svelte";
    export const layout = Layout;
    import Editor from "../../components/Editor.svelte";
</script>
<script>
     let content = '';
</script>
<Editor data={'cool'} on:textChange={(val)=>{content = val}} />
Dashboard
