<div class="wrapper" style="height: auto; min-height: 100%;">

    <header class="main-header">
        <!-- Logo -->
        <a href="" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini">
                <img alt="img" src="{{ asset('asset1/Olade_logo_white.png') }}" />
            </span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg">
                <img alt="img" src="{{ asset('asset1/Olade_logo_white.png') }}" />
            </span>
        </a>

        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- Notifications Here -- >
                 <!-- Notifications: style can be found in dropdown.less -->
                    <li class="dropdown notifications-menu">
                        <a href="" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-bell-o" ></i>
                            <span class="label label-danger">17</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="header">You have 17 notifications</li>
                            <li>
                                <!-- inner menu: contains the actual data -->
                                <ul class="menu">
                                    <li>
                                        <a target="_blank"
                                            href="ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae">
                                            <i class="fa fa-comment text-green"> Payment Item for process</i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <!-- <li class="footer"><a href={'/'}>View all</a></li>-->
                        </ul>
                    </li>
                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="{{ asset('asset1/user2-160x160.jpg') }}" class="img-circle" alt=" ." style="width:20px; height:20px" />
                            <span class="hidden-xs"> {user.name} </span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <img src="{{ asset('asset1/user2-160x160.jpg') }}" class="img-circle" alt="img" />
                                <p>
                                    Alex Akamukali -
                                    <!-- <small>Member since 2022/03/28 21:07:04</small> -->
                                    <small>Registered since Mar. 2022</small>
                                </p>
                            </li>
                            <!-- Menu Body -->
                            <!--<li class="user-body">
                    <div class="row">
                      <div class="col-xs-4 text-center">
                        <a href={'/'}>Followers</a>
                      </div>
                      <div class="col-xs-4 text-center">
                        <a href={'/'}>Sales</a>
                      </div>
                      <div class="col-xs-4 text-center">
                        <a href={'/'}>Friends</a>
                      </div>
                    </div>
                  </li> -->
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a use:inertia href=""
                                        class="btn btn-primary btn-flat">Profile</a>
                                </div>
                                <div class="pull-right">
                                    <a href="" class="btn btn-primary btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <!-- Control Sidebar Toggle Button
              <li>
                <a href={'/'} data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
              </li>
              -->
                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar active" style="height: auto;">
            <!-- Sidebar user panel -->

            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu tree" data-widget="tree">
                <li class="header">&nbsp;</li>
                <!-- Optionally, you can add icons to the links -->
                <li class="active">
                    <a href=""><i class="fa fa-tachometer" ></i>
                        <span> Dashboard </span></a>
                </li>
                <li class="treeview">
                    <a href=""><i class="fa fa-users" ></i> <span>Users</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right" ></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <a href="">
                                <i class="fa fa-id-card" ></i> All User</a>
                        </li>
                        <li>
                            <a href="activeusers">
                                <i class="fa fa-id-card text-green" ></i> Active</a>
                        </li>
                        <li>
                            <a href="inactiveusers">
                                <i class="fa fa-id-card text-red" ></i> Inactive</a>
                        </li>
                        <li>
                            <a href="alumniusers">
                                <i class="fa fa-id-card text-yellow" ></i> Alumni
                            </a>
                        </li>
                    </ul>
                </li>
                <!-- <li class="treeview">
              <a href={'/'}><i class="fa fa-database"></i> <span> Admin Payments </span>
            <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                  </span>
              </a>
             <ul class="treeview-menu">
                <li> <a href="contractPayment"> <i class="fa fa-money text-green"></i> Contract Payment</a></li>
                <li> <a href="FTEPayment"> <i class="fa fa-money text-blue"></i>  FTE Payment </a></li>
              </ul>
            </li> -->
                <li class="treeview">
                    <a href=""><i class="fa fa-pie-chart" ></i> <span> Reports </span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right" ></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <a href="JobDetailsConsultants">
                                <i class="fa fa-line-chart text-green" ></i> Consultants
                                on Job</a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-bar-chart text-blue" ></i> On FTE Job
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-bar-chart text-aqua" ></i> On Contract
                                Job
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href=""><i class="fa fa-envelope" ></i>
                        <span> Communication </span></a>
                </li>

                <li class="treeview">
                    <a href=""><i class="fa fa-money text-aqua" ></i>
                        <span> Accounts Payments </span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right" ></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <a href="ACCOUNTcontractPayment">
                                <i class="fa fa-money text-green" ></i> Contract Payment</a>
                        </li>
                        <li>
                            <a href="ACCOUNTFTEPayment">
                                <i class="fa fa-money text-blue" ></i> FTE Payment
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="treeview">
                    <a href=""><i class="fa fa-tasks" ></i> <span>Document Library</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right" ></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <a href="docContract">
                                <i class="fa fa-file" ></i> Olade Contract</a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-file-o" ></i> Employment Contract</a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-file text-green" ></i> Invoices</a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-money" ></i> Payment Stub
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-file text-aqua" ></i> Resumes
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-folder" ></i> <span> Projects </span></a>
                </li>
                <li>
                    <a href="usersTeams"><i class="fa fa-users" ></i> <span> Teams </span></a>
                </li>
                <li class="treeview">
                    <a href=""><i class="fa fa-cogs" ></i> <span> Settings </span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right" ></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <a href="">
                                <i class="fa fa-graduation-cap" ></i> Program Type
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-book text-orange" ></i> Knowledge Area
                            </a>
                        </li>
                        <li>
                            <a href="oladecontracttype">
                                <i class="fa fa-file-o text-green" ></i> Olade Contract
                                Type
                            </a>
                        </li>
                        <li>
                            <a href="companies">
                                <i class="fa fa-bank text-aqua" ></i> Vendors
                            </a>
                        </li>
                        <li>
                            <a href="payrollmgrs">
                                <i class="fa fa-money text-blue" ></i> Payroll Mgrs.
                            </a>
                        </li>
                        <li>
                            <a href="zoomaccount">
                                <i class="fa fa-desktop text-orange" ></i> Zoom Setup
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="treeview">
                    <a href=""><i class="fa fa-key" ></i> <span> Role Management </span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right" ></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <a href="roles">
                                <i class="fa fa-wrench text-aqua" ></i> Assign Roles
                            </a>
                        </li>
                        <li>
                            <a href="docusignsigners">
                                <i class="fa fa-edit text-aqua" ></i> DocuSign Signers
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="{{ route('logout') }}"><i class="fa fa-power-off" ></i>
                        <span> Sign Out </span></a>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper" style="min-height: 531.141px;">
        <!-- Content Header (Page header) -->
        <!-- <section class="content-header">
              <h1>
                  Dashboard
                  <small>Version 1.0</small>
              </h1>
              <ol class="breadcrumb">
                  <li><a href="./"><i class="fa fa-dashboard" /> Home</a></li>
                  <li class="active">Dashboard</li>
              </ol>
          </section> -->
        @yield('content')
        <!-- Main content -->
        <!-- <section class="content"> -->
        <!-- Info boxes -->

        <!-- /.row -->
        <!-- </section> -->
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <b>Version</b> 1.0
        </div>
        <strong>Copyright © 2021 <a href="https://oladeconsulting.com" target="_blank">
                Olade Consulting
            </a></strong> All rights reserved.
    </footer>
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
        <!-- Create the tabs -->
        <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
            <li>
                <a href="control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home" ></i></a>
            </li>
            <li>
                <a href="control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears" ></i></a>
            </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
            <!-- Home tab content -->
            <div class="tab-pane" id="control-sidebar-home-tab">
                <h3 class="control-sidebar-heading">Recent Activity</h3>
                <ul class="control-sidebar-menu">
                    <li>
                        <a href="">
                            <i class="menu-icon fa fa-birthday-cake bg-red" ></i>

                            <div class="menu-info">
                                <h4 class="control-sidebar-subheading">
                                    Langdon's Birthday
                                </h4>

                                <p>Will be 23 on April 24th</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="menu-icon fa fa-user bg-yellow" ></i>

                            <div class="menu-info">
                                <h4 class="control-sidebar-subheading">
                                    Frodo Updated His Profile
                                </h4>

                                <p>New phone +1(800)555-1234</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="menu-icon fa fa-envelope-o bg-light-blue" ></i>

                            <div class="menu-info">
                                <h4 class="control-sidebar-subheading">
                                    Nora Joined Mailing List
                                </h4>

                                <p>nora@example.com</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="menu-icon fa fa-file-code-o bg-green" ></i>

                            <div class="menu-info">
                                <h4 class="control-sidebar-subheading">
                                    Cron Job 254 Executed
                                </h4>

                                <p>Execution time 5 seconds</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <!-- /.control-sidebar-menu -->

                <h3 class="control-sidebar-heading">Tasks Progress</h3>
                <ul class="control-sidebar-menu">
                    <li>
                        <a href="">
                            <h4 class="control-sidebar-subheading">
                                Custom Template Design
                                <span class="label label-danger pull-right">70%</span>
                            </h4>

                            <div class="progress progress-xxs">
                                <div class="progress-bar progress-bar-danger" style="width: 70%" ></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h4 class="control-sidebar-subheading">
                                Update Resume
                                <span class="label label-success pull-right">95%</span>
                            </h4>

                            <div class="progress progress-xxs">
                                <div class="progress-bar progress-bar-success" style="width: 95%" ></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h4 class="control-sidebar-subheading">
                                Laravel Integration
                                <span class="label label-warning pull-right">50%</span>
                            </h4>

                            <div class="progress progress-xxs">
                                <div class="progress-bar progress-bar-warning" style="width: 50%" ></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <h4 class="control-sidebar-subheading">
                                Back End Framework
                                <span class="label label-primary pull-right">68%</span>
                            </h4>

                            <div class="progress progress-xxs">
                                <div class="progress-bar progress-bar-primary" style="width: 68%" ></div>
                            </div>
                        </a>
                    </li>
                </ul>
                <!-- /.control-sidebar-menu -->
            </div>
            <!-- /.tab-pane -->

            <!-- Settings tab content -->
            <div class="tab-pane" id="control-sidebar-settings-tab">
                <form method="post">
                    <h3 class="control-sidebar-heading">General Settings</h3>

                    <div class="form-group">
                        <label class="control-sidebar-subheading">
                            Report panel usage
                            <input type="checkbox" class="pull-right" checked="" />
                        </label>

                        <p>
                            Some information about this general settings option
                        </p>
                    </div>
                    <!-- /.form-group -->

                    <div class="form-group">
                        <label class="control-sidebar-subheading">
                            Allow mail redirect
                            <input type="checkbox" class="pull-right" checked="" />
                        </label>

                        <p>Other sets of options are available</p>
                    </div>
                    <!-- /.form-group -->

                    <div class="form-group">
                        <label class="control-sidebar-subheading">
                            Expose author name in posts
                            <input type="checkbox" class="pull-right" checked="" />
                        </label>

                        <p>Allow the user to show his name in blog posts</p>
                    </div>
                    <!-- /.form-group -->

                    <h3 class="control-sidebar-heading">Chat Settings</h3>

                    <div class="form-group">
                        <label class="control-sidebar-subheading">
                            Show me as online
                            <input type="checkbox" class="pull-right" checked="" />
                        </label>
                    </div>
                    <!-- /.form-group -->

                    <div class="form-group">
                        <label class="control-sidebar-subheading">
                            Turn off notifications
                            <input type="checkbox" class="pull-right" />
                        </label>
                    </div>
                    <!-- /.form-group -->

                    <div class="form-group">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="control-sidebar-subheading">
                            Delete chat history
                            <a href="" class="text-red pull-right"><i class="fa fa-trash-o" ></i></a>
                        </label>
                    </div>
                    <!-- /.form-group -->
                </form>
            </div>
            <!-- /.tab-pane -->
        </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
    <div class="control-sidebar-bg" ></div>
    <!-- watch dog -->
    <!-- <CheckAuthComponent /> -->
</div>
