<script context="module">
    import { page, useForm } from "@inertiajs/inertia-svelte";
    import MessageNotification from "../Components/MessageNotification.svelte";
</script>

<script>
    //export let name;
    export let message;
    export let error;

    let loginForm = useForm({
        email: "",
        password: "",
    });

    function onResetMessage() {
        message = "";
        $loginForm.clearErrors();
    }

    function loginAction() {
        $loginForm.post("/login");
    }

    //$: console.log(message,error,'m-e');

    // $: if (message != "") {
    //     // closeModal.click();
    //     if (error){
    //         toastr.error(message);
    //     }
    //     if (!error){
    //         toastr.success(message);
    //     }
    //     // toastr.success(message);
    //     message = "";
    //     // console.log(message);
    // }

    // $: if ($loginForm.hasErrors){
    //     for (let i in $loginForm.errors){
    //         toastr.error($loginForm.errors[i]);
    //     }
    //     $loginForm.clearErrors();
    // }
</script>

<MessageNotification
    errors={$loginForm.errors}
    {error}
    {message}
    {onResetMessage}
    hasErrors={$loginForm.hasErrors}
/>

<div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="bg-blue py-4">
            <div class="row px-3">
                <div
                    class="ml-4 ml-sm-5 mb-0 col-sm-6"
                    style="display: inline;"
                >
                    <img
                        alt="logo"
                        src="/asset1/Olade_logo_white.png"
                        style="max-width: 70px; max-height: 50px;"
                    />
                </div>
                <div class="social-contact col-sm-4">
                    <span class="float-right" style="cursor: pointer;">
                        Contact Us
                    </span>
                </div>
            </div>
        </div>
        <div class="row d-flex">
            <div class="col-lg-6  d-none d-lg-block">
                <div class="card1 pb-5">
                    <div
                        class="row px-3 justify-content-center mt-4 mb-5 border-line"
                    >
                        <img
                            alt="logo"
                            src="/asset1/uNGdWHi.png"
                            class="image"
                        />
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    <div
                        class="row px-3 mb-4 justify-content-center"
                        style="text-align: center;"
                    >
                        <div class="line" />
                        <h4 class="or text-center">Sign In</h4>
                        <div class="line" />
                    </div>
                    <form method="post" on:submit|preventDefault={loginAction}>
                        <div class="row px-3">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="mb-1">
                                <h6 class="mb-0 text-sm">Email Address</h6>
                            </label>
                            <input
                                class="mb-4"
                                type="text"
                                name="email"
                                placeholder="Enter a valid email address"
                                required=""
                                bind:value={$loginForm.email}
                            />
                        </div>
                        <div class="row px-3">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="mb-1">
                                <h6 class="mb-0 text-sm">Password</h6>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required=""
                                bind:value={$loginForm.password}
                            />
                        </div>
                        <div class="row px-3 mb-4">
                            <div
                                class="custom-control custom-checkbox custom-control-inline"
                            >
                                <input
                                    id="chk1"
                                    type="checkbox"
                                    name="chk"
                                    class="custom-control-input"
                                />
                                <label
                                    for="chk1"
                                    class="custom-control-label text-sm"
                                    >Remember me</label
                                >
                            </div>
                            <a
                                href="passwordrecovery"
                                class="ml-auto mb-0 text-sm">Forgot Password?</a
                            >
                        </div>
                        <div class="row">
                            <div style="width: 100%;">
                                <button
                                    disabled={$loginForm.processing}
                                    type="submit"
                                    class="btn btn-blue text-center"
                                    style="float: right;">Login</button
                                >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="bg-white py-4">
            <div class="row px-3">
                <small class="ml-4 ml-sm-5 mb-2"
                    >Copyright © 2021. All rights reserved.</small
                >
            </div>
        </div>
    </div>
</div>

<style>
</style>
