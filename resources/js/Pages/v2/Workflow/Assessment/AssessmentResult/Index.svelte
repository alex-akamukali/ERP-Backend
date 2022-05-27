<script context="module">

// import { page, useForm } from "@inertiajs/inertia-svelte";
import {useForm} from "nodejs-svelte-crud-helper";

</script>

<script>

export let statuses;
export let user;
export let list;
export let knowledgeAreas;
export let programTypes;
export let knowledgeAreaTypes;

let form = useForm({
        user_id:user.id,
        program_type_id:"",
        exam_type_id:"",
        knowledge_area_id:"",
        no_of_correct_answer:"0"
});

let formUpdateScore = useForm({
    no_of_correct_answer:"",
    no_of_questions:""
});

// 'user_id'=>'required',
//             'program_type_id'=>'required',
//             'exam_type_id'=>'required',
//             'knowledge_area_id'=>'required',
//             'no_of_correct_answer'=>'required'


console.log(statuses,user,list,programTypes,knowledgeAreas);
//export let name;

function filter(){
    $form.get("/assessment/" + user.id,{
        preserveScroll:true
    });
}

function create(){
    $form.post("/assessment-result/",{
        preserveScroll:true
    });
}

function updateScore(data,value){
   $formUpdateScore.no_of_correct_answer = value;
   $formUpdateScore.no_of_questions = data.knowledge_area.no_of_questions;
   $formUpdateScore.put("/assessment-result/" + data.id,{
       preserveScroll:true
   });
}

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
                 <form method="post" on:submit|preventDefault={create}>
                  <div class="col-md-3">
                     <div class="form-group">
                       <label for="inputName" class="control-label"> Program Type </label>
                       <select bind:value={$form.program_type_id} on:change={filter}  class="form-control">
                           <option value="">--Select--</option>
                           {#each programTypes as programType}
                              <option value={programType.id}>{programType.title}</option>
                           {/each}
                       </select>

                       <!-- svelte-ignore a11y-label-has-associated-control -->
                       <!-- <label class="form-control"> <b style="color:green"> Project Management </b> </label> -->
                     </div>
                  </div>
                  <div class="col-md-2">
                     <div class="form-group">
                       <label for="inputName" class="control-label"> Exam Type </label>
                       <select  name="KAType" class="form-control" bind:value={$form.exam_type_id} on:change={filter}>
                        <option value="">--Select--</option>
                        {#each knowledgeAreaTypes as knowledgeAreaType }
                            <option value={knowledgeAreaType}>{knowledgeAreaType}</option>
                        {/each}
                       </select>
                     </div>

                   </div>

                   <div class="col-md-3">
                     <div class="form-group">
                       <label for="inputName" class="control-label"> Knowledge Area </label>
                       <select class="form-control" bind:value={$form.knowledge_area_id}>

                        <option value="">--Select--</option>
                        {#each knowledgeAreas as knowledgeArea}
                            <option value={knowledgeArea.id}>{knowledgeArea.name}</option>
                        {/each}

                       </select>
                     </div>

                   </div>

                     <div class="col-md-2">
                     <div class="form-group">
                       <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label"> &nbsp; </label>
                       <button type="submit" class="btn btn-primary btn-sm form-control"> <i class="fa fa-plus"></i> Add </button>
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

                <thead>
                    <tr>
                        <th>Knowledge Area</th>
                        <th> No. of Quest. </th>
                        <th> No. of Correct Answer  </th>
                        <th> Score </th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {#each list as item}
                    <!-- knowledge_area                         -->
                    <tr>
                        <td>{item.knowledge_area.name}</td>
                        <td>{item.knowledge_area.no_of_questions}</td>
                        <td>
                            <input style="width:40px" value={item.no_of_correct_answer} on:blur={(e)=>updateScore(item,e.target.value)} class="IsNumber" type="text" />
                        </td>
                        <td id="fresult-7">
                            {item.score}%
                        </td>
                        <td>{item.status}</td>
                   </tr>
                    {/each}


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
