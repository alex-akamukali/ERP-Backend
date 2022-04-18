import { useForm, usePage } from "@inertiajs/inertia-react";
import _ from "lodash";
import { useEffect } from "react";

const Layout = ({ children }) => {
    const { logo_white } = usePage().props;
    return (
        <>
            <div>
                {logo_white}
                {children}
            </div>
        </>
    );
};
const Login = ({ logo_white, login_form_image, login_route ,csrf , message2 , message , flash}) => {

    const { data, setData, post } = useForm({
        email: "",
        password: "",
        _token:csrf
    });

    // console.log(flash,'...Flash...');

    // console.log(message2,'msg2',message);
    useEffect(()=>{
        if (flash.message){
            swal({ title: "", text: flash.message, icon: "error"  });
            // console.log('message',flash.message,'changed...');
        }
    },[flash]);
    return (
        <>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="bg-blue py-4">
                        <div className="row px-3">
                            <div
                                className="ml-4 ml-sm-5 mb-0 col-sm-6"
                                style={{ display: "inline" }}
                            >
                                {" "}
                                <img
                                    src={logo_white}
                                    style={{
                                        maxWidth: "70px",
                                        maxHeight: "50px",
                                    }}
                                />{" "}
                            </div>
                            <div className="social-contact col-sm-4">
                                {" "}
                                <span
                                    className="float-right"
                                    style={{ cursor: "pointer" }}
                                >
                                    {" "}
                                    Contact Us{" "}
                                </span>{" "}
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-lg-6  d-none d-lg-block">
                            <div className="card1 pb-5">
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    {" "}
                                    <img
                                        src={login_form_image}
                                        className="image"
                                    />{" "}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                {/*  <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div class="facebook text-center mr-3">
                            <div class="fa fa-facebook"></div>
                        </div>
                        <div class="twitter text-center mr-3">
                            <div class="fa fa-twitter"></div>
                        </div>
                        <div class="linkedin text-center mr-3">
                            <div class="fa fa-linkedin"></div>
                        </div>
                    </div>*/}
                                <div
                                    className="row px-3 mb-4 justify-content-center"
                                    style={{ textAlign: "center" }}
                                >
                                    <div className="line" />{" "}
                                    <h4 className="or text-center">Sign In</h4>
                                    <div className="line" />
                                </div>
                                <form method="post" onSubmit={(e) => {
                                    e.preventDefault();
                                    post(login_route,{...data});
                                }}>
                                    <div className="row px-3">
                                        {" "}
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">
                                                Email Address
                                            </h6>
                                        </label>{" "}
                                        <input
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="mb-4"
                                            type="text"
                                            name="username"
                                            placeholder="Enter a valid email address"
                                            required
                                        />{" "}
                                    </div>
                                    <div className="row px-3">
                                        {" "}
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">
                                                Password
                                            </h6>
                                        </label>{" "}
                                        <input
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            required
                                        />{" "}
                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            {" "}
                                            <input
                                                id="chk1"
                                                type="checkbox"
                                                name="chk"
                                                className="custom-control-input"
                                            />{" "}
                                            <label
                                                htmlFor="chk1"
                                                className="custom-control-label text-sm"
                                            >
                                                Remember me
                                            </label>{" "}
                                        </div>{" "}
                                        <a
                                            href="passwordrecovery"
                                            className="ml-auto mb-0 text-sm"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="row">
                                        {" "}
                                        <div style={{ width: "100%" }}>
                                            <button
                                                type="submit"
                                                className="btn btn-blue text-center"
                                                style={{ float: "right" }}
                                            >
                                                Login
                                            </button>{" "}
                                        </div>{" "}
                                    </div>
                                </form>
                                {/*<div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small> </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-4">
                        <div className="row px-3">
                            {" "}
                            <small className="ml-4 ml-sm-5 mb-2">
                                Copyright © 2021. All rights reserved.
                            </small>
                            {/* <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> */}{" "}
                        </div>
                    </div>{" "}
                </div>
            </div>
        </>
    );
};
// Login.layout =(page)=><Layout children={page} />
export default Login;
