<script context="module">

import { page, useForm } from "@inertiajs/inertia-svelte";

</script>

<script>

export let statuses;
export let user;
export let list;

console.log(statuses,user,list);
//export let name;

</script>
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
    <style type="text/css">
        .headTText
        {
          font-size: 14px; color:#4F4F4F; font-weight: 700;
        }
        .box-header
        {
          border: 1px solid #BFD7DD;
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
