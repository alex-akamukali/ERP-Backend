<script context="module">
    import {page} from "@inertiajs/inertia-svelte";
    // import Layout from "../Dashboard/Layout.svelte";
    // export const layout = Layout;
  </script>

  <script>
      const {user_logo,user} = $page.props;
      export let userName;
      export let tabIndex = 1;
  </script>

  <style type="text/css">
      /* .info-box{
          padding-left:5px;
      }
      .icon-plate {
          font-size:27px; display: inline-block; background: #FEF0F1; padding: 8px; width:64px; height: 64px; position: relative; border-radius: 50%; margin-top:3px;
      }
      .dash-icon {
          color: #F8989F; margin-top:10px; margin-left:10px;
      }

      .dash-info {
          display: inline-block; margin-left:12px;
      }

      .dash-num {
          font-size:23px; margin-top:3px;
      } */
      .nav-tabs > li {
    border-bottom: 3px solid #C0C0C0;
    color: #C0C0C0;
    text-transform: uppercase; font-weight: 800;
  }

   .nav-tabs > li.active  {
    border-bottom: 3px solid #073367;
    color: #073367;
    text-transform: uppercase; font-weight: 800;
  }

              .nav-tabs li > a {
                color: #C8C8C8;
              }


    </style>


  <section class="content-header">
      <h1>
       User Profile
        <small>Version 1.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="./"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">User Profile</li>
      </ol>
    </section>

    <section class="content">

  <div class="row">
        <div class="col-md-12">
          <div class="box">
           <div class="row">
            <div class="col-md-12">

              <img id="myProfileImage" src={user_logo} class="profile-user-img img-responsive img-circle" alt="User Profile" style="width:70px; height:70px; margin-left:5px; display: inline-block; margin-top:-27px" onclick="openfileDialog();">
              <div style="display: inline-block; margin: 12px;  font-family: 'Arial Rounded MT Bold'">
                 <h3 style="color:#073367; font-weight: 700; text-transform:capitalize;">
                     {userName}
                 </h3>
                 <h4 class="text-muted" style="text-transform:capitalize;">  &nbsp; </h4>
                  <input style="display: none" type="file" id="fileLoader" name="ProfilePhoto" accept="image/*" onchange="onFileSelected(event)">
              </div>

             <!-- <button class="btn btn-primary btn-block" onclick="openfileDialog();"><b>Upload My Passport Photo</b></button>-->


            </div>

            <div class="col-md-12">
                <ul class="nav nav-tabs nav-justified">
                  <li class={tabIndex == 1? 'active':''} ><a style="border: none" href={null}>Dashboard</a></li>
                  <li  class={tabIndex == 2? 'active':''} ><a style="border: none" href={null}>Profile</a></li>
                  <li  class={tabIndex == 3? 'active':''} ><a style="border: none" href={null}>Workflow</a></li>
                  <li  class={tabIndex == 4? 'active':''} ><a style="border: none" href={null}>Contracts</a></li>
                  <li  class={tabIndex == 5? 'active':''} ><a style="border: none" href={null}>Payment Portal</a></li>
                </ul>
            </div>
          </div>


         </div>


      </div>

    </div>     <!-- START CUSTOM TABS -->

      <div class="row">

       <slot />

      </div>
      <!-- /.row -->
      <!-- END CUSTOM TABS -->

    </section>
