<script context="module">

    import MessageStore from "../../components/MessageStore";

</script>

<script>

    export let message;
    export let error;
    export let onResetMessage;

//    let msg = '';

    // $: msg = message;

$: if (message != "") {
        // closeModal.click();
        if (error){
            toastr.error(message);
        }
        if (!error){
            toastr.success(message);
        }
        // $MessageStore.message = '';
        if (onResetMessage){
           onResetMessage();
        }
        // toastr.success(message);
        // message = "";
        // console.log(message);
}

</script>
