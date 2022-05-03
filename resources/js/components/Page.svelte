<script context="module">
    // import Layout from "../Dashboard/Layout.svelte";
//    export const layout = Layout;
</script>

<script>
</script>

<section class="content-header">
    <h1>
        <slot name="title" />
        <!-- <small>Version 1.0</small> -->
    </h1>
    <ol class="breadcrumb">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li><a href="#"><i class="fa fa-dashboard" /> Home</a></li>
        <li class="active"><slot name="title" /></li>
    </ol>
</section>

<section class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <!-- svelte-ignore a11y-missing-content -->
                    <!-- <h3 class="box-title"><slot name="title" /></h3> -->

                    <div class="box-tools pull-right">
                        <slot name="createButton" />
                        <!-- <button
                            class="btn btn-primary btn-sm"
                            data-toggle="modal"
                            data-target="#modal-progtype"
                            on:click|preventDefault={clearForm}
                        >
                            <i class="fa fa-plus" /> <slot name="createText" />
                        </button> -->
                    </div>
                    <div style="clear: both;">&nbsp;</div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="table-responsive">
                        <div
                            id="example1_wrapper"
                            class=""
                        >
                            <div class="row">
                                <slot name="content" />
                            </div>

                        </div>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix" />
                <!-- /.box-footer -->
            </div>
            <!-- /.box -->
        </div>
    </div>

    <slot />

    <!-- /.modal -->
</section>
