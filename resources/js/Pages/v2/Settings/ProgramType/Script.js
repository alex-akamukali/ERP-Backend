import {writable,get} from "svelte/store";
import { useForm } from "@inertiajs/inertia-svelte";

let form = useForm({
/**
 *
 * @property {nice3}
 *
 */
    description: "",
    title: "",
    status: "active",
    id: "0",
    foo_detail:"",
});



/**
 copy this to the next page for reference
foo_detail

* */



const Script = writable({

    data(){
      return form;
    },



    form(){
       return form;
    },

    get(url){
       get(form).get(url);
    },

    select(data){
      form.update((old)=>({...old,...data}));
      Script.update((old)=>({...old,...data}));
    //   get(Script).title = data.title;
    },

    put(url){
        get(form).put(url);
    },

    delete(url){
        get(form).delete(url);
    },

    reset(){
       get(form).reset();
    },

    post(url){
        get(form).post(url);
    }

});

export default Script;
