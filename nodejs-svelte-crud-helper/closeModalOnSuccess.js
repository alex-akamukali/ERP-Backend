import { page } from "@inertiajs/inertia-svelte";

$: {

}

export function useCloseModalOnSuccess(node){

    // $:{
        page.subscribe(function({props}){
            // alert(JSON.stringify(data));
            if (Object.keys(props.errors).length <= 0 && props.message != ''){
                node.click();
             }
        });
        // alert('seen');
    // }

}
