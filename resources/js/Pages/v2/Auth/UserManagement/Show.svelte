<script context="module">
    import UserManagement from "nodejs-svelte-crud-helper/user/user-profile/Index.svelte";
    import { Layout, useForm } from "nodejs-svelte-crud-helper";
    export const layout = Layout;
</script>

<script>
    export let data;
    //export let name;
</script>

<UserManagement user={data} title="User Profile." currentTab="payment-portal">
    content....
</UserManagement>
