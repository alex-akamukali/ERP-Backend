import { useForm, page, inertia } from "@inertiajs/inertia-svelte";
import Modal from "./Modal.svelte";
import Page from "./Page.svelte";
import MessageNotification from "./MessageNotification.svelte";
import { notifications, currentRow } from "./GlobalStore.js";
import Layout from "./Layout.svelte";
import {onSelectRow,selectRow,form,initForm} from "./FormHelper";

export const doCalc = (a, b) => {
    return a + b + 11;
};

export {
    Modal,
    Page,
    useForm,
    page,
    inertia,
    MessageNotification,
    notifications,
    currentRow,
    Layout,
    onSelectRow,
    selectRow,
    form,
    initForm
};
