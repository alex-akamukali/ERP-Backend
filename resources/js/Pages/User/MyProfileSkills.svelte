<script context="module">
    import { page, useForm } from "@inertiajs/inertia-svelte";
</script>

<script>
    export let skills;
    export let userId;

    let indexes = ["danger", "success", "info", "warning", "primary"];
    let indexPointer = 0;
    let list = [];
    let val = "";

    $: {
        list = skills.split(",");
    }

    let form = useForm({
        skills:skills || ''
    });

    function updateSkills(){
       $form.put("/update-user-skill/" + userId,{
        preserveScroll: true
       });
    }

    function getNextClass() {
        ++indexPointer;
        if (indexPointer >= indexes.length) {
            indexPointer = 0;
        }
        return indexes[indexPointer];
    }

    function appendList() {
        list = [...list, val];
        val = '';
        $form.skills = list.join(',');
        updateSkills();
    }

    function removeFromList(item){
       list = list.filter((item1)=>(item1 != item));
       updateSkills();
    }
</script>

<!-- <p> -->
<form on:submit|preventDefault={appendList}>
    {#each list as item}
        <span on:dblclick={()=>removeFromList(item)} class={`label label-${getNextClass()}`}>{item}</span>&nbsp;
    {/each}
    <input type="text" bind:value={val} style="border: 0;outline: none;;margin-top:3px;" placeholder="Add Skill..." />
    <div>
        <small>
            <em>
                "Double click on a skill to remove"
            </em>
        </small>
    </div>
    <!-- <span class="label label-success">Coding</span>
<span class="label label-info">Javascript</span>
<span class="label label-warning">PHP</span>
<span class="label label-primary">Node.js</span> -->
</form>
<!-- </p> -->
<style>
    .label,input{
        display: inline-block !important;
        cursor: pointer;
    }
</style>
