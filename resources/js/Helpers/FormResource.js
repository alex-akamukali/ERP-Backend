import {useForm} from "@inertiajs/inertia-svelte";
import {createEventDispatcher}from "svelte";
export class FormResource{

    constructor(params={}){
        params._method = null;
        this.form = useForm(params);
        this.list = [];
        this.selected = {};
    }

    setList(list){
        this.list = list;
    }

    select(data){
        this.selected = data;
    }

    getList(){
        return this.list;
    }

    method(mtd){
      this.form._method = mtd;
      console.log(this.form._method,this.form);
    }

    post(url){
        return this.form.post(url);
        let form = this.form;
        $form.post(url);
    }

}

