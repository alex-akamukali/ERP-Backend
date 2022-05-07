<script>

    export let url;

    function openCalendly(){
        Calendly.initPopupWidget({url: 'https://calendly.com/' + url});
    }
</script>
<!-- svelte-ignore a11y-invalid-attribute -->
<a class="btn btn-sm btn-primary" href="#" on:click|preventDefault={openCalendly}>Schedule time with me</a>
<!-- Calendly link widget end -->
