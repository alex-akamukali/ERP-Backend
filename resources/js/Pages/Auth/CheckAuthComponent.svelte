<script context="module">
import {onMount} from "svelte";
import { page, useForm } from "@inertiajs/inertia-svelte";

</script>

<script>
 let timeout = null;
 let checkLogged = null;
//  export let name;
 async function checkAuth(){
     const url = '/check-auth';
     const response = await fetch(url).then(res=>res.json());
    //  console.log(response);
     checkLogged = response;
     timeout = setTimeout(()=>{
        checkAuth();
     },5000);
 }


 onMount(()=>{
    checkAuth();
 });

 $: if (checkLogged && !checkLogged.is_logged){
    alert('Not Logged, logging out!');
    location.reload();
 }

</script>

