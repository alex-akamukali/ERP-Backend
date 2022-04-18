<!DOCTYPE html>
<html lang="en">

<head>
    <title>OLED ERP - Login -- Dashboard</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{{ asset('asset1/extra.css') }}">
    <!-- <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,600;1,800&display=swap" rel="stylesheet"> -->
    <link rel="icon" href="logo.ico" type="image/png" sizes="10x10">
    <script src="{{ asset('asset1/jquery.min.js') }}"></script>
    <script src="{{ asset('asset1/bootstrap.bundle.min.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('asset1/bootstrap4.3.1.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('asset1/font-awesome.min.css') }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{{ asset('asset1/ionicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('asset1/formstyle.css') }}">
    <script src="{{ asset('asset1/sweetalert.min.js') }}"></script>

    {{-- <link href="{{ mix('/css/app.css') }}" rel="stylesheet" /> --}}
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @inertiaHead

</head>
<body>
    @inertia
    {{-- <script type="text/javascript">
    var ErrorMgs = "";
    var Mgs = "";
    if(ErrorMgs != "")
    {
        swal({ title: "", text: ErrorMgs, icon: "error"  });
    }
    if(Mgs != "")
    {
        swal({ title: "", text: Mgs, icon: "info"  });
    }

</script> --}}
</body>

</html>
