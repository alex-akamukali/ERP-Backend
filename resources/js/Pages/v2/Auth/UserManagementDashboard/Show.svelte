<script context="module">
    import UserManagement from "nodejs-svelte-crud-helper/user/user-profile/Index.svelte";
    import { Layout, useForm } from "nodejs-svelte-crud-helper";
    export const layout = Layout;
</script>

<script>
    export let data;
    export let report;
    console.log(report);
    //export let name;
</script>

<UserManagement user={data} title="User Dashboard" currentTab="dashboard">
    <!-- {JSON.stringify(report)} -->

    <div
        class="box-body"
        style="background: rgb(238, 241, 246);margin: 0;padding-left: 0;padding-right: 0;"
    >
        <div class="col-md-12" style="padding: 0;">
            <div class="col-md-6" style="padding: 0;">
                <!-- small box -->
                <div class="info-box bg-white" style="min-height: 195px;">
                    <div class="inner">
                        <h3
                            style="padding-top:11px;margin: 0;font-size: 19px;font-weight: bold;margin-bottom: 11px;"
                        >
                            {report.currentJob}
                            <!-- Project Management -->
                        </h3>

                        <p>Joined {report.lastJoined}</p>
                        <!-- 2022, March 09 -->
                    </div>
                    <div>
                        {report.lastSignedContract}
                    </div>
                </div>
            </div>
            <div class="col-md-6" style="padding: 0;">
                <div class="col-md-6">
                    <div class="info-box">
                        <div class="icon-plate" style="background: #EFECFD">
                            <i
                                class="fa fa-file-o dash-icon"
                                style="color:#8D78F1"
                            />
                        </div>

                        <div class="dash-info">
                            <div class="dash-num">
                                {report.assessmentProgress.progress}/{report
                                    .assessmentProgress.progressTotal}
                            </div>
                            <span>Assessment</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info-box">
                        <div class="icon-plate" style="background:#E7F7F9 ">
                            <i
                                class="fa fa-list dash-icon"
                                style="color:#36BECD"
                            />
                        </div>

                        <div class="dash-info">
                            <div class="dash-num">
                                {report.jobProfileProgress.progress}/{report
                                    .jobProfileProgress.progressTotal}
                            </div>
                            <span>Profile</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info-box">
                        <div class="icon-plate">
                            <i class="fa fa-send-o dash-icon" />
                        </div>

                        <div class="dash-info">
                            <div class="dash-num">
                                {report.jobApplicationProgress.progress}/{report
                                    .jobApplicationProgress.progressTotal}
                            </div>
                            <span>Applications</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="info-box">
                        <div class="icon-plate">
                            <i class="fa fa-suitcase dash-icon" />
                        </div>

                        <div class="dash-info">
                            <div class="dash-num">
                                {report.onboardingProgress.progress}/{report
                                    .onboardingProgress.progressTotal}
                            </div>
                            <span>Onboarding</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                </div>
            </div>
        </div>
    </div>
</UserManagement>

<!------- SHIFT STYLE --------------->
<style type="text/css">
    .info-box {
        padding-left: 5px;
    }
    .icon-plate {
        font-size: 27px;
        display: inline-block;
        background: #fef0f1;
        padding: 8px;
        width: 64px;
        height: 64px;
        position: relative;
        border-radius: 50%;
        margin-top: 3px;
    }
    .dash-icon {
        color: #f8989f;
        margin-top: 10px;
        margin-left: 10px;
    }

    .dash-info {
        display: inline-block;
        margin-left: 12px;
    }

    .dash-num {
        font-size: 23px;
        margin-top: 3px;
    }
</style>
