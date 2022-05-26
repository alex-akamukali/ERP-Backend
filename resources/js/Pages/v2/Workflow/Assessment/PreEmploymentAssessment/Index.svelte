<script context="module">

import {useForm} from "nodejs-svelte-crud-helper";
import {humanReadble} from "nodejs-svelte-crud-helper/DateHelper";
import Calendly from "nodejs-svelte-crud-helper/Calendly.svelte";

</script>

<script>

export let list;
export let user;
export let statuses;
let form  = useForm({
    scheduled_date:"",
    user_id:""
});

function eventScheduled(e){
  $form.scheduled_date = e.detail.scheduledDate; //scheduledDate
  $form.user_id = user.id;
  $form.post("/pre-employment-assessment/");
}

</script>
<a data-toggle="collapse" data-parent="#accordion" href="#userAssessment" class="collapsed" aria-expanded="false">
    <div class="box-header">
      <div class="row">
            <div class="col-md-12">
                <!-- '2022-05-23 16:56:30' -->
              <div class="col-md-4 col-sm-4"> <span class="headTText"> Pre-employment Assessment </span> </div>
              <div class="col-md-4"> <span class="headTText"> {list.length? humanReadble(list[0].created_at) : "Not Scheduled Yet"} </span> </div>
              <div class="col-md-4"> <span class="headTText pull-right"> <b class="text-green">
                {list.length? list[0].status : "Not Scheduled"}
              </b>  </span> </div>
            </div>
      </div>
    </div>
    </a>

    <div id="userAssessment" class="panel-collapse collapse" aria-expanded="false" style="height: 198px;">
      <div class="box-body">
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-4">
              <Calendly email={user.email} name={user.first_name} on:eventScheduled={eventScheduled} url="easymagic1/30min" label="Propose Meeting" />
            </div>
            <div class="col-md-8">
              <div class="table-responsive">
              <table class="table table-stripe">
                <thead><tr><th>Assessment Date</th><th>Duration</th><th>Status</th></tr></thead>
                  <tbody>
                      {#each list as item}
                        <tr class="warning">
                            <td>{humanReadble(item.scheduled_date)}</td>
                            <td>0:00</td>
                            <td>Raised by {item.raised_by.email}</td>
                            <td>
                                <select>
                                    <option>--Status--</option>
                                    {#each statuses as status }
                                      <option value={status}>{status}</option>
                                    {/each}
                                </select>
                            </td>
                        </tr>
                      {/each}
                      <!-- <tr class="warning">
                        <td>16-04-2022 11:30 PM</td>
                        <td>0:00</td>
                        <td>Raised by Admin</td>
                    </tr> -->

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
