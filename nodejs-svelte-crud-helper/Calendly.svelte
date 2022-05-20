<script context="module">
    import { createEventDispatcher } from "svelte";
</script>

<script>
    export let url;
    const dispatch = createEventDispatcher();

    function openCalendly() {
        Calendly.initPopupWidget({ url: "https://calendly.com/" + url });
    }

    function isCalendlyEvent(e) {
        return (
            e.origin === "https://calendly.com" &&
            e.data.event &&
            e.data.event.indexOf("calendly.") === 0
        );
    }

    window.addEventListener("message", function (e) {
        if (isCalendlyEvent(e)) {
            /* Example to get the name of the event */
            console.log("Event name:", e.data.event);

            /* Example to get the payload of the event */
            console.log("Event details:", e.data.payload);
            if (e.data.event == "calendly.event_scheduled") {
                getBookedDate(e.data.payload.event.uri);
            }
        }
    });

    async function getBookedDate(url) {
        var myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjUxOTY2NzM5LCJqdGkiOiJmODFjN2I2Ni1lYTkzLTRmZTEtOTQ4Mi1mZjAzMGU5M2U4OTIiLCJ1c2VyX3V1aWQiOiJlZGI1ZmQzNC1hOTAxLTQyMGEtOWRkMi01OTRmNGIyMjZhMTgifQ.HnAX3gIvbp8e-KUnT3GabKijQp6KDvNPwd-ng4Bhoh8"
        );

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

      let result = await fetch(
            url,
            requestOptions
        ).then((response) => response.json());

        dispatch("eventScheduled", {
            scheduledDate:(new Date(result.resource.start_time))
        });

    }

    //new-token
    //https://api.calendly.com/users/me
    //eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjUxOTY2NzM5LCJqdGkiOiJmODFjN2I2Ni1lYTkzLTRmZTEtOTQ4Mi1mZjAzMGU5M2U4OTIiLCJ1c2VyX3V1aWQiOiJlZGI1ZmQzNC1hOTAxLTQyMGEtOWRkMi01OTRmNGIyMjZhMTgifQ.HnAX3gIvbp8e-KUnT3GabKijQp6KDvNPwd-ng4Bhoh8
    //org-url
    //https://api.calendly.com/organizations/5fb76e66-050a-45a7-9468-51698da5b324
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a
    class="btn btn-sm btn-primary"
    href="#"
    on:click|preventDefault={openCalendly}>Schedule time with me</a
>
<!-- Calendly link widget end -->
