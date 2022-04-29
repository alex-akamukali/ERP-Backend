import { writable } from "svelte/store";

let MessageStore = writable({message:'',error:false});

export default MessageStore;
