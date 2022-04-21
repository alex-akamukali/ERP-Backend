import { usePage } from "@inertiajs/inertia-react";
import { useRef } from "react";
import {
    CalendlyEventListener,
    InlineWidget,
    PopupButton,
    PopupModal,
} from "react-calendly";
import { CalendlyListener } from "../../components/Calendly";

import Layout from "../Dashboard/Layout";

export const UserProfileLayout = ({ children, tabIndex = 0 }) => {
    const { user_logo, user } = usePage().props;
    const $ref = useRef(null);
    return (
        <>
            <div>
                {/* 1st level         */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <div className="row">
                                <div className="col-md-12">
                                    <img
                                        id="myProfileImage"
                                        src={user_logo}
                                        className="profile-user-img img-responsive img-circle"
                                        alt="User Profile"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            marginLeft: "5px",
                                            display: "inline-block",
                                            marginTop: "-27px",
                                        }}
                                        onclick="openfileDialog();"
                                    />
                                    <div
                                        style={{
                                            display: "inline-block",
                                            margin: "12px",
                                            fontFamily:
                                                '"Arial Rounded MT Bold"',
                                        }}
                                    >
                                        <h3
                                            style={{
                                                color: "#073367",
                                                fontWeight: 700,
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            chidi moses
                                        </h3>
                                        <h4
                                            className="text-muted"
                                            style={{
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            {" "}
                                            &nbsp;{" "}
                                        </h4>
                                        <input
                                            style={{ display: "none" }}
                                            type="file"
                                            id="fileLoader"
                                            name="ProfilePhoto"
                                            accept="image/*"
                                            onchange="onFileSelected(event)"
                                        />
                                    </div>
                                    {/* <button class="btn btn-primary btn-block" onclick="openfileDialog();"><b>Upload My Passport Photo</b></button>*/}
                                </div>
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                        __html: "\n              .nav-tabs li > a {\n                color: #C8C8C8;\n              }\n\n              \n             /* .nav-tabs li.active {\n                background-color: #000;\n                color: red;\n              }*/\n            ",
                                    }}
                                />
                                <div className="col-md-12">
                                    <ul className="nav nav-tabs nav-justified">
                                        <li
                                            className={
                                                tabIndex == 1 ? "active" : ""
                                            }
                                        >
                                            <a
                                                style={{ border: "none" }}
                                                href="userProfileDashboard"
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                tabIndex == 2 ? "active" : ""
                                            }
                                        >
                                            <a
                                                style={{ border: "none" }}
                                                href="userProfileProfile"
                                            >
                                                Profile
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                tabIndex == 3 ? "active" : ""
                                            }
                                        >
                                            <a
                                                style={{ border: "none" }}
                                                href="userProfileWorkflow"
                                            >
                                                Workflow
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                tabIndex == 4 ? "active" : ""
                                            }
                                        >
                                            <a
                                                style={{ border: "none" }}
                                                href="userProfileContracts"
                                            >
                                                Contracts
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                tabIndex == 5 ? "active" : ""
                                            }
                                        >
                                            <a
                                                style={{ border: "none" }}
                                                href="userProfilePayments"
                                            >
                                                Payment Portal
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd level  */}

                <div className="row">
                    <div className="col-md-12">
                        {/* Custom Tabs */}
                        <PopupButton
                            text="Schedule"
                            rootElement={document.getElementById("app")}
                            tex
                            url="https://calendly.com/easymagic1/30min"
                            prefill={{
                                email: "easymagic1@gmail.com",
                                firstName: "Nnamdi",
                                lastName: "Alexander",
                                name: "AKL",
                            }}
                        />

                        <CalendlyEventListener
                            onEventScheduled={(e) =>
                                console.log("event-scheduled", e, e.target)
                            }
                            onDateAndTimeSelected={(e) =>
                                console.log(
                                    "date-time-selected",
                                    e,
                                    e.data.payload
                                )
                            }
                        />

                        {/* <CalendlyListener /> */}
                        {/* <InlineWidget   /> */}
                        {children}
                        {/* nav-tabs-custom */}
                    </div>
                    {/* /.col */}
                </div>
            </div>
        </>
    );
};

const Profile = () => {
    return <UserProfileLayout tabIndex={5}>...content...</UserProfileLayout>;
};

Profile.layout = (page) => <Layout children={page} />;

export default Profile;
