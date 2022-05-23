<script context="module">
    import UserManagement from "nodejs-svelte-crud-helper/user/user-profile/Index.svelte";
    import { Layout, useForm } from "nodejs-svelte-crud-helper";
    export const layout = Layout;
</script>

<script>
    export let data;
    //export let name;
</script>

<UserManagement user={data} title="User Profile." currentTab="dashboard">



          <div class="box-body" style="background: #EEF1F6">
            <div class="col-md-12">
                <div class="col-md-6">
                      <!-- small box -->
                         <div class="info-box bg-white">
                           <div class="inner">
                             <h3>Project Management</h3>

                             <p>Joined 2022, March 09</p>
                           </div>
                           <div>
                                No Signed Contract				            </div>

                         </div>

                </div>
                <div class="col-md-6">

              <div class="col-md-6">

                <div class="info-box">

                 <div class="icon-plate" style="background: #EFECFD">
                 <i class="fa fa-file-o dash-icon" style="color:#8D78F1"></i>
                 </div>

                   <div class="dash-info">
                     <div class="dash-num">5/5</div>
                     <span>Assessment</span>
                   </div>
               </div>
              </div>


              <div class="col-md-6">

                <div class="info-box">

                 <div class="icon-plate" style="background:#E7F7F9 ">
                 <i class="fa fa-list dash-icon" style="color:#36BECD"></i>
                 </div>

                   <div class="dash-info">
                     <div class="dash-num">5/5</div>
                     <span>Profile</span>
                   </div>
               </div>
              </div>


              <div class="col-md-6">

                <div class="info-box">

                 <div class="icon-plate">
                 <i class="fa fa-send-o dash-icon"></i>
                 </div>

                   <div class="dash-info">
                     <div class="dash-num">0/2</div>
                     <span>Applications</span>
                   </div>
               </div>
              </div>


                  <div class="col-md-6">

                <div class="info-box">

                 <div class="icon-plate">
                 <i class="fa fa-suitcase dash-icon"></i>
                 </div>

                   <div class="dash-info">
                     <div class="dash-num">1/3</div>
                     <span>Onboarding</span>
                   </div>
                   <!-- /.info-box-content -->
               </div>
              <!-- /.info-box -->
              </div>




             </div>
            </div>
          </div>

</UserManagement>

<!------- SHIFT STYLE --------------->
<style type="text/css">
    .info-box{
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
    }
 </style>
