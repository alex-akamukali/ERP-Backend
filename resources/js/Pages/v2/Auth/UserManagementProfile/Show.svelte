<script context="module">
    import UserManagement from "nodejs-svelte-crud-helper/user/user-profile/Index.svelte";
    import { Layout, useForm } from "nodejs-svelte-crud-helper";
    import ProvinceSelect from "nodejs-svelte-crud-helper/province/ProvinceSelect.svelte";
    import TownCitySelect from "nodejs-svelte-crud-helper/province/TownCitySelect.svelte";

    export const layout = Layout;

</script>

<script>
    export let data;
    export let province;
    export let towncity; //towncity
    let profileForm = useForm({});
    let townCityFilter = useForm({
       province_id:''
    });
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
           <form class="form-horizontal" action="../utility/userupdatebio" method="post">
                <div class="row">
                  <div class="col-md-12">
                    <div class="col-md-4">
                        <label for="inputName" class="control-label">First Name <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="FirstName" id="inputName" value="Chidi" placeholder="First Name" required="">
                          <input type="hidden" name="Usx" value="c2aa1951a32f33b047954754f0ae">
                    </div>
                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Middle Name</label>
                          <input type="text" class="form-control" name="MiddleName" id="inputName" value="" placeholder="Middle Name">
                    </div>
                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Last Name <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="LastName" id="inputName" value="Moses" placeholder="Last Name" required="">
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

                  <!--
                    <div class="col-md-8">
                        <label for="inputName" class="control-label">Profession <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="Profession" id="inputName" value=""  placeholder="e.g : Business Analyst" required >
                    </div>
                  -->

                    <div class="col-md-4">
                        <label for="inputName" class="control-label">Highest Qualification  <b style="color:red">*</b></label>
                         <!-- <input type="text" class="form-control" name="Education" id="inputName" placeholder="" value="Under Graduate" required > -->
                         <select class="form-control" name="Education" required="">
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
                            <input type="date" class="form-control pull-right datepickerDOB" placeholder="Click to set date" name="DOB" value="">
                          </div>
                    </div>


                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">


                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Phone: <b style="color:red">*</b></label>
                          <input type="tel" class="form-control" name="Phone" id="inputName" value="08170718416" placeholder="" data-inputmask="'mask': ['999-999-9999 [x99999]', '+999 99 99 9999[9] 999']" data-mask="" required="">
                    </div>
                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Email <b style="color:red">*</b> <span usx="c2aa1951a32f33b047954754f0ae" onclick="addAnotherEmail(this)" class="text-blue"> <i class="fa fa-plus"></i> Add Email </span></label>
                          <input type="text" class="form-control" id="inputName" value="Chidorimoses@gmail.com" disabled="">
                    </div>
                    <div class="col-md-4">
                        <label for="AcctProgram" class="control-label">Program Type <b style="color:red">*</b></label>


                          <select class="form-control" id="AcctProgram" name="AcctProgram" required="">
                            <option value="">--</option>
                            <option value="1"> Business Analysis </option><option value="2" selected=""> Project Management </option>                            </select>

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
                        <ProvinceSelect list={province} on:change={(e)=>1}  />
                    </div>

                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Town/City: <b style="color:red">*</b></label>
                          <!--<input type="text" class="form-control"  name="Town"  value="116"  placeholder="" required > -->

                       <TownCitySelect {query} list={towncity} on:change={(e)=>1} />


                    </div>
                      <div class="col-md-4">
                        <label for="inputName" class="control-label">Postal Code: <b style="color:red">*</b></label>
                          <input type="text" class="form-control" name="PostalCode" value="102214" placeholder="" required="">
                    </div>




                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                     <div class="col-md-4">
                        <label for="ActStatus" class="control-label">Account Status <b style="color:red">*</b></label>
                         <!-- <input type="text" class="form-control" name="Gender" id="inputName" value=""  required > -->
                         <div class="form-control">
                           <label class="text-green"><input type="radio" name="AccountStatus" value="1" class="flat-green" checked=""> Active </label> &nbsp; &nbsp;
                            <label class="text-red"><input type="radio" name="AccountStatus" value="0" class="flat-green"> Inactive </label> &nbsp; &nbsp;

                         </div>
                    </div>


                     <div class="col-md-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>Incorporation Name</label>

                         <input type="text" class="form-control" name="myIncorp" value="ABC INC">
                    </div>

                     <div class="col-md-4">
                         <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>Incorporation Address</label>

                         <input type="text" class="form-control" name="myIncorpAddress" value="">
                    </div>

                  </div>


                   <div class="col-md-12">
                    <div class="col-md-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Notes</label>
                       <textarea class="form-control" placeholder="Enter notes about this user here."></textarea>
                    </div>

                    <div class="col-md-2">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Resume</label>
                                                 <a href="../utility/../UploadDocs/RESUME1646824641.pdf" target="_blank">
                       <i class="fa fa-file form-control text-green" style="font-size: 20px; cursor: pointer"></i>
                        </a>
                                           </div>

                     <div class="col-md-2">
                         <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">ID Card</label>
                                                   <a href="../../UploadDocs/ID1646824641.jpg" target="_blank">
                       <i class="fa fa-id-badge form-control text-green" style="font-size: 20px; cursor: pointer"></i>
                        </a>
                                           </div>

                    <div class="col-md-2">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Void Check Doc</label>
                                                 <br> Void Check Doc
                                           </div>



                    </div>

                    <div class="col-md-12">
                      <div class="col-md-4">
                          <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">HST No.</label>
                        <input type="text" class="form-control" name="HST" value="123468">
                    </div>
                    <div class="col-md-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Assign Admin</label>
                        <select class="form-control" name="Admin" required="">
                          <option value=""> -- </option>
                          <option value="3">VICTOR N1 OKONKWO</option><option value="12">puneet  mehta</option><option value="13">Fumi  Olasimbo</option><option value="14">Martin  Martin</option><option value="17">Ade  Adeyemi</option><option value="21">Victor  Test1</option><option value="23">Busayo  Omisore</option><option value="24">Chris  Nkwontah</option><option value="26">Bolaji  Ola</option><option value="27">Bolaji  Olarenwaju</option><option value="28">Damola  Afo</option><option value="29">Anita  Ezeaba</option><option value="30" selected="">Nkechi  Moses</option><option value="31">Jennifer  Vangelis-Oden</option><option value="38">Jamila  Rufai</option><option value="40">Alex  Akamukali</option>                          </select>
                    </div>

                    <div class="col-md-4">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                       <label class="control-label">Assign Director</label>
                       <select class="form-control" name="Director" required="">
                         <option value=""> -- </option>
                          <option value="3">VICTOR N1 OKONKWO</option><option value="12">puneet  mehta</option><option value="13">Fumi  Olasimbo</option><option value="14">Martin  Martin</option><option value="17">Ade  Adeyemi</option><option value="21">Victor  Test1</option><option value="23">Busayo  Omisore</option><option value="24">Chris  Nkwontah</option><option value="26">Bolaji  Ola</option><option value="27">Bolaji  Olarenwaju</option><option value="28">Damola  Afo</option><option value="29">Anita  Ezeaba</option><option value="30" selected="">Nkechi  Moses</option><option value="31">Jennifer  Vangelis-Oden</option><option value="38">Jamila  Rufai</option><option value="40">Alex  Akamukali</option>                         </select>
                    </div>
                    </div>

                  </div>
                </form></div>

               <div class="row">
                <br>
                <div class="col-md-3 pull-right">
                    <button type="submit" class="btn btn-primary btn-block">Update Profile</button>
                </div>
              </div>

         </div>


</UserManagement>

<!------- SHIFT STYLE --------------->
<style type="text/css">
</style>
