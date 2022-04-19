import { useEffect, useRef } from "react";

export const Calendly = () => {
    const $ref = useRef(null);
    useEffect(() => {
        Calendly.initInlineWidget({
            url: "https://calendly.com/easymagic1/30min",
            prefill: {
                name: "John Doe",
                email: "easymagic1@gmail.com",
                customAnswers: {
                    a1: "Yes",
                    a2: "At the Starbucks on 3rd and 16th",
                },
            },
        });
    }, []);

    return (
        <>
            <div>Propose meeting...</div>
        </>
    );
};

export const CalendlyListener = () => {
    const isCalendlyEvent = (e) => {
        return (
            e.origin === "https://calendly.com" &&
            e.data.event &&
            e.data.event.indexOf("calendly.") === 0
        );
    };

    useEffect(() => {
        window.addEventListener("message", function (e) {
            if (isCalendlyEvent(e)) {
                /* Example to get the name of the event */
                console.log("Event name:", e.data.event);

                /* Example to get the payload of the event */
                console.log("Event details:", e.data.payload);
            }
        });
    }, []);

    return (
        <>
            <div></div>
        </>
    );
};


// {
//     "event": {
//         "uri": "https://api.calendly.com/scheduled_events/22570bad-d629-4b04-9db6-2d18423fa79b"
//     },
//     "invitee": {
//         "uri": "https://api.calendly.com/scheduled_events/22570bad-d629-4b04-9db6-2d18423fa79b/invitees/712f27d9-95d2-4cfb-89c8-2fba238f97fa"
//     }
// }
// personal-access-token: eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjUwMzk0MjI5LCJqdGkiOiIyMjczMDU5Ny00ODY1LTQzNWYtYjE2NS0wN2JkY2RlYTNiNjkiLCJ1c2VyX3V1aWQiOiJlZGI1ZmQzNC1hOTAxLTQyMGEtOWRkMi01OTRmNGIyMjZhMTgifQ.1R4dILhX4xh5RGAPzvlikMAAfmTcLcuGTZ6C6CPL3is
// eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjUwMzk0MjI5LCJqdGkiOiIyMjczMDU5Ny00ODY1LTQzNWYtYjE2NS0wN2JkY2RlYTNiNjkiLCJ1c2VyX3V1aWQiOiJlZGI1ZmQzNC1hOTAxLTQyMGEtOWRkMi01OTRmNGIyMjZhMTgifQ.1R4dILhX4xh5RGAPzvlikMAAfmTcLcuGTZ6C6CPL3is
