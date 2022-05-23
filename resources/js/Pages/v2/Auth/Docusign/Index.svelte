<script context="module">

    import UserManagementRow from "nodejs-svelte-crud-helper/UserManagementRow.svelte";
    import UserManagementHead from "nodejs-svelte-crud-helper/UserManagementHead.svelte";
    import {Page,Layout,update,onUpdate,useForm} from "nodejs-svelte-crud-helper";
    import Pagination from "nodejs-svelte-crud-helper/Pagination.svelte";
    import {onDestroy} from "svelte";

    export const layout = Layout;
</script>

<script>

    export let list; // = $page.props.users;
    let form = useForm({
     "is_docusigner":""
    });


    function changeDocusignPermission({checked,data}){
        // alert(checked);
        // alert(JSON.stringify(data));
        $form.is_docusigner = checked? "yes":"no";
        $form.put("/docusign/" + data.id);
    }

    onDestroy(()=>{
        alert('des');
    });


</script>


<Page>


    <span slot="title">Manage Docusigners</span>

    <div class="col-sm-12" slot="content">


        <div class="row">
            <div class="col-sm-12">
                <table class="table  table-striped">
                    <thead>
                        <UserManagementHead template="docusign" />
                    </thead>
                    <tbody>
                        {#each list.data as user}
                        <!-- e.detail -->
                          <UserManagementRow template="docusign" data={user} on:changeDocusignPermission={(e)=>(changeDocusignPermission(e.detail))} />
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10">
                <Pagination pages={list.links} />
            </div>
        </div>


    </div>

</Page>

