<script context="module">

    import {Page,Layout,update,onUpdate,useForm} from "nodejs-svelte-crud-helper";
    import Pagination from "nodejs-svelte-crud-helper/Pagination.svelte";
    import {onDestroy} from "svelte";
    import UserManagementPermission from "nodejs-svelte-crud-helper/user/user-management-permissions/Index.svelte";

    export const layout = Layout;
</script>

<script>

    export let list; // = $page.props.users;
    let form = useForm({
     "key":"",
     "value":""
    });


    function changeUserPermission({key,value,data}){
        // alert(checked);
        // alert(JSON.stringify(data));
        $form.value = value? "yes":"no";
        $form.key = key;
        $form.put("/user-permission/" + data.id);
    }


</script>


<Page>


    <span slot="title">Manage User Permissions</span>

    <div class="col-sm-12" slot="content">


        <div class="row">
            <div class="col-sm-12">
                <UserManagementPermission list={list.data} on:changeUserPermission={(e)=>(changeUserPermission(e.detail))} />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10">
                <Pagination pages={list.links} />
            </div>
        </div>


    </div>

</Page>

