<script context="module">

    import {Page,Layout,update,onUpdate,useForm} from "nodejs-svelte-crud-helper";
    import Pagination from "nodejs-svelte-crud-helper/Pagination.svelte";
    import {onDestroy} from "svelte";
    import UserDocuSignManagement from "nodejs-svelte-crud-helper/user/user-management-docusign/Index.svelte";

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
        $form.put("/docusign/" + data.id,{
            preserveScroll: true,
        });
    }

    onDestroy(()=>{
        // alert('des');
    });


</script>


<Page>


    <span slot="title">Manage Docusigners</span>

    <div class="col-sm-12" slot="content">


        <div class="row">
            <div class="col-sm-12">
                <UserDocuSignManagement list={list.data} on:changeDocusignPermission={(e)=>(changeDocusignPermission(e.detail))} />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10">
                <Pagination pages={list.links} />
            </div>
        </div>


    </div>

</Page>

