import { useForm, page, inertia } from "@inertiajs/inertia-svelte";

export let form = null;

export const initForm =(data)=>{
   form = useForm(data);
};

let callbackSelectRow = null;

export const onSelectRow =(cb)=>{
  callbackSelectRow = cb;
};

export const selectRow =(data)=>{
  callbackSelectRow(data);
};





