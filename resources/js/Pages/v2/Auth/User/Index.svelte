<script context="module">
    import Layout from "../../Auth/Dashboard/Layout.svelte";
    import { useForm } from "@inertiajs/inertia-svelte";

    import Page from "../../../../components/Page.svelte";
    import Modal from "../../../../components/Modal.svelte";

    import UserListComponent from "../../../Components/UserListComponent.svelte";

    export const layout = Layout;
</script>

<script>
    export let list; // = $page.props.users;
    let invite_candidate_route = '/invite-candidate/';
    let reinvite_candidate_route = '/invite-candidate/';
    // let msg = writable(message);
    // $: users = list;
</script>

<UserListComponent
    users={list}
    {invite_candidate_route}
    {reinvite_candidate_route}
    label="All Candidates"
/>
