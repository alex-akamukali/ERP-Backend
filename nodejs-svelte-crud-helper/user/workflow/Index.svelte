<script context="module">
  import UserProfile from "../user-profile/Index.svelte";
</script>
<script>
  export let currentTab;
  export let user;
  export let title;
</script>
<UserProfile {title} {user} currentTab="workflow">
    <div class="nav-tabs-custom">
        <ul class="nav nav-pills nav-justified">

            <!-- svelte-ignore a11y-invalid-attribute -->
            <li class={currentTab == "assessment"? "active":""}>
                <a href=""> <b> Assessment </b></a>
            </li>

            <!-- svelte-ignore a11y-invalid-attribute -->
          <li class={currentTab == "job-profile"? "active":""}>
            <a href=""> <b> Job Profile </b> </a>
          </li>

          <!-- svelte-ignore a11y-invalid-attribute -->
          <li class={currentTab == "job-application"? "active":""}>
            <a href=""> <b> Job Application </b> </a>
          </li>

          <!-- svelte-ignore a11y-invalid-attribute -->
          <li class={currentTab == "onboarding"? "active":""}>
             <a href=""> <b> Onboarding </b> </a>
          </li>

        </ul>
        <div class="tab-content">
          <div class="tab-pane active" id="tab_1">

    <div class="row">
    <div class="col-md-12">


      <div class="box box-solid">

      <slot />

        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->

    </div>
    <!-- /.row -->
    <!-- END ACCORDION-->

          </div>
          <!-- /.tab-pane -->
          <div class="tab-pane" id="tab_2">
           ///
          </div>
          <!-- /.tab-pane -->
          <div class="tab-pane" id="tab_3">
            ///
          </div>
          <!-- /.tab-pane -->

           <div class="tab-pane" id="tab_4">
            ////
          </div>
          <!-- /.tab-pane -->
        </div>
        <!-- /.tab-content -->
      </div>

</UserProfile>
