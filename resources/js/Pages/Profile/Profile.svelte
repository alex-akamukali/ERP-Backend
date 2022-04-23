<script context="module">
  import {page} from "@inertiajs/inertia-svelte";
  import Layout from "../Dashboard/Layout.svelte";
  import ProfileComponent from "./ProfileComponent.svelte";
  export const layout = Layout;
</script>

<script>
    const {user_logo,user} = $page.props;
</script>

<ProfileComponent userName={user.name} tabIndex={1}>
 Cool...
</ProfileComponent>
