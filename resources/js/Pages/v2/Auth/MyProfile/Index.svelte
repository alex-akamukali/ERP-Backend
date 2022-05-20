<script context="module">
    import MyProfileAvatar from "../../Auth/UploadAvatar/Index.svelte";
    import MyProfileSkills from "../../Auth/UpdateUserSkill/Index.svelte";
    import MyDocument from "../../Auth/MyDocument/Index.svelte";

    import {
        Modal,
        Page,
        useForm,
        page,
        inertia,
        Layout,
    } from "nodejs-svelte-crud-helper";
    export const layout = Layout;
</script>

<script>
    // export let list;
    export let my_documents;
    //my_documents
    export let auth;
    export let types;
    // export let csrf;
</script>

<section class="content-header">
    <h1>
        My Profile
        <!-- <small>Version 1.0</small> -->
    </h1>
    <ol class="breadcrumb">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a href="#"><i class="fa fa-dashboard" /> Home</a></li>
        <li class="active">My Profile</li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-3">
            <!-- Profile Image -->
            <!-- box -->
            <MyProfileAvatar user={auth} />
            <!-- /.box-body -->

            <!-- /.box -->

            <!-- About Me Box -->
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">About Me</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <strong
                        ><i class="fa fa-book margin-r-5" /> Education</strong
                    >

                    <p class="text-muted" />

                    <hr />

                    <strong
                        ><i class="fa fa-map-marker margin-r-5" /> Location</strong
                    >

                    <p class="text-muted" />

                    <hr />

                    <strong><i class="fa fa-pencil margin-r-5" /> Skills</strong
                    >

                    <MyProfileSkills skills={auth.skills} userId={auth.id} />

                    <!-- <p>
                    <span class="label label-danger">UI Design</span>
                    <span class="label label-success">Coding</span>
                    <span class="label label-info">Javascript</span>
                    <span class="label label-warning">PHP</span>
                    <span class="label label-primary">Node.js</span>
                  </p> -->

                    <hr />
                    <!--
                  <strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                -->
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a
                            href="#biodata"
                            data-toggle="tab"
                            aria-expanded="true">Bio-data</a
                        >
                    </li>
                    <li class="">
                        <a
                            href="#myactivity"
                            data-toggle="tab"
                            aria-expanded="false">Activity</a
                        >
                    </li>
                    <li class="">
                        <a
                            href="#mydocument"
                            data-toggle="tab"
                            aria-expanded="false">Document</a
                        >
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="biodata">
                        <form
                            class="form-horizontal"
                            action="../utility/updatebio"
                            method="post"
                        >
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col-md-4">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >First Name <b style="color:red"
                                                >*</b
                                            ></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="FirstName"
                                            id="inputName"
                                            value="Alex"
                                            placeholder="First Name"
                                            required=""
                                        />
                                    </div>
                                    <div class="col-md-4">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Middle Name</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="MiddleName"
                                            id="inputName"
                                            value=""
                                            placeholder="Middle Name"
                                        />
                                    </div>
                                    <div class="col-md-4">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Last Name <b style="color:red">*</b
                                            ></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="LastName"
                                            id="inputName"
                                            value="Akamukali"
                                            placeholder="Last Name"
                                            required=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col-md-4">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Gender <b style="color:red">*</b
                                            ></label
                                        >
                                        <!-- <input type="text" class="form-control" name="Gender" id="inputName" value=""  required > -->
                                        <div class="form-control">
                                            <label
                                                ><input
                                                    type="radio"
                                                    name="Gender"
                                                    value="M"
                                                    class="flat-green"
                                                /> Male
                                            </label>
                                            &nbsp; &nbsp;
                                            <label
                                                ><input
                                                    type="radio"
                                                    name="Gender"
                                                    value="F"
                                                    class="flat-green"
                                                /> Female
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-md-8">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Profession <b style="color:red"
                                                >*</b
                                            ></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="Profession"
                                            id="inputName"
                                            value=""
                                            placeholder="e.g : Business Analyst"
                                            required=""
                                        />
                                    </div>

                                    <div class="col-md-12">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Education <b style="color:red">*</b
                                            ></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="Education"
                                            id="inputName"
                                            placeholder=""
                                            value=""
                                            required=""
                                        />
                                    </div>
                                    <div class="col-md-12">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Address <b style="color:red">*</b
                                            ></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="Address"
                                            id="inputName"
                                            placeholder=""
                                            value=""
                                            required=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col-md-4">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Date of Birth <b style="color:red"
                                                >*</b
                                            ></label
                                        >
                                        <!--<input type="date" class="form-control" id="inputName" placeholder="Cilck to set date" required > -->
                                        <div class="input-group date">
                                            <div class="input-group-addon">
                                                <i class="fa fa-calendar" />
                                            </div>
                                            <input
                                                type="text"
                                                class="form-control pull-right datepicker"
                                                placeholder="Click to set date"
                                                name="DOB"
                                                value=""
                                            />
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Phone: <b style="color:red">*</b
                                            ></label
                                        >
                                        <input
                                            type="tel"
                                            class="form-control"
                                            name="Phone"
                                            id="inputName"
                                            value=""
                                            placeholder=""
                                            data-inputmask="'mask': ['999-999-9999 [x99999]', '+999 99 99 9999[9] 999']"
                                            data-mask=""
                                            required=""
                                        />
                                    </div>
                                    <div class="col-md-4">
                                        <label
                                            for="inputName"
                                            class="control-label"
                                            >Email <b style="color:red">*</b
                                            ></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="inputName"
                                            value="alex.akamukali@proinsight.ca"
                                            disabled=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <br />
                                <div class="col-md-3 pull-right">
                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-block"
                                        >Update Bio-data</button
                                    >
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="mydocument">
                        <!-- my documents -->
                        <MyDocument
                            user_id={auth.id}
                            list={my_documents}
                            {types}
                        />
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="myactivity">
                        <!-- The timeline -->
                        <ul class="timeline timeline-inverse">
                            <li>
                                <i class="fa fa-clock-o bg-gray" />
                            </li>
                        </ul>
                    </div>
                    <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
            </div>
            <!-- /.nav-tabs-custom -->
        </div>
        <!-- /.col -->
    </div>
</section>

<!-- </Page> -->
