<script context="module">
    import Layout from "../../Auth/Dashboard/Layout.svelte";
    import { useForm , inertia } from "@inertiajs/inertia-svelte";

    import Page from "../../../../components/Page.svelte";
    import Modal from "../../../../components/Modal.svelte";

    import Editor from "../../../../components/Editor.svelte";

    export const layout = Layout;
</script>

<script>
    export let statuses;
    // export let program_types;
    // export let knowledge_area_types;

    // export let store;
    // export let update;
    // export let destroy;
    // export let message;
    // export let error;
    export let data;

    let mode = "create";

    let message = '';
    let error = false;

    const resource = '/olade-contract-type/';

    let closeModal = null;

    let form = useForm({
        title: data.title,
        primary_commission: data.primary_commission,
        secondary_commission: data.secondary_commission,
        no_of_months:data.no_of_months,
        status: data.status,
        body: data.body
    });

    function createContractType(){
        $form.put(resource + data.id);
    }


    let filter = useForm({
        knowledge_area_type:''
    });



    function callStore() {
        $form.post(resource);
    }

    function onResetMessage(){
        $form.clearErrors();
        // message = '';
    }


</script>

<Page>
  <span slot="title">Edit Olade Contract Type</span>

  <a
  use:inertia
  href={resource}
  slot="createButton"
  class="btn btn-primary btn-sm">
  <i class="fa fa-plus" />&nbsp;Back
</a>



<div slot="content">


    <form method="post" on:submit|preventDefault={createContractType}>
        <div class="col-md-12">

              <div class="row">

                <div class="col-md-6">
                    <div class="form-group">
                    <label for="title">
                        Title*
                    </label>
                    <input type="text" id="title" class="form-control" bind:value={$form.title} />

                    </div>
                </div>


                <div class="col-md-2">
                    <div class="form-group">
                    <label for="title">
                        Pri. Com. % *
                    </label>
                    <input type="text" id="title" class="form-control" bind:value={$form.primary_commission} />

                    </div>
                </div>


                <div class="col-md-2">
                    <div class="form-group">
                    <label for="title">
                        Sec. Com. % *
                    </label>
                    <input type="text" id="title" class="form-control" bind:value={$form.secondary_commission} />

                    </div>
                </div>


                <div class="col-md-2">
                    <div class="form-group">
                    <label for="title">
                        Months*
                    </label>
                    <input type="text" id="title" class="form-control" bind:value={$form.no_of_months} />

                    </div>
                </div>


                <div class="col-md-12">
                    <small>
                        <b>[mDay]</b> would be replaced with Day e.g Thrusdays <br>
                       <b>[mContractDate]</b> would be replaced with Date - e.g 12th, July 2020  <br>
                       <b>[mSignerName]</b> would be replaced with Signer Full Name - e.g John Doe Smith  <br>
                       <b>[mSignerAddress]</b> would be replaced with Signer Address  <br>
                       <b>[mJobTitle]</b> would be replaced with Job Title - e.g Business Analyst  <br>
                       <b>[mServiceFee%]</b> would be replaced with ServiceFee Percentage - e.g 20% <br>
                       <b>[mSecondaryServiceFee%]</b> would be replaced with ServiceFee Percentage - e.g 20% <br>
                       <b>[mContractSpan]</b> would be replaced with Contract Span - e.g 12 months <br>
                       <b>[mSecondaryContractSpan]</b> would be replaced with Contract Span - e.g 24 months <br>
                       <b>[mContractorCompany]</b> would be replaced with Contract Company <br>
                       <b>[mContractorCompanyAddress]</b> would be replaced with Contract Company Address <br>
                     </small>
                </div>

                <div class="col-md-12" style="text-align: right;">
                    <label for="title">
                        Status*
                    </label>
                    <select bind:value={$form.status}>
                        <option value="">Select Status</option>
                        {#each statuses as status}
                        <option value={status}>{status}</option>
                      {/each}
                    </select>
                </div>

              </div>


              <div class="row">
                  <div class="col-md-12">
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label>
                          Body
                      </label>
                    <Editor data={data.body} on:textChange={(data)=>$form.body = data.detail}  />
                  </div>

                  <div class="col-md-12">
                      <button style="float: right;" class="btn btn-sm btn-primary">Update Contract Type</button>
                  </div>
              </div>


        </div>
    </form>


</div>
<!-- end -->




</Page>
