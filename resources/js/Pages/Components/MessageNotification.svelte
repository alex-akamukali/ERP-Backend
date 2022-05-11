<script context="module">
    import MessageStore from "../../components/MessageStore";
    import {Data} from "../../Stores/GlobalStore";
    import {page} from "@inertiajs/inertia-svelte";

</script>

<script>
    // let message;
    // let error;
    // export let onResetMessage;
    // let errors;
    // export let hasErrors;
    // export let onCloseModal;



    $:{

    // message = $page.props.message;
    // errors = $page.props.errors;
    // error = $page.props.error;
    // console.log(errors);

    }

    page.subscribe(function({props}){

        const {message,error,errors} = props;

     if (message != "") {
        if (error) {
            toastr.error(message);

        }
        if (!error) {
            toastr.success(message);
            // if (onCloseModal)onCloseModal();
        }
        // page.update((data)=>{
        //     data.props.message = '';
        //     data.props.error = false;
        //     return {...data};
        // });
        //page.props.message = '';
        // if (onResetMessage) {
        //     // onResetMessage();
        // }
        }

        if (errors) {
         for (let i in errors) {
            if (errors[i] != message) toastr.error(errors[i]);
         }
        }


    });


</script>
