import { writable } from "svelte/store";


export let Data = writable({
    myDocument:{
        selected:{},
        list:[]
    },
    message:'',
    error:false
});


export let currentRow = writable({});

export let notifications = writable([]);
