<script context="module">
    import Layout from "../Dashboard/Layout.svelte";
    import { page, useForm ,inertia} from "@inertiajs/inertia-svelte";
    import Pagination from "../../components/Pagination.svelte";
    import Page from "../../components/Page.svelte";
    import Modal from "../../components/Modal.svelte";
    import MessageNotification from "../Components/MessageNotification.svelte";

    export const layout = Layout;
</script>

<script>
    // export let list;
    export let message;
    export let error;
    export let auth;
    // export let csrf;

    let mode = "create";

    const resource = '/province/';

    let closeModal = null;

    let form = useForm({
        avatar: "",
        id:"0"
    });

    function selectRow(data) {
        $form.name = data.name;
        $form.id = data.id;
        mode = "update";
    }

    function removeRow(data) {
        if (confirm("Do you want to confirm this action?")) {
            $form.delete(resource + data.id);
        }
    }

    function clearForm() {
        $form.reset();
        mode = "create";
    }

    function updateProfile(){
        $form.put("/my-profile/" + auth.id);
    }

    function callStore() {
        if (mode == "create") {
            $form.post(resource);
        } else {
            $form.put(resource + $form.id);
        }
    }

    function onResetMessage() {
        // toastr.success(message);
        message = "";
        $form.clearErrors();
        // avatarImage.src = null;
    }

    function onCloseModal() {
        // alert('called');
        console.log(closeModal);
        closeModal.click();
    }

    let avatar;
    let avatarImage;

    function openfileDialog() {
                    //   $("#fileLoader").click();
                    // avatarImage.src = null;
                    avatar.value = null;
                    avatar.click();

    }

                  function onFileSelected(event) {
                    //   console.log(event);
                    //   return;
                    var selectedFile = event.target.files[0];
                    var reader = new FileReader();

                    var imgtag = avatarImage; // document.getElementById("myProfileImage");
                    imgtag.title = selectedFile.name;

                    reader.onload = function(event) {
                      imgtag.src = event.target.result;
                    };

                    reader.readAsDataURL(selectedFile);

                    // pushimgover();
                    updateProfile();

                  }

                  function pushimgover()
                  {
                    var file_data = jQuery('#fileLoader').prop('files')[0];
                    var form_data = new FormData();
                    form_data.append('file', file_data);
                   // / alert(form_data);

                     jQuery.ajax({
                        url: '../utility/uploadavatar', // point to server-side PHP script
                        dataType: 'text',  // what to expect back from the PHP script, if anything
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,
                        type: 'post',
                        success: function(ser_rep){
                          //alert(ser_rep);
                          toastr["success"](ser_rep);

                        }
                     });
                  }

</script>

<MessageNotification
    {message}
    {error}
    errors={$form.errors}
    {onResetMessage}
    hasErrors={$form.hasErrors}
    {onCloseModal}
/>

<!-- <Page> -->
    <!-- <span slot="title">My Profile</span> -->
    <!-- <button
        slot="createButton"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#modal-progtype"
        on:click|preventDefault={clearForm}
    >
        <i class="fa fa-plus" /> Add Province
    </button> -->
    <section class="content-header">
        <h1>
            My Profile
            <!-- <small>Version 1.0</small> -->
        </h1>
        <ol class="breadcrumb">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <li><a href="#"><i class="fa fa-dashboard" /> Home</a></li>
            <li class="active">
                My Profile
            </li>
        </ol>
    </section>

    <section class="content">

        <div class="row">

            <div class="col-md-3">

              <!-- Profile Image -->
              <div class="box box-primary">
                <div class="box-body box-profile">


                    <img bind:this={avatarImage} id="myProfileImage" src="/asset1/user2-160x160.jpg" class="profile-user-img img-responsive img-circle" alt="User Profile" width="100" height="100">

                  <h3 class="profile-username text-center">Alex Akamukali</h3>

                  <p class="text-muted text-center"></p>
                  <input bind:value={$form.avatar} bind:this={avatar} style="display: none" type="file" id="fileLoader" name="ProfilePhoto" accept="image/*" on:change={onFileSelected}>


                  <ul class="list-group list-group-unbordered">

                    <li class="list-group-item">
                      <!-- svelte-ignore a11y-missing-attribute -->
                      <b>Contracts</b>
                      <!-- svelte-ignore a11y-invalid-attribute -->
                      <a href="#" class="pull-right">543</a>
                    </li>

                  </ul>

                  <button class="btn btn-primary btn-block" on:click|preventDefault={openfileDialog}><b>Upload My Passport Photo</b></button>

                </div>
                <!-- /.box-body -->
              </div>
              <!-- /.box -->

              <!-- About Me Box -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">About Me</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                  <strong><i class="fa fa-book margin-r-5"></i> Education</strong>

                  <p class="text-muted">

                                  </p>

                  <hr>

                  <strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>

                  <p class="text-muted">  </p>

                  <hr>

                  <strong><i class="fa fa-pencil margin-r-5"></i> Skills</strong>

                  <p>
                    <span class="label label-danger">UI Design</span>
                    <span class="label label-success">Coding</span>
                    <span class="label label-info">Javascript</span>
                    <span class="label label-warning">PHP</span>
                    <span class="label label-primary">Node.js</span>
                  </p>

                  <hr>
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
                  <li class="active"><a href="#biodata" data-toggle="tab" aria-expanded="true">Bio-data</a></li>
                  <li class=""><a href="#myactivity" data-toggle="tab" aria-expanded="false">Activity</a></li>
                  <li class=""><a href="#mydocument" data-toggle="tab" aria-expanded="false">Document</a></li>

                </ul>
                <div class="tab-content">
                   <div class="tab-pane active" id="biodata">
                    <form class="form-horizontal" action="../utility/updatebio" method="post">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="col-md-4">
                              <label for="inputName" class="control-label">First Name <b style="color:red">*</b></label>
                                <input type="text" class="form-control" name="FirstName" id="inputName" value="Alex" placeholder="First Name" required="">
                          </div>
                           <div class="col-md-4">
                              <label for="inputName" class="control-label">Middle Name</label>
                                <input type="text" class="form-control" name="MiddleName" id="inputName" value="" placeholder="Middle Name">
                          </div>
                           <div class="col-md-4">
                              <label for="inputName" class="control-label">Last Name <b style="color:red">*</b></label>
                                <input type="text" class="form-control" name="LastName" id="inputName" value="Akamukali" placeholder="Last Name" required="">
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                           <div class="col-md-4">
                              <label for="inputName" class="control-label">Gender <b style="color:red">*</b></label>
                               <!-- <input type="text" class="form-control" name="Gender" id="inputName" value=""  required > -->
                               <div class="form-control">
                                 <label><input type="radio" name="Gender" value="M" class="flat-green"> Male </label> &nbsp; &nbsp;
                                 <label><input type="radio" name="Gender" value="F" class="flat-green"> Female </label>
                               </div>
                          </div>

                          <div class="col-md-8">
                              <label for="inputName" class="control-label">Profession <b style="color:red">*</b></label>
                                <input type="text" class="form-control" name="Profession" id="inputName" value="" placeholder="e.g : Business Analyst" required="">
                          </div>

                          <div class="col-md-12">
                              <label for="inputName" class="control-label">Education <b style="color:red">*</b></label>
                                <input type="text" class="form-control" name="Education" id="inputName" placeholder="" value="" required="">
                          </div>
                           <div class="col-md-12">
                              <label for="inputName" class="control-label">Address <b style="color:red">*</b></label>
                                <input type="text" class="form-control" name="Address" id="inputName" placeholder="" value="" required="">
                          </div>

                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="col-md-4">
                              <label for="inputName" class="control-label">Date of Birth <b style="color:red">*</b></label>
                                <!--<input type="date" class="form-control" id="inputName" placeholder="Cilck to set date" required > -->
                                <div class="input-group date">
                                  <div class="input-group-addon">
                                    <i class="fa fa-calendar"></i>
                                  </div>
                                  <input type="text" class="form-control pull-right datepicker" placeholder="Click to set date" name="DOB" value="">
                                </div>
                          </div>

                           <div class="col-md-4">
                              <label for="inputName" class="control-label">Phone: <b style="color:red">*</b></label>
                                <input type="tel" class="form-control" name="Phone" id="inputName" value="" placeholder="" data-inputmask="'mask': ['999-999-9999 [x99999]', '+999 99 99 9999[9] 999']" data-mask="" required="">
                          </div>
                           <div class="col-md-4">
                              <label for="inputName" class="control-label">Email <b style="color:red">*</b></label>
                                <input type="text" class="form-control" id="inputName" value="alex.akamukali@proinsight.ca" disabled="">
                          </div>
                        </div>
                      </div>

                     <div class="row">
                      <br>
                      <div class="col-md-3 pull-right">
                          <button type="submit" class="btn btn-primary btn-block">Update Bio-data</button>
                      </div>
                    </div>
                    </form>
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="mydocument">
                   <div class="row">
                     <div class="col-md-12"> <button class="btn btn-success btn-sm pull-right"> <i class="fa fa-plus"></i> Upload Document  </button>  </div>
                   </div>
                    <div class="table-responsive">
                      <table class="table table-stripe">
                        <thead>
                          <tr>
                            <th>Doc ID</th>
                            <th>Doc Type</th>
                            <th>Doc Title</th>
                            <th> &nbsp; </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> doc-3903 </td>
                            <td> Resume </td>
                            <td> My First Resume </td>
                            <td>
                              <i class="fa fa-download text-blue"></i> &nbsp; &nbsp;
                              <i class="fa fa-edit text-blue"></i>
                            </td>
                          </tr>
                        </tbody>

                      </table>
                    </div>



                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="myactivity">

                    <!-- The timeline -->
                    <ul class="timeline timeline-inverse">


                      <li>
                        <i class="fa fa-clock-o bg-gray"></i>
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




      <Modal id="modal-progtype"  on:submit={callStore} on:setRef={(ref)=>closeModal=ref.detail}>
        <span slot="title">Province</span>

        <div class="col-md-12" slot="content">
            <div class="col-md-12">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="control-label"
                    >Name <b style="color:red">*</b></label
                >
                <input
                    type="text"
                    class="form-control"
                    name="proTitle"
                    placeholder=""
                    required=""
                    bind:value={$form.name}
                />
            </div>

        </div>

        <button type="submit" class="btn btn-primary" slot="storeButton">
            <i class="fa fa-save" /> &nbsp; {mode == "create"
                ? "Add Province"
                : "Update Province"}
        </button>
      </Modal>
<!-- </Page> -->








