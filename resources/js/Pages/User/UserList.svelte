<script context="module">
    import { writable } from "svelte/store";
    import Layout from "../Dashboard/Layout.svelte";
    import UserListComponent from "../Components/UserListComponent.svelte";
    export const layout = Layout;
</script>

<script>
    export let users; // = $page.props.users;
    export let invite_candidate_route;
    export let reinvite_candidate_route;
    export let message;
    export let error;
    // let msg = writable(message);
    function clearMessage(){
        message = '';
    }
</script>

<UserListComponent
    {users}
    {invite_candidate_route}
    {reinvite_candidate_route}
    {message}
    {error}
    label="All Candidates"
    on:clearMessage={clearMessage}
/>
