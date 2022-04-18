<!DOCTYPE html>
<html lang="en">

<head>
    <title>OLED ERP - Login</title>
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

</head>

<body>

    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
            <div class="bg-blue py-4">
                <div class="row px-3">
                    <div class="ml-4 ml-sm-5 mb-0 col-sm-6" style="display: inline;"> <img
                            src="{{ asset('asset1/Olade_logo_white.png') }}"
                            style="max-width: 70px; max-height: 50px;"> </div>
                    <div class="social-contact col-sm-4"> <span class="float-right" style="cursor: pointer;"> Contact
                            Us </span> </div>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col-lg-6  d-none d-lg-block">
                    <div class="card1 pb-5">
                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img
                                src="{{ asset('asset1/uNGdWHi.png') }}" class="image"> </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card2 card border-0 px-4 py-5">
                        <div class="row px-3 mb-4 justify-content-center" style="text-align: center;">
                            <div class="line"></div>
                            <h4 class="or text-center">Sign In</h4>
                            <div class="line"></div>
                        </div>
                        <form method="post" action="{{ route('login.store') }}">
                            @csrf
                            <div class="row px-3"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Email Address</h6>
                                </label> <input class="mb-4" type="text" name="email"
                                    placeholder="Enter a valid email address" required=""
                                    value="rohan.jayne@example.net"> </div>
                            <div class="row px-3"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Password</h6>
                                </label> <input type="password" name="password" placeholder="Enter password" required=""
                                    value="password"> </div>
                            <div class="row px-3 mb-4">
                                <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1"
                                        type="checkbox" name="chk" class="custom-control-input"> <label for="chk1"
                                        class="custom-control-label text-sm">Remember me</label> </div> <a
                                    href="passwordrecovery" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                            </div>
                            <div class="row">
                                <div style="width: 100%;"><button type="submit" class="btn btn-blue text-center"
                                        style="float: right;">Login</button> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="bg-white py-4">
                <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright © 2021. All rights
                        reserved.</small> </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
    @if (request()->session()->has('message'))
       swal({ title: "", text: '{{ request()->session()->get('message') }}', icon: "error"  });
    @endif
    // var ErrorMgs = "";
    // var Mgs = "";
    // if(ErrorMgs != "")
    // {
    //     swal({ title: "", text: ErrorMgs, icon: "error"  });
    // }
    // if(Mgs != "")
    // {
    //     swal({ title: "", text: Mgs, icon: "info"  });
    // }

</script>
</body>

</html>
