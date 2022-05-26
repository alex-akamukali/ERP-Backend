<script context="module">

import { page, useForm } from "@inertiajs/inertia-svelte";
import WorkFlow from "nodejs-svelte-crud-helper/user/workflow/Index.svelte";
import {Layout} from "nodejs-svelte-crud-helper";
export let layout = Layout;
</script>

<script>

//export let name;
export let data;

</script>

<WorkFlow title="Assessment" user={data} currentTab="assessment">
    content...
</WorkFlow>
