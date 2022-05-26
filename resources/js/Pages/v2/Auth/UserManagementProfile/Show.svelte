<script context="module">
    import UserManagement from "nodejs-svelte-crud-helper/user/user-profile/Index.svelte";
    import { Layout, useForm } from "nodejs-svelte-crud-helper";
    export const layout = Layout;
</script>

<script>
    export let data;
    // export let report;
    // console.log(report);
    //export let name;
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
                            <input type="text" class="form-control pull-right datepickerDOB" placeholder="Click to set date" name="DOB" value="">
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
                          <!--<input type="text" class="form-control"  name="Province"  value="7"  placeholder="" required > -->
                          <select class="form-control select2 select2-hidden-accessible" name="Province" id="Province" onchange="setCities()" required="" data-select2-id="Province" tabindex="-1" aria-hidden="true">
                             <option value="" data-select2-id="2">--</option>
                             <option value="1"> Alberta </option><option value="2"> British Columbia </option><option value="3"> Manitoba </option><option value="4"> New Brunswick </option><option value="5"> Newfoundland and Labrador </option><option value="6"> Nova Scotia </option><option value="7" data-select2-id="5"> Ontario </option><option value="8"> Prince Edward Island </option><option value="9"> Quebec </option><option value="10"> Saskatchewan </option><option value="11"> Northwest Territories </option><option value="12"> Nunavut </option><option value="13"> Yukon </option>                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 268.328px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-Province-container"><span class="select2-selection__rendered" id="select2-Province-container" role="textbox" aria-readonly="true" title=" Ontario "> Ontario </span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>

                     <div class="col-md-4">
                        <label for="inputName" class="control-label">Town/City: <b style="color:red">*</b></label>
                          <!--<input type="text" class="form-control"  name="Town"  value="116"  placeholder="" required > -->

                          <select class="form-control select2 select2-hidden-accessible" name="Town" id="Town" required="" data-select2-id="Town" tabindex="-1" aria-hidden="true"><option value=""> -- </option><option value="93"> Barrie </option><option value="94"> Belleville </option><option value="95"> Brampton </option><option value="96"> Brant </option><option value="97"> Brantford </option><option value="98"> Brockville </option><option value="99"> Burlington </option><option value="100"> Cambridge </option><option value="101"> Clarence-Rockland </option><option value="102"> Cornwall </option><option value="103"> Dryden </option><option value="104"> Elliot Lake </option><option value="105"> Greater Sudbury </option><option value="106"> Guelph </option><option value="107"> Haldimand County </option><option value="108"> Hamilton </option><option value="109"> Kawartha Lakes </option><option value="110"> Kenora </option><option value="111"> Kingston </option><option value="112"> Kitchener </option><option value="113"> London </option><option value="114"> Markham </option><option value="115"> Mississauga </option><option value="116" data-select2-id="7"> Niagara Falls </option><option value="117"> Norfolk County </option><option value="118"> North Bay </option><option value="119"> Orillia </option><option value="120"> Oshawa </option><option value="121"> Ottawa </option><option value="122"> Owen Sound </option><option value="123"> Pembroke </option><option value="124"> Peterborough </option><option value="125"> Pickering </option><option value="126"> Port Colborne </option><option value="127"> Prince Edward County </option><option value="128"> Quinte West </option><option value="129"> Richmond Hill </option><option value="130"> Sarnia </option><option value="131"> Sault Ste. Marie </option><option value="132"> St. Catharines </option><option value="133"> St. Thomas </option><option value="134"> Stratford </option><option value="135"> Temiskaming Shores </option><option value="136"> Thorold </option><option value="137"> Thunder Bay </option><option value="138"> Timmins </option><option value="139"> Toronto </option><option value="140"> Vaughan </option><option value="141"> Waterloo </option><option value="142"> Welland </option><option value="143"> Windsor </option><option value="144"> Woodstock </option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style="width: 268.328px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-Town-container"><span class="select2-selection__rendered" id="select2-Town-container" role="textbox" aria-readonly="true" title=" Niagara Falls "> Niagara Falls </span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>


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
