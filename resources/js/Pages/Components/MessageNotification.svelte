<script context="module">
    import MessageStore from "../../components/MessageStore";
</script>

<script>
    export let message;
    export let error;
    export let onResetMessage;
    export let errors;
    export let hasErrors;
    export let onCloseModal;

    $: if (message != "") {
        if (error) {
            toastr.error(message);
        }
        if (!error) {
            toastr.success(message);
            if (onCloseModal)onCloseModal();
        }
        if (onResetMessage) {
            onResetMessage();
        }
    }

    $: if (hasErrors) {
        for (let i in errors) {
            if (errors[i] != message) toastr.error(errors[i]);
        }
        if (onResetMessage) {
            onResetMessage();
        }

    }
</script>
