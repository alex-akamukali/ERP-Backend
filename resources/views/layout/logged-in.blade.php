<!DOCTYPE html>
<html style="height: auto; min-height: 100%;">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>OLADE ERP | Admin Dashboard</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <link rel="icon" href="https://erp.oladeconsulting.com/resources/olade_resources/images/logo.ico" type="image/png"
        sizes="10x10">


    @include('includes.guest-css')

    <style type="text/css">
        .select2-container {
            width: 100% !important;
            padding: 0;
        }
    </style>

    <style>
        .cke {
            visibility: hidden;
        }
    </style>
    <style type="text/css">
        .jqstooltip {
            position: absolute;
            left: 0px;
            top: 0px;
            visibility: hidden;
            background: rgb(0, 0, 0) transparent;
            background-color: rgba(0, 0, 0, 0.6);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
            -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
            color: white;
            font: 10px arial, san serif;
            text-align: left;
            white-space: nowrap;
            padding: 5px;
            border: 1px solid white;
            box-sizing: content-box;
            z-index: 10000;
        }
        .jqsfield {
            color: white;
            font: 10px arial, san serif;
            text-align: left;
        }

    </style>


<style type="text/css">
    .nav-tabs > li {
      border-bottom: 3px solid #C0C0C0;
      color: #C0C0C0;
      text-transform: uppercase; font-weight: 800;
    }

     .nav-tabs > li.active  {
      border-bottom: 3px solid #073367;
      color: #073367;
      text-transform: uppercase; font-weight: 800;
    }
  </style>

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
  </style>

<style type="text/css">
    .nav-tabs li > a {
      color: #C8C8C8;
    }


   /* .nav-tabs li.active {
      background-color: #000;
      color: red;
    }*/
  </style>


<!-- Calendly inline widget begin -->

<!-- Calendly link widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<!-- Calendly link widget end -->
{{-- <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> --}}
<!-- Calendly inline widget end -->


    {{-- <script src="https://cdn.tailwindcss.com"></script> --}}

    {{-- <script src="{{ mix('/js/app.js') }}" defer></script> --}}

</head>

<body class="skin-purple sidebar-mini" style="height: auto; min-height: 100%;">

    {{-- body  --}}
    @include('layout.core')
    <!-- jQuery 3 -->


    <!-- jQuery 3 -->
    <script src="{{ asset('asset1/jquery.min.js') }}"></script>
    <!-- Bootstrap 3.3.7 -->
    <script src="{{ asset('asset1/bootstrap.min.js') }}"></script>
    <!-- Select2 -->
    <script src="{{ asset('asset1/select2.full.min.js') }}"></script>
    <!-- InputMask -->
    <script src="{{ asset('asset1/jquery.inputmask.js') }}"></script>
    <script src="{{ asset('asset1/jquery.inputmask.date.extensions.js') }}"></script>
    <script src="{{ asset('asset1/jquery.inputmask.extensions.js') }}"></script>
    <!-- bootstrap datepicker -->
    <script src="{{ asset('asset1/bootstrap-datepicker.min.js') }}"></script>
    <!-- FastClick -->
    <script src="{{ asset('asset1/fastclick.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('asset1/adminlte.min.js') }}"></script>
    <!-- Sparkline -->
    <script src="{{ asset('asset1/jquery.sparkline.min.js') }}"></script>
    <!-- jvectormap
<script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
 -->
    <!-- SlimScroll -->
    <script src="{{ asset('asset1/jquery.slimscroll.min.js') }}"></script>
    <!-- ChartJS -->
    <script src="{{ asset('asset1/Chart.js') }}"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes)
<script src="../resources/dist/js/pages/dashboard2.js"></script>
AdminLTE for demo purposes
<script src="../resources/dist/js/demo.js"></script> -->


    <!-- DataTables -->
    {{-- <script src="{{ asset('asset1/jquery.dataTables.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('asset1/dataTables.bootstrap.min.js') }}"></script> --}}
    <script src="{{ asset('asset1/toastr.min.js') }}"></script>
    <!-- date-range-picker -->
    <script src="{{ asset('asset1/moment.min.js') }}"></script>
    <script src="{{ asset('asset1/daterangepicker.js') }}"></script>
    <!-- bootstrap time picker -->
    <script src="{{ asset('asset1/bootstrap-timepicker.min.js') }}"></script>

    <!-- CK Editor -->
    <script src="{{ asset('asset1/ckeditor.js') }}"></script>
    <!-- Bootstrap WYSIHTML5 -->
    <script src="{{ asset('asset1/bootstrap3-wysihtml5.all.min.js') }}"></script>

</body>

</html>
