<script context="module">
    import UserManagement from "nodejs-svelte-crud-helper/user/user-profile/Index.svelte";
    import { Layout, useForm , update, onUpdate } from "nodejs-svelte-crud-helper";
    import ProvinceSelect from "nodejs-svelte-crud-helper/province/ProvinceSelect.svelte";
    import TownCitySelect from "nodejs-svelte-crud-helper/province/TownCitySelect.svelte";

    export const layout = Layout;

</script>

<script>
    export let data;
    export let province;
    export let towncity; //towncity
    export let programTypes;
    export let users;

    let profileForm = useForm({
        first_name:data.first_name,
        middle_name:data.middle_name,
        last_name:data.last_name,
        gender:data.gender,
        highest_qualification:data.highest_qualification,
        dob:data.dob,
        phone:data.phone,
        email:data.email,
        program_type_id:data.program_type_id,
        address:data.address,
        province_id:data.program_type_id,
        province_town_city_id:data.province_town_city_id,
        postal_code:data.postal_code,
        account_status:data.account_status,
        incorporation_name:data.incorporation_name,
        incorporation_address:data.incorporation_address,
        notes:data.notes,
        resume:data.resume,
        id_card:data.id_card,
        void_check_doc:data.void_check_doc,
        hst_no:data.hst_no,
        assign_admin:data.assign_admin,
        assign_director_id:data.assign_director_id,
        _method:"PUT"
    });

    let townCityFilter = useForm({
       province_id:''
    });


    onUpdate((data)=>{

        $profileForm.post("/user-management-profile/" + data.id);

    });

    function submit(){
        update(data);
    }

    // export let report;
    // console.log(report);
    //export let name;
    function query(province_id){
       $townCityFilter.province_id = province_id;
    //    alert(province_id);
       $townCityFilter.get("/user-management-profile/" + data.id,{
           preserveScroll:true
       });
    }
</script>

<UserManagement user={data} title="User Profile." currentTab="profile">
    <!-- {JSON.stringify(report)} -->

    <div class="box box-default" style="padding: 11px;">
        <div class="box-header">
          <h4>Profile Information</h4>
        </div>
         <div class="box-body">
           <form class="form-horizontal"  method="post" on:submit|preventDefault={submit}>
                <div class="row">
                  <div class="col-md-12">
                    <div class="col-md-4">
                        <label for="inputName" class="control-label">First Name <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="FirstName" id="inputName" bind:value={$profileForm.first_name} placeholder="First Name" required="">

                    </div>
                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Middle Name</label>
                          <input type="text" class="form-control" name="MiddleName" id="inputName" bind:value={$profileForm.middle_name} placeholder="Middle Name">
                    </div>
                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Last Name <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="LastName" id="inputName" bind:value={$profileForm.last_name} placeholder="Last Name" required="">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Gender <b style="color:red">*</b></label>
                         <!-- <input type="text" class="form-control" name="Gender" id="inputName" value=""  required > -->
                         <div class="form-control">
                           <label><input type="radio" name="Gender" bind:group={$profileForm.gender} value="M" class="flat-green"> Male </label> &nbsp; &nbsp;
                           <label><input type="radio" name="Gender" bind:group={$profileForm.gender} value="F" class="flat-green"> Female </label>
                         </div>
                    </div>

                  <!--
                    <div class="col-md-8">
                        <label for="inputName" class="control-label">Profession <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="Profession" id="inputName" value=""  placeholder="e.g : Business Analyst" required >
                    </div>
                  -->

                    <div class="col-md-4">
                        <label for="inputName"  class="control-label">Highest Qualification  <b style="color:red">*</b></label>
                         <!-- <input type="text" class="form-control" name="Education" id="inputName" placeholder="" value="Under Graduate" required > -->
                         <select class="form-control" bind:value={$profileForm.highest_qualification} name="Education" required="">
                          <option value=""> --- </option>
                          <option value="Under Graduate" selected=""> Under graduate </option>
                          <option value="Graduate"> Graduate </option>
                          <option value="Post Graduate"> Post Graduate </option>
                          <option value="Doctorial"> Doctorial </option>
                          <option value="Post Doctorial"> Post Doctorial </option>
                         </select>
                    </div>
                      <div class="col-md-4">
                        <label for="inputName" class="control-label">Date of Birth <b style="color:red">*</b></label>
                          <!--<input type="date" class="form-control" id="inputName" placeholder="Cilck to set date" required > -->
                          <div class="input-group date">
                            <div class="input-group-addon">
                              <i class="fa fa-calendar"></i>
                            </div>
                            <input type="date" class="form-control pull-right datepickerDOB" placeholder="Click to set date" name="DOB" bind:value={$profileForm.dob}>
                          </div>
                    </div>


                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">


                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Phone: <b style="color:red">*</b></label>
                          <input type="tel" class="form-control" name="Phone" id="inputName" bind:value={$profileForm.phone} placeholder="" data-inputmask="'mask': ['999-999-9999 [x99999]', '+999 99 99 9999[9] 999']" data-mask="" required="">
                    </div>
                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Email <b style="color:red">*</b> <span usx="c2aa1951a32f33b047954754f0ae" onclick="addAnotherEmail(this)" class="text-blue"> <i class="fa fa-plus"></i> Add Email </span></label>
                          <input type="text" class="form-control" id="inputName" value={$profileForm.email} readonly disabled>
                    </div>
                    <div class="col-md-4">
                        <label for="AcctProgram" class="control-label">Program Type <b style="color:red">*</b></label>


                          <select bind:value={$profileForm.program_type_id} class="form-control" id="AcctProgram" name="AcctProgram" required="">
                            <option value="">--</option>
                            {#each programTypes as item}
                               <option value={item.id}>{item.title}</option>
                            {/each}
                          </select>

                    </div>
                  </div>
                </div>


                 <div class="row">

                  <div class="col-md-12">
                     <div class="col-md-12">
                        <label for="inputName" class="control-label">Address <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="Address" id="inputName" placeholder="" value="Funsho Kinoshi Street, Ago Palace Okota, Lagos Nigeria., 1" required="">
                    </div>
                      <div class="col-md-4">
                        <label for="inputName" class="control-label">Province: <b style="color:red">*</b></label>
                        <ProvinceSelect list={province} on:change={(e)=>$profileForm.province_id = e.detail}  />
                    </div>

                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Town/City: <b style="color:red">*</b></label>
                          <!--<input type="text" class="form-control"  name="Town"  value="116"  placeholder="" required > -->

                       <TownCitySelect {query} list={towncity} on:change={(e)=>$profileForm.province_town_city_id = e.detail} />


                    </div>
                      <div class="col-md-4">
                        <label for="inputName" class="control-label">Postal Code: <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="PostalCode" bind:value={$profileForm.postal_code} placeholder="" required="">
                    </div>




                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                     <div class="col-md-4">
                        <label for="ActStatus" class="control-label">Account Status <b style="color:red">*</b></label>
                         <!-- <input type="text" class="form-control" name="Gender" id="inputName" value=""  required > -->
                         <div class="form-control">
                           <label class="text-green"><input type="radio" name="AccountStatus" bind:group={$profileForm.account_status} value="1" class="flat-green" checked=""> Active </label> &nbsp; &nbsp;
                            <label class="text-red"><input type="radio" name="AccountStatus" bind:group={$profileForm.account_status} value="0" class="flat-green"> Inactive </label> &nbsp; &nbsp;

                         </div>
                    </div>


                     <div class="col-md-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>Incorporation Name</label>

                         <input type="text" class="form-control" name="myIncorp" bind:value={$profileForm.incorporation_name} />
                    </div>

                     <div class="col-md-4">
                         <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>Incorporation Address</label>

                         <input type="text" class="form-control" name="myIncorpAddress" bind:value={$profileForm.incorporation_address} />
                    </div>

                  </div>


                   <div class="col-md-12">
                    <div class="col-md-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Notes</label>
                       <textarea bind:value={$profileForm.notes} class="form-control" placeholder="Enter notes about this user here."></textarea>
                    </div>

                    <div class="col-md-2">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Resume</label>
                       <input type="file" on:change={(e)=>$profileForm.resume = e.target.files[0]} />
                        <i class="fa fa-file form-control text-green" style="font-size: 20px; cursor: pointer"></i>
                    </div>

                     <div class="col-md-2">
                         <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">ID Card</label>
                       <input type="file" on:change={(e)=>$profileForm.id_card = e.target.files[0]} />
                       <i class="fa fa-id-badge form-control text-green" style="font-size: 20px; cursor: pointer"></i>
                    </div>

                    <div class="col-md-2">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Void Check Doc</label>
                       <input type="file" on:change={(e)=>$profileForm.void_check_doc = e.target.files[0]} />
                        <br> Void Check Doc
                    </div>



                    </div>

                    <div class="col-md-12">
                      <div class="col-md-4">
                          <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">HST No.</label>
                        <input type="text" class="form-control" name="HST" bind:value={$profileForm.hst_no} />
                    </div>
                    <div class="col-md-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Assign Admin</label>
                        <select bind:value={$profileForm.assign_admin} class="form-control" name="Admin" required="">
                          <option value=""> -- </option>
                          {#each users as item}
                             <option value={item.id}>{item.name},{item.email}</option>
                          {/each}
                        </select>
                    </div>

                    <div class="col-md-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Assign Director</label>
                       <select bind:value={$profileForm.assign_director_id} class="form-control" name="Director" required="">
                         <option value=""> -- </option>
                         {#each users as item}
                             <option value={item.id}>{item.name},{item.email}</option>
                         {/each}
                        </select>
                    </div>
                    </div>

                  </div>

                  <div class="row">
                    <br>
                    <div class="col-md-3 pull-right">
                        <button type="submit" class="btn btn-primary btn-block">Update Profile</button>
                    </div>
                  </div>


                </form></div>


         </div>


</UserManagement>

<!------- SHIFT STYLE --------------->
<style type="text/css">
</style>
