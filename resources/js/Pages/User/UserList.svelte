<script context="module">
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
</script>

<UserListComponent
    {users}
    {invite_candidate_route}
    {reinvite_candidate_route}
    {message}
    {error}
    label="All Candidates"
/>
