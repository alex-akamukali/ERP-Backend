<script context="module">
    import { page, useForm } from "@inertiajs/inertia-svelte";
    import MessageNotification from "../../../Components/MessageNotification.svelte";
</script>

<script>

    let loginForm = useForm({
        email: "",
        password: "",
    });

    function loginAction() {
        $loginForm.post("/login");
    }
</script>

<MessageNotification />
<span
    class="hold-transition login-page"
    style="display: block; height: 126vh;padding-top: 16px;"
>
    <div class="login-box2">
        <div class="login-logo">
            <!-- {asset} -->
            <!-- <a href="null"><b>Admin</b>LTE</a> -->
        </div>

        <!-- /.login-logo -->

        <div class="col-md-12" style="padding:5px;">
            <div class="col-md-12" style="background-color: #fff;">
                <div class="row" style="box-shadow: 3px 3px #ccc;height: 600px;">
                    <div
                        class="col-md-12"
                        style="background-color: #093F82;height: 92px;"
                    >
                        <div class="row" style="">
                            <div class="col-md-6" style="padding-top: 11px;">
                                <img
                                    alt="img"
                                    src="/asset1/Olade_logo_white.png"
                                    style="height: 55px;"
                                />
                            </div>
                            <div class="col-md-6">
                                <a
                                    href={''}
                                    style="color: #fff;font-size: 17px;font-weight: bold;position: relative;top: 27px;float: right;"
                                    >Contact Us</a
                                >
                            </div>
                        </div>

                        &nbsp;
                    </div>

                    <div class="col-md-6">
                        <img
                            alt="img"
                            src="/asset1/uNGdWHi.png"
                            style="max-width: 100%;"
                        />
                    </div>
                    <div class="col-md-6" style="border-left: 1px solid #ddd;">
                        <div class="login-box-body">
                            <p
                                class="login-box-msg"
                                style="font-weight: bold; font-size: 22px;color: #093F82;"
                            >
                                <span class="line" />
                                Sign In
                                <span class="line" />
                            </p>
                            <form
                                method="post"
                                on:submit|preventDefault={loginAction}
                            >
                            <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group has-feedback">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Email"
                                        bind:value={$loginForm.email}
                                    />
                                    <span
                                        class="glyphicon glyphicon-envelope form-control-feedback"
                                    />
                                </div>
                                <div class="form-group has-feedback">
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Password"
                                        bind:value={$loginForm.password}
                                    />
                                    <span
                                        class="glyphicon glyphicon-lock form-control-feedback"
                                    />
                                </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="">
                                        <label>
                                            <input type="checkbox" /> Remember
                                            Me
                                        </label>
                                    </div>

                                </div>
                                <div class="col-md-6">
                                    <a href={''} style="float: right;margin-bottom: 11px;font-weight: bold;">I forgot my password</a><br />
                                </div>
                            </div>

                                <div class="row">
                                    <div class="col-xs-8">
                                    </div>
                                    <!-- /.col -->
                                    <div class="col-xs-4">

                                        <button
                                            style="background: #093F82;margin-top: 15px;"
                                            type="submit"
                                            class="btn btn-primary btn-block btn-flat"
                                            >Sign In</button
                                        >
                                    </div>
                                    <!-- /.col -->
                                </div>
                            </form>

                        </div>
                        <!-- /.login-box-body -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.login-box -->
</span>

<style>
    .line {
        display: inline-block;
        border-top: 1px solid #aaa;
        height: 2px;
        width: 10%;
        position: relative;
        top: -2px;
    }
</style>
