<script context="module">
    import {onMount,createEventDispatcher} from "svelte";
</script>

<script>
    let ref = null;
    export let data;
    let htmlContent = '';
    let dispatch = createEventDispatcher();
    // export let onChange;

    onMount(()=>{
        let editor = CKEDITOR.replace( ref );
        editor.on('change',function(evt){
            console.log('content chanaged...');
            htmlContent = evt.editor.getData();
            dispatch("textChange",htmlContent);
        });
    });
</script>

<textarea bind:this={ref}>{data}</textarea>
To-HTML: {htmlContent}
