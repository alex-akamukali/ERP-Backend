
import { useForm, page, inertia } from "@inertiajs/inertia-svelte";
import  {writable,get} from "svelte/store";

let form = null;

let mode = writable("create");

// let resource = "";
let innerData = {};


// export const initForm =(data,resourceRoute='')=>{
//    form = useForm(data);
//    resource = resourceRoute;
//    return form;
// };

let callbackSelectRow = null;
let callbackRemoveRow = null;
let callbackCreateRecord  = null;
let callbackUpdateRecord = null;
let callbackResetRecord = null;

export const onSelectRow =(cb)=>{
  callbackSelectRow = cb;
};

export function onReset(cb){
  callbackResetRecord = cb;
}

export function reset(){
    callbackResetRecord();
    resetMode();
}

function resetMode(){
    // mode = "create";
    mode.set("create");
}

export const selectRow =(data)=>{
  callbackSelectRow(data);
  innerData = data;
//   mode = 'update';
  mode.set("update");
};

export function getMode(){
    return mode;
}

export const onRemove =(cb)=>{
  callbackRemoveRow = cb;
};

export function onCreate(cb){
  callbackCreateRecord = cb;
}

export function onUpdate(cb){
   callbackUpdateRecord = cb;
}

export function remove(data){
   callbackRemoveRow(data);
   resetMode();
}

export function save(){
    if (get(mode) == "create") {
        callbackCreateRecord();
    } else {
        callbackUpdateRecord(innerData);
    }
    resetMode();
}


// export function remove(data,confirmationText='Do you want to confirm this action?') {
//     if (confirm(confirmationText)) {
//         $form.delete(resource + data.id);
//     }
// }

export function clearForm() {
    // alert('called...');
    // $form.reset();
    // mode = "create";
}

// export function save() {
//     if (mode == "create") {
//         $form.post(resource);
//     } else {
//         $form.put(resource + $form.id);
//     }
// }
