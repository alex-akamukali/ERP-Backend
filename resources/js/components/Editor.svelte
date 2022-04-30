<script context="module">
    import {onMount,onDestroy,createEventDispatcher} from "svelte";
</script>

<script>
    let ref = null;
    export let data;
    let htmlContent = '';
    let editor = null;
    let dispatch = createEventDispatcher();
    // export let onChange;

    onMount(()=>{
        editor = CKEDITOR.replace( ref );
        editor.on('change',function(evt){
            console.log('content chanaged...');
            htmlContent = evt.editor.getData();
            dispatch("textChange",htmlContent);
        });
    });

    onDestroy(()=>{
        editor.destroy();
        // alert('removed...');
    });
</script>

<textarea bind:this={ref}>{data}</textarea>
To-HTML: {htmlContent}
