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

        <!-- /.box-header -->
        <div class="box-body">
           <div class="row">
                      <div class="col-md-12">
                        <div class="col-md-4"> <span class="boxTText">  Stage </span> </div>
                        <div class="col-md-4"> <span class="boxTText"> Date </span> </div>
                        <div class="col-md-4"> <span class="boxTText pull-right"> Activity Status </span> </div>
                      </div>
                </div>
          <div class="box-group" id="accordion">
            <!-- we are adding the .panel class so bootstrap.js collapse plugin detects it -->
            <div class="panel">
              <a data-toggle="collapse" data-parent="#accordion" href="#userAssessment" class="collapsed" aria-expanded="false">
              <div class="box-header">
                <div class="row">
                      <div class="col-md-12">
                        <div class="col-md-4 col-sm-4"> <span class="headTText"> Pre-employment Assessment </span> </div>
                        <div class="col-md-4"> <span class="headTText"> 2022-03-09 </span> </div>
                        <div class="col-md-4"> <span class="headTText pull-right"> <b class="text-green">Active</b>  </span> </div>
                      </div>
                </div>
              </div>
              </a>

              <div id="userAssessment" class="panel-collapse collapse" aria-expanded="false" style="height: 198px;">
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="col-md-4">
                        <button type="button" class="btn btn-primary btn-block" style="width:150px" meetingtype="Pre-employement Assessment" usx="c2aa1951a32f33b047954754f0ae" onclick="setMeetingType(this)"> <i class="fa fa-handshake-o"></i> Propose Meeting </button>
                      </div>
                      <div class="col-md-8">
                        <div class="table-responsive">
                        <table class="table table-stripe">
                          <thead><tr><th>Assessment Date</th><th>Duration</th><th>Status</th></tr></thead>
                            <tbody>
                              <tr class="warning"><td>16-04-2022 11:30 PM</td><td>0:00</td><td>Raised by Admin</td></tr><tr class="warning"><td>14-03-2022 9:00 PM</td><td>0:00</td><td>Raised by Admin</td></tr><tr class="success"><td>9-03-2022 9:45 PM</td><td>0:00</td><td>Accepted &nbsp; &nbsp; <a target="_blank" href="https://us06web.zoom.us/j/86011459210?pwd=dzVSci8zWnoxbkU0K2p5dlM1d0VPUT09"> <button class="btn-sm btn btn-primary"> Join meeting <i class="fa fa-comments text-green"></i> </button> </a></td></tr>                              </tbody>
                        </table>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel">
              <a data-toggle="collapse" data-parent="#accordion" href="#examCompleted" class="collapsed" aria-expanded="false">

              <div class="box-header">
                   <div class="row">
                      <div class="col-md-12">
                        <div class="col-md-4"> <span class="headTText"> Assessment Result </span> </div>
                        <div class="col-md-4"> <span class="headTText"> 2022-04-19 </span> </div>
                        <div class="col-md-4"> <span class="headTText pull-right"> <b class="text-green">Active</b>  </span> </div>
                      </div>
                    </div>
              </div>
              </a>

              <div id="examCompleted" class="panel-collapse collapse" aria-expanded="false">
                <div class="box-body">

                   <div class="row">
                    <div class="col-md-12">
                      <div class="col-md-3">

                      </div>

                      <div class="col-md-12">
                           <form method="post">
                            <div class="col-md-3">
                               <div class="form-group">
                                 <label for="inputName" class="control-label"> Program Type </label>

                                 <!-- svelte-ignore a11y-label-has-associated-control -->
                                 <label class="form-control"> <b style="color:green"> Project Management </b> </label>
                               </div>
                            </div>
                            <div class="col-md-2">
                               <div class="form-group">
                                 <label for="inputName" class="control-label"> Exam Type </label>
                                 <select name="KAType" class="form-control" onchange="setKAByType(this)" required="">
                                  <option value="">--</option>
                                  <option>Internal</option>
                                  <option>External</option>
                                 </select>
                               </div>
                               <input type="hidden" value="c2aa1951a32f33b047954754f0ae" name="usx">
                             </div>

                             <div class="col-md-3">
                               <div class="form-group">
                                 <label for="inputName" class="control-label"> Knowledge Area </label>
                                 <select id="mKA" name="KA" class="form-control" required="">
                                  <option value="">--</option>

                                 </select>
                               </div>
                               <input type="hidden" value="c2aa1951a32f33b047954754f0ae" name="usx">
                             </div>

                               <div class="col-md-2">
                               <div class="form-group">
                                 <!-- svelte-ignore a11y-label-has-associated-control -->
                                 <label class="control-label"> &nbsp; </label>
                                 <button type="button" class="btn btn-primary btn-sm form-control"> <i class="fa fa-plus"></i> Add </button>
                               </div>
                             </div>
                             </form>
                        </div>

                      <div class="col-md-12">

                        <div class="table-responsive">
                          <!--<label>Program Type : <b style="color:green"> Project Management </b></label> <br/>
                          <label>Knowledge Area Type : <select class="form-control"> <option>---</option> <option>Internal</option> <option>External</option> </select></label> <br/>
                           <label>Knowledge Area : <select class="form-control" id="LoadKA">   </select></label> <br/> -->

                        <table class="table table-bordered table-hover table-striped">

                          <thead><tr><th>Knowledge Area</th><th> No. of Quest. </th> <th> No. of Correct Answer  </th><th> Score </th></tr></thead>
                          <tbody>
                            <tr><td>Project integration management</td> <td>10</td>  <td> <input style="width:40px" class="IsNumber" type="text" pmf="2" kmf="7" nq="10" nm="20" usx="c2aa1951a32f33b047954754f0ae" oninput="updateKAScore(this)" value="10">  </td> <td id="fresult-7"> 100% </td></tr><tr><td>Project scope management</td> <td>20</td>  <td> <input style="width:40px" class="IsNumber" type="text" pmf="2" kmf="8" nq="20" nm="5" usx="c2aa1951a32f33b047954754f0ae" oninput="updateKAScore(this)" value="9">  </td> <td id="fresult-8"> 45% </td></tr><tr><td>Project time management</td> <td>50</td>  <td> <input style="width:40px" class="IsNumber" type="text" pmf="2" kmf="9" nq="50" nm="0" usx="c2aa1951a32f33b047954754f0ae" oninput="updateKAScore(this)" value="30">  </td> <td id="fresult-9"> 60% </td></tr>                              <!-- <tr><td>Project Management</td><td>Project integration management</td><td>10</td></tr><tr><td>Project Management</td><td>Project scope management</td><td>9</td></tr><tr><td>Project Management</td><td>Project time management</td><td>30</td></tr> -->

                          </tbody>
                        </table>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Start of Panel -->
            <div class="panel">
              <a data-toggle="collapse" data-parent="#accordion" href="#schInterviewAssess" class="collapsed" aria-expanded="false">
              <div class="box-header">
                <div class="row">
                      <div class="col-md-12">
                        <div class="col-md-4"> <span class="headTText"> Assessment Interview </span> </div>
    <div class="col-md-4"> <span class="headTText">  </span> </div>
                        <div class="col-md-4"> <span class="headTText pull-right"> Pending  </span> </div>
                      </div>
                </div>
              </div>
              </a>

              <div id="schInterviewAssess" class="panel-collapse collapse" aria-expanded="false">
                <div class="box-body">
                 <div class="row">
                    <div class="col-md-12">

                      <div class="col-md-12">
                      <div class="col-md-4">
                        <button type="button" class="btn btn-primary btn-block" style="width:150px" meetingtype="Assessment Interview" usx="c2aa1951a32f33b047954754f0ae" onclick="setMeetingType(this)"> <i class="fa fa-handshake-o"></i> Propose Meeting </button>
                      </div>
                      <div class="col-md-8">
                        <div class="table-responsive">
                        <table class="table table-stripe">
                          <thead><tr><th>Interview Date</th><th>Duration</th><th>Status</th></tr></thead>
                            <tbody>
                                                            </tbody>
                        </table>
                        </div>

                      </div>
                    </div>

                      <div class="col-md-12">

                       <div class="form-group">
                         <label class="text-green"><input type="radio" usx="c2aa1951a32f33b047954754f0ae" onclick="chkResultRec(this)" name="AssessmentRt" value="accP" class="flat-green" checked=""> Pass </label>
                         &nbsp; &nbsp;  &nbsp;
                         <label class="text-danger"><input type="radio" usx="c2aa1951a32f33b047954754f0ae" onclick="chkResultRec(this)" name="AssessmentRt" value="accF" class="flat-green"> Failed </label>

                       </div>
                      </div>




                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END of Panel -->

             <!-- Start of Panel -->
            <div class="panel">
              <a data-toggle="collapse" data-parent="#accordion" href="#ServiceAgreement" class="collapsed" aria-expanded="false">
              <div class="box-header">
                <div class="row">
                      <div class="col-md-12">
                        <div class="col-md-4"> <span class="headTText"> Service Agreement</span> </div>
                        <div class="col-md-4"> <span class="headTText"> 2022-03-14 </span> </div>
                        <div class="col-md-4"> <span class="headTText pull-right">
                                                     Pending

                       </span> </div>
                      </div>
                </div>
              </div>
              </a>

              <div id="ServiceAgreement" class="panel-collapse collapse" aria-expanded="false">
                <div class="box-body">
                  <div class="row">
                    <div class="col-md-12">

                      <div class="col-md-12">
                      <form method="post" action="../utility/sendDocuSignContract">
                       <div class="col-md-4">
                         <div class="form-group">
                           <label for="inputName" class="control-label"> Olade Consulting Contract with Candidate </label>
                           <select name="oladeContract" class="form-control" required="">
                            <option value="">--</option>
                            <option value="1">2 Years Contract</option><option value="2">1 Year Contract (External)</option><option value="3">Part tine</option><option value="4">Part tine</option>                               </select>
                         </div>
                         <input type="hidden" value="c2aa1951a32f33b047954754f0ae" name="usx">
                       </div>
                       <!-- <div class="col-md-4">
                         <div class="form-group">
                           <label for="inputName" class="control-label"> Contract Status </label>
                           <label class="form-control"> Pending </label>
                         </div>
                       </div> -->
                         <div class="col-md-2">
                         <div class="form-group">
                           <!-- svelte-ignore a11y-label-has-associated-control -->
                           <label class="control-label"> &nbsp; </label>
                           <button type="submit" class="btn btn-primary form-control"> Send </button>
                         </div>
                       </div>
                       </form>
                      <!-- <div class="col-md-2">
                         <div class="form-group">
                          <label  class="control-label"> &nbsp; </label>
                           <label class="control-label"> <i class="fa fa-eye text-green"></i> Preview </label> &nbsp; &nbsp;
                           <label class="control-label"> <i class="fa fa-edit text-info"></i> Edit </label>
                         </div>
                       </div> -->

                      </div>

                      <div class="col-md-12">
                        <table class="table table-striped">
                          <thead><tr><th>S/N</th><th>Contract Type</th><th>Pri. %</th><th>Sec. %</th><th>No. of Mths</th><th>Sent On</th><th>Opened On</th><th>Signed On</th><th>Status</th></tr></thead>
                          <tbody>
                            <tr><td>1</td><td>2 Years Contract</td><td style="background:green; color:#FFF; border-radius:14px; text-align:center">15%</td><td>10%</td><td>12</td><td>2022-03-14 21:02:48</td><td></td><td></td><td> &nbsp; &nbsp;  </td></tr><tr><td>2</td><td>2 Years Contract</td><td style="background:green; color:#FFF; border-radius:14px; text-align:center">15%</td><td>10%</td><td>12</td><td>2022-03-14 21:02:53</td><td></td><td></td><td> &nbsp; &nbsp;  </td></tr>                              </tbody>
                        </table>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END of Panel -->


             <!-- Start of Panel -->
            <div class="panel">
              <a data-toggle="collapse" data-parent="#accordion" href="#PortalAccess" class="collapsed" aria-expanded="false">
              <div class="box-header">
                <div class="row">
                      <div class="col-md-12">
                        <div class="col-md-4"> <span class="headTText"> Portal Access</span> </div>
                        <div class="col-md-4"> <span class="headTText">  </span> </div>
                        <div class="col-md-4"> <span class="headTText pull-right">  </span> </div>
                      </div>
                </div>
              </div>
              </a>

              <div id="PortalAccess" class="panel-collapse collapse" aria-expanded="false">
                <div class="box-body">
                   <div class="row">
                    <div class="col-md-12">
                      <div class="col-md-12">
                    <!-- <label for="inputName" class="control-label"> Portal Access Status </label> -->

                       <div class="row">
                          <!--  <label class="text-green"><input type="radio" name="ProfileSt" value="Act" class="flat-green"
                         checked onclick="reInvitePortalAccess(this)" > Activate Candidate </label>
                          &nbsp; &nbsp;  &nbsp;
                         <label class="text-danger"><input type="radio" name="ProfileSt" value="D" class="flat-green"
                           onclick="reInvitePortalAccess(this)" > Deactivate Candidate </label>
                          &nbsp; &nbsp;  &nbsp;
                     <label class="text-primary"><input type="radio" name="ProfileSt" value="A" class="flat-green" > Set As Alumni </label> -->
                                                   <button class="btn btn-primary" type="button" usx="c2aa1951a32f33b047954754f0ae" disabled=""> Invite Candidate To Access Portal </button>


                       </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END of Panel -->

          </div>
        </div>
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
<style type="text/css">
    .boxTText
    {
      font-size: 15px; color:#5F7A9C;
    }
    .headTText
    {
      font-size: 14px; color:#4F4F4F; font-weight: 700;
    }
    .box-header
    {
      border: 1px solid #BFD7DD;
    }

    .panel
    {
      margin-bottom: 5px;
    }

    /* .nav-tabs > li {
      border-bottom: 3px solid #C0C0C0;
      color: #C0C0C0;
      text-transform: uppercase; font-weight: 800;
    }

     .nav-tabs > li.active  {
      border-bottom: 3px solid #073367;
      color: #073367;
      text-transform: uppercase; font-weight: 800;
    } */

</style>
