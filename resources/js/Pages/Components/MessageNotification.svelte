<script context="module">
    import MessageStore from "../../components/MessageStore";
    import {Data} from "../../Stores/GlobalStore";

</script>

<script>
    export let message;
    export let error;
    export let onResetMessage;
    export let errors;
    export let hasErrors;
    export let onCloseModal;



    $:{
        // alert(message);
        $Data.message = message;

        // alert($Data.message);
    }

    $: if ($Data.message != "") {
        if (error) {
            toastr.error($Data.message);
        }
        if (!error) {
            toastr.success($Data.message);
            if (onCloseModal)onCloseModal();
        }
        if (onResetMessage) {
            onResetMessage();
        }
    }

    $: if (hasErrors) {
        for (let i in errors) {
            if (errors[i] != $Data.message) toastr.error(errors[i]);
        }
        if (onResetMessage) {
            onResetMessage();
        }

    }
</script>
