<script>
    export let currentTab;
    export let user;
    export let title;
    console.log(currentTab,user);
</script>
<section class="content-header">
    <h1>
        <!-- User Profile -->
            {title}
        <small>
            <!-- Version 1.0 -->
        </small>
    </h1>
    <ol class="breadcrumb">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a href="#"><i class="fa fa-dashboard" /> Home</a></li>
        <li class="active">
            {title}
        </li>
    </ol>
</section>

<section class="content">
    <div class="row">



        <div class="col-md-12">
            <div class="box">
                <div class="row">

                    <div class="col-md-12" style="text-align: right;">
                        <button style="margin: 11px;" class="btn btn-sm btn-primary" on:click={()=>window.history.back()}>Back</button>
                    </div>


                    <div class="col-md-12">
                        <img
                            id="myProfileImage"
                            src="/asset1/user2-160x160.jpg"
                            class="profile-user-img img-responsive img-circle"
                            alt="User Profile"
                            style="width:70px; height:70px; margin-left:5px; display: inline-block; margin-top:-27px"
                        />
                        <div
                            style="display: inline-block; margin: 12px;  font-family: 'Arial Rounded MT Bold'"
                        >
                            <h3
                                style="color:#073367; font-weight: 700; text-transform:capitalize;"
                            >
                                {user.name}
                            </h3>
                            <h4
                                class="text-muted"
                                style="text-transform:capitalize;"
                            >
                                &nbsp;
                            </h4>
                            <input
                                style="display: none"
                                type="file"
                                id="fileLoader"
                                name="ProfilePhoto"
                                accept="image/*"
                                onchange="onFileSelected(event)"
                            />
                        </div>

                        <!-- <button class="btn btn-primary btn-block" onclick="openfileDialog();"><b>Upload My Passport Photo</b></button>-->
                    </div>

                    <div class="col-md-12">
                        <ul class="nav nav-tabs nav-justified">
                            <li  class={currentTab == "dashboard"? 'active':''}>
                                <a
                                    style="border: none"
                                    href="userProfileDashboard">Dashboard</a
                                >
                            </li>
                            <li class={currentTab == "profile"? 'active':''}>
                                <a
                                    style="border: none"
                                    href="userProfileProfile">Profile</a
                                >
                            </li>
                            <li class={currentTab == "workflow"? 'active':''}>
                                <a
                                    style="border: none"
                                    href="userProfileWorkflow">Workflow</a
                                >
                            </li>
                            <li class={currentTab == "contracts"? 'active':''}>
                                <a
                                    style="border: none"
                                    href="userProfileContracts">Contracts</a
                                >
                            </li>
                            <li class={currentTab == "payment-portal"? 'active':''}>
                                <a
                                    style="border: none"
                                    href="userProfilePayments">Payment Portal</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- START CUSTOM TABS -->

    <div class="row">
        <div class="col-md-12">
            <div class="box box-default">

                <slot />

            </div>
        </div>
    </div>
    <!-- /.row -->
    <!-- END CUSTOM TABS -->
</section>

<!------- SHIFT STYLE --------------->
<style type="text/css">
    /* .info-box {
        padding-left: 5px;
    }
    .icon-plate {
        font-size: 27px;
        display: inline-block;
        background: #fef0f1;
        padding: 8px;
        width: 64px;
        height: 64px;
        position: relative;
        border-radius: 50%;
        margin-top: 3px;
    }
    .dash-icon {
        color: #f8989f;
        margin-top: 10px;
        margin-left: 10px;
    }

    .dash-info {
        display: inline-block;
        margin-left: 12px;
    }

    .dash-num {
        font-size: 23px;
        margin-top: 3px;
    } */

    .nav-tabs li > a {
        color: #c8c8c8;
    }

    /* .boxTText {
        font-size: 15px;
        color: #5f7a9c;
    }
    .headTText {
        font-size: 14px;
        color: #4f4f4f;
        font-weight: 700;
    }
    .box-header {
        border: 1px solid #bfd7dd;
    }

    .panel {
        margin-bottom: 5px;
    } */

    .nav-tabs > li {
        border-bottom: 3px solid #c0c0c0;
        color: #c0c0c0;
        text-transform: uppercase;
        font-weight: 800;
    }

    .nav-tabs > li.active {
        border-bottom: 3px solid #073367;
        color: #073367;
        text-transform: uppercase;
        font-weight: 800;
    }

    .active a{
        color: #555 !important;
    }
</style>
