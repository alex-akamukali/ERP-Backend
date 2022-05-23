<script context="module">


import UserManagement from "nodejs-svelte-crud-helper/user/user-profile/Index.svelte";
import {Layout,useForm} from "nodejs-svelte-crud-helper";

</script>

<script>
export const layout = Layout;
//export let name;

</script>
nice...

<UserManagement title="User Profile." currentTab="profile">
    content....
</UserManagement>
