import { Link, useForm } from "@inertiajs/inertia-react";

const Dashboard = ({
    logout_route,
    csrf,
    olade_logo,
    user_logo,
    user_profile_route,
}) => {
    const { post } = useForm();
    const logOut = () => {
        post(logout_route, {
            __token: csrf,
        });
    };
    return (
        <>
            <div
                className="wrapper"
                style={{ height: "auto", minHeight: "100%" }}
            >
                <header className="main-header">
                    {/* Logo */}
                    <a className="logo">
                        {/* mini logo for sidebar mini 50x50 pixels */}
                        <span className="logo-mini">
                            {" "}
                            <img src={olade_logo} />
                        </span>
                        {/* logo for regular state and mobile devices */}
                        <span className="logo-lg">
                            {" "}
                            <img src={olade_logo} />{" "}
                        </span>
                    </a>
                    {/* Header Navbar: style can be found in header.less */}
                    <nav className="navbar navbar-static-top">
                        {/* Sidebar toggle button*/}
                        <a
                            href="https://erp.oladeconsulting.com/admin/#"
                            className="sidebar-toggle"
                            data-toggle="push-menu"
                            role="button"
                        >
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        {/* Navbar Right Menu */}
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                {/* Notifications Here -- >
             <!-- Notifications: style can be found in dropdown.less */}
                                <li className="dropdown notifications-menu">
                                    <a
                                        href="https://erp.oladeconsulting.com/admin/#"
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        <i className="fa fa-bell-o" />
                                        <span className="label label-danger">
                                            15
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">
                                            You have 15 notifications
                                        </li>
                                        <li>
                                            {/* inner menu: contains the actual data */}
                                            <ul className="menu">
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=b18550ec1bf9ec2fca2bf92fe4ce"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=c2aa1951a32f33b047954754f0ae"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=361306d7cc9bc413ef624c72a19b"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=3907d5938ce80bf016cd6a3b6fb3"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment?HKG=64ea3b9136cd52d8aa90e38c0024"
                                                    >
                                                        <i className="fa fa-comment text-green" />{" "}
                                                        Payment Item for process
                                                    </a>
                                                </li>{" "}
                                            </ul>
                                        </li>
                                        {/* <li class="footer"><a href="#">View all</a></li>*/}
                                    </ul>
                                </li>{" "}
                                {/* User Account: style can be found in dropdown.less */}
                                <li className="dropdown user user-menu">
                                    <a
                                        href="#"
                                        className="dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        <img
                                            src={user_logo}
                                            className="img-circle"
                                            alt=" ."
                                            style={{
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />{" "}
                                        <span className="hidden-xs">
                                            {" "}
                                            Alex Akamukali{" "}
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/* User image */}
                                        <li className="user-header">
                                            <img
                                                src={user_logo}
                                                className="img-circle"
                                                alt="User Image"
                                            />
                                            <p>
                                                Alex Akamukali -{" "}
                                                {/* <small>Member since 2022/03/28 21:07:04</small> */}
                                                <small>
                                                    Registered since Mar. 2022
                                                </small>
                                            </p>
                                        </li>
                                        {/* Menu Body */}
                                        {/*<li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
              </li> */}
                                        {/* Menu Footer*/}
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary btn-flat"
                                                >
                                                    Profile
                                                </a>
                                            </div>
                                            <div className="pull-right">
                                                <form
                                                    method="post"
                                                    action={logout_route}
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="_token"
                                                        value={csrf}
                                                    />
                                                    <button className="btn btn-primary btn-flat">
                                                        Sign out
                                                    </button>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                {/* Control Sidebar Toggle Button
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
          */}
                            </ul>
                        </div>
                    </nav>
                </header>{" "}
                {/* Left side column. contains the logo and sidebar */}
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section
                        className="sidebar active"
                        style={{ height: "auto" }}
                    >
                        {/* Sidebar user panel */}
                        {/* /.search form */}
                        {/* sidebar menu: : style can be found in sidebar.less */}
                        <ul className="sidebar-menu tree" data-widget="tree">
                            <li className="header"> &nbsp; </li>
                            {/* Optionally, you can add icons to the links */}
                            <li className="active">
                                <a href="https://erp.oladeconsulting.com/">
                                    <i className="fa fa-tachometer" />{" "}
                                    <span> Dashboard </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <Link href="#">
                                    <i className="fa fa-users" />{" "}
                                    <span>Users..</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li>

                                    <Link href={user_profile_route}>
                                      <i className="fa fa-id-card" /> All
                                            User
                                    </Link>

                                        <a href="https://erp.oladeconsulting.com/admin/users">
                                            {" "}
                                            <i className="fa fa-id-card" /> All
                                            User
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/activeusers">
                                            {" "}
                                            <i className="fa fa-id-card text-green" />{" "}
                                            Active
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/inactiveusers">
                                            {" "}
                                            <i className="fa fa-id-card text-red" />{" "}
                                            Inactive
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/alumniusers">
                                            {" "}
                                            <i className="fa fa-id-card text-yellow" />{" "}
                                            Alumni{" "}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <li class="treeview">
          <a href="#"><i class="fa fa-database"></i> <span> Admin Payments </span>
        <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
         <ul class="treeview-menu">
            <li> <a href="contractPayment"> <i class="fa fa-money text-green"></i> Contract Payment</a></li>
            <li> <a href="FTEPayment"> <i class="fa fa-money text-blue"></i>  FTE Payment </a></li>
          </ul>
        </li> */}
                            <li className="treeview">
                                <a href="https://erp.oladeconsulting.com/admin/#">
                                    <i className="fa fa-pie-chart" />{" "}
                                    <span> Reports </span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/JobDetailsConsultants">
                                            {" "}
                                            <i className="fa fa-line-chart text-green" />{" "}
                                            Consultants on Job
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/">
                                            {" "}
                                            <i className="fa fa-bar-chart text-blue" />{" "}
                                            On FTE Job{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/">
                                            {" "}
                                            <i className="fa fa-bar-chart text-aqua" />{" "}
                                            On Contract Job{" "}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="https://erp.oladeconsulting.com/admin/#">
                                    <i className="fa fa-envelope" />{" "}
                                    <span> Communication </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="https://erp.oladeconsulting.com/admin/#">
                                    <i className="fa fa-money text-aqua" />{" "}
                                    <span> Accounts Payments </span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/ACCOUNTcontractPayment">
                                            {" "}
                                            <i className="fa fa-money text-green" />{" "}
                                            Contract Payment
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/ACCOUNTFTEPayment">
                                            {" "}
                                            <i className="fa fa-money text-blue" />{" "}
                                            FTE Payment{" "}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="https://erp.oladeconsulting.com/admin/#">
                                    <i className="fa fa-tasks" />{" "}
                                    <span>Document Library</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/docContract">
                                            {" "}
                                            <i className="fa fa-file" /> Olade
                                            Contract
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/#">
                                            {" "}
                                            <i className="fa fa-file-o" />{" "}
                                            Employment Contract
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/#">
                                            {" "}
                                            <i className="fa fa-file text-green" />{" "}
                                            Invoices
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/#">
                                            {" "}
                                            <i className="fa fa-money" />{" "}
                                            Payment Stub{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/#">
                                            {" "}
                                            <i className="fa fa-file text-aqua" />{" "}
                                            Resumes{" "}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="https://erp.oladeconsulting.com/admin/#">
                                    <i className="fa fa-folder" />{" "}
                                    <span> Projects </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://erp.oladeconsulting.com/admin/usersTeams">
                                    <i className="fa fa-users" />{" "}
                                    <span> Teams </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="https://erp.oladeconsulting.com/admin/#">
                                    <i className="fa fa-cogs" />{" "}
                                    <span> Settings </span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/programtype">
                                            {" "}
                                            <i className="fa fa-graduation-cap" />{" "}
                                            Program Type{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/knowledgearea">
                                            {" "}
                                            <i className="fa fa-book text-orange" />{" "}
                                            Knowledge Area{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/oladecontracttype">
                                            {" "}
                                            <i className="fa fa-file-o text-green" />{" "}
                                            Olade Contract Type{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/companies">
                                            {" "}
                                            <i className="fa fa-bank text-aqua" />{" "}
                                            Vendors{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/payrollmgrs">
                                            {" "}
                                            <i className="fa fa-money text-blue" />{" "}
                                            Payroll Mgrs.{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/zoomaccount">
                                            {" "}
                                            <i className="fa fa-desktop text-orange" />{" "}
                                            Zoom Setup{" "}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="https://erp.oladeconsulting.com/admin/#">
                                    <i className="fa fa-key" />{" "}
                                    <span> Role Management </span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right" />
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/roles">
                                            {" "}
                                            <i className="fa fa-wrench text-aqua" />{" "}
                                            Assign Roles{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="https://erp.oladeconsulting.com/admin/docusignsigners">
                                            {" "}
                                            <i className="fa fa-edit text-aqua" />{" "}
                                            DocuSign Signers{" "}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="https://erp.oladeconsulting.com/utility/logout">
                                    <i className="fa fa-power-off" />{" "}
                                    <span> Sign Out </span>
                                </a>
                            </li>
                        </ul>
                    </section>
                    {/* /.sidebar */}
                </aside>
                {/* Content Wrapper. Contains page content */}
                <div
                    className="content-wrapper"
                    style={{ minHeight: "531.141px" }}
                >
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Dashboard
                            <small>Version 1.0</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href="https://erp.oladeconsulting.com/admin/">
                                    <i className="fa fa-dashboard" /> Home
                                </a>
                            </li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </section>
                    {/* Main content */}
                    <section className="content">
                        {/* Info boxes */}
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 1.0{" "}
                    </div>
                    <strong>
                        Copyright © 2021{" "}
                        <a href="https://oladeconsulting.com/" target="_blank">
                            {" "}
                            Olade Consulting{" "}
                        </a>
                    </strong>{" "}
                    All rights reserved.
                </footer>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Create the tabs */}
                    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                        <li>
                            <a
                                href="https://erp.oladeconsulting.com/admin/#control-sidebar-home-tab"
                                data-toggle="tab"
                            >
                                <i className="fa fa-home" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://erp.oladeconsulting.com/admin/#control-sidebar-settings-tab"
                                data-toggle="tab"
                            >
                                <i className="fa fa-gears" />
                            </a>
                        </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        {/* Home tab content */}
                        <div className="tab-pane" id="control-sidebar-home-tab">
                            <h3 className="control-sidebar-heading">
                                Recent Activity
                            </h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="">
                                        <i className="menu-icon fa fa-birthday-cake bg-red" />
                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">
                                                Langdon's Birthday
                                            </h4>
                                            <p>Will be 23 on April 24th</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="menu-icon fa fa-user bg-yellow" />
                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">
                                                Frodo Updated His Profile
                                            </h4>
                                            <p>New phone +1(800)555-1234</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="menu-icon fa fa-envelope-o bg-light-blue" />
                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">
                                                Nora Joined Mailing List
                                            </h4>
                                            <p>nora@example.com</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="menu-icon fa fa-file-code-o bg-green" />
                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">
                                                Cron Job 254 Executed
                                            </h4>
                                            <p>Execution time 5 seconds</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            {/* /.control-sidebar-menu */}
                            <h3 className="control-sidebar-heading">
                                Tasks Progress
                            </h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="">
                                        <h4 className="control-sidebar-subheading">
                                            Custom Template Design
                                            <span className="label label-danger pull-right">
                                                70%
                                            </span>
                                        </h4>
                                        <div className="progress progress-xxs">
                                            <div
                                                className="progress-bar progress-bar-danger"
                                                style={{ width: "70%" }}
                                            />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h4 className="control-sidebar-subheading">
                                            Update Resume
                                            <span className="label label-success pull-right">
                                                95%
                                            </span>
                                        </h4>
                                        <div className="progress progress-xxs">
                                            <div
                                                className="progress-bar progress-bar-success"
                                                style={{ width: "95%" }}
                                            />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h4 className="control-sidebar-subheading">
                                            Laravel Integration
                                            <span className="label label-warning pull-right">
                                                50%
                                            </span>
                                        </h4>
                                        <div className="progress progress-xxs">
                                            <div
                                                className="progress-bar progress-bar-warning"
                                                style={{ width: "50%" }}
                                            />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <h4 className="control-sidebar-subheading">
                                            Back End Framework
                                            <span className="label label-primary pull-right">
                                                68%
                                            </span>
                                        </h4>
                                        <div className="progress progress-xxs">
                                            <div
                                                className="progress-bar progress-bar-primary"
                                                style={{ width: "68%" }}
                                            />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            {/* /.control-sidebar-menu */}
                        </div>
                        {/* /.tab-pane */}
                        {/* Settings tab content */}
                        <div
                            className="tab-pane"
                            id="control-sidebar-settings-tab"
                        >
                            <form method="post">
                                <h3 className="control-sidebar-heading">
                                    General Settings
                                </h3>
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Report panel usage
                                        <input
                                            type="checkbox"
                                            className="pull-right"
                                            defaultChecked
                                        />
                                    </label>
                                    <p>
                                        Some information about this general
                                        settings option
                                    </p>
                                </div>
                                {/* /.form-group */}
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Allow mail redirect
                                        <input
                                            type="checkbox"
                                            className="pull-right"
                                            defaultChecked
                                        />
                                    </label>
                                    <p>Other sets of options are available</p>
                                </div>
                                {/* /.form-group */}
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Expose author name in posts
                                        <input
                                            type="checkbox"
                                            className="pull-right"
                                            defaultChecked
                                        />
                                    </label>
                                    <p>
                                        Allow the user to show his name in blog
                                        posts
                                    </p>
                                </div>
                                {/* /.form-group */}
                                <h3 className="control-sidebar-heading">
                                    Chat Settings
                                </h3>
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Show me as online
                                        <input
                                            type="checkbox"
                                            className="pull-right"
                                            defaultChecked
                                        />
                                    </label>
                                </div>
                                {/* /.form-group */}
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Turn off notifications
                                        <input
                                            type="checkbox"
                                            className="pull-right"
                                        />
                                    </label>
                                </div>
                                {/* /.form-group */}
                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Delete chat history
                                        <a
                                            href=""
                                            className="text-red pull-right"
                                        >
                                            <i className="fa fa-trash-o" />
                                        </a>
                                    </label>
                                </div>
                                {/* /.form-group */}
                            </form>
                        </div>
                        {/* /.tab-pane */}
                    </div>
                </aside>{" "}
                {/* /.control-sidebar */}
                {/* Add the sidebar's background. This div must be placed
       immediately after the control sidebar */}
                <div className="control-sidebar-bg" />
            </div>
        </>
    );
};
export default Dashboard;
