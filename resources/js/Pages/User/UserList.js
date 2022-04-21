import Layout from "../Dashboard/Layout";

const UserList =()=>{

    return (<>
      <div className="row">
        <div className="col-md-12">
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title" />
              <div className="box-tools pull-right">
                <button className="btn btn-info" data-toggle="modal" data-target="#modal-ivuser"> Invite Candidate </button>
                {/* <button class="btn btn-success" data-toggle="modal" data-target="#modal-ivadmin"> Invite Admin </button> */}
                {/* <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button> */}
              </div>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <div className="table-responsive">
                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer"><div className="row"><div className="col-sm-6"><div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control input-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-6"><div id="DataTables_Table_0_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm" placeholder aria-controls="DataTables_Table_0" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table data-table table-striped table-bordered table-hover simple dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                        <thead>
                          <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending">Name</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Email: activate to sort column ascending">Email</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Program: activate to sort column ascending">Program</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Date: activate to sort column ascending">Date</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label=" &nbsp; : activate to sort column ascending"> &nbsp; </th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label=" &nbsp; : activate to sort column ascending"> &nbsp; </th></tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=c2aa1951a32f33b047954754f0ae" style={{color: '#000'}}>  Chidi  Moses </a> </td>
                            <td> <a href="userProfileDashboard?scand=c2aa1951a32f33b047954754f0ae" style={{color: '#000'}}> Chidorimoses@gmail.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=c2aa1951a32f33b047954754f0ae" style={{color: '#000'}}> Project Management </a> </td>
                            <td> 2022-03-09 09:42:00</td>
                            <td> <label className="text-success" id="acctstc2aa1951a32f33b047954754f0ae"> Active </label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=c2aa1951a32f33b047954754f0ae"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="c2aa1951a32f33b047954754f0ae" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="even">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=878d35927ebab7003ce59c4a4af5" style={{color: '#000'}}>  gaurav  kathuria </a> </td>
                            <td> <a href="userProfileDashboard?scand=878d35927ebab7003ce59c4a4af5" style={{color: '#000'}}> kathuriagaurav416@gmail.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=878d35927ebab7003ce59c4a4af5" style={{color: '#000'}}> Business Analysis </a> </td>
                            <td> 2021-09-03 13:46:29</td>
                            <td> <label className="text-success" id="acctst878d35927ebab7003ce59c4a4af5"> Active </label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=878d35927ebab7003ce59c4a4af5"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="878d35927ebab7003ce59c4a4af5" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="odd">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=e7d47ecb8f3ff65596f9aa14bed2" style={{color: '#000'}}>  Jamila  Rufai </a> </td>
                            <td> <a href="userProfileDashboard?scand=e7d47ecb8f3ff65596f9aa14bed2" style={{color: '#000'}}> jamilausman212@gmail.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=e7d47ecb8f3ff65596f9aa14bed2" style={{color: '#000'}}></a> </td>
                            <td> 2022-03-14 20:15:28</td>
                            <td> <label className="text-success" id="acctste7d47ecb8f3ff65596f9aa14bed2"> Active </label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=e7d47ecb8f3ff65596f9aa14bed2"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="e7d47ecb8f3ff65596f9aa14bed2" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="even">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=7f20f0d9b2504614e9b127a9b2ca" style={{color: '#000'}}>  Jennifer  Oden </a> </td>
                            <td> <a href="userProfileDashboard?scand=7f20f0d9b2504614e9b127a9b2ca" style={{color: '#000'}}> Jennifer.vangelis-oden@pro-insight.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=7f20f0d9b2504614e9b127a9b2ca" style={{color: '#000'}}></a> </td>
                            <td> 2022-03-09 20:25:31</td>
                            <td> <label className="text-warning" id="acctst7f20f0d9b2504614e9b127a9b2ca"> Invited</label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=7f20f0d9b2504614e9b127a9b2ca"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="7f20f0d9b2504614e9b127a9b2ca" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="odd">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=471b2dc92c93feb015f975a018a3" style={{color: '#000'}}>  Jenny  Oden </a> </td>
                            <td> <a href="userProfileDashboard?scand=471b2dc92c93feb015f975a018a3" style={{color: '#000'}}> jennifer.vangelis@gmail.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=471b2dc92c93feb015f975a018a3" style={{color: '#000'}}> Business Analysis </a> </td>
                            <td> 2022-03-09 20:51:35</td>
                            <td> <label className="text-success" id="acctst471b2dc92c93feb015f975a018a3"> Active </label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=471b2dc92c93feb015f975a018a3"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="471b2dc92c93feb015f975a018a3" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="even">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=dc15434a3e58e1d95c5a90f7e0b8" style={{color: '#000'}}>  Kemi  Johnson </a> </td>
                            <td> <a href="userProfileDashboard?scand=dc15434a3e58e1d95c5a90f7e0b8" style={{color: '#000'}}> segunlogba69@gmail.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=dc15434a3e58e1d95c5a90f7e0b8" style={{color: '#000'}}></a> </td>
                            <td> 2022-03-10 21:52:03</td>
                            <td> <label className="text-warning" id="acctstdc15434a3e58e1d95c5a90f7e0b8"> Invited</label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=dc15434a3e58e1d95c5a90f7e0b8"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="dc15434a3e58e1d95c5a90f7e0b8" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="odd">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=b5aaa4dabfd8e23329dc621f9d57" style={{color: '#000'}}>  Kemi  Nkechi </a> </td>
                            <td> <a href="userProfileDashboard?scand=b5aaa4dabfd8e23329dc621f9d57" style={{color: '#000'}}> kemi.nkechi@gmail.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=b5aaa4dabfd8e23329dc621f9d57" style={{color: '#000'}}> Business Analysis </a> </td>
                            <td> 2022-03-14 12:45:51</td>
                            <td> <label className="text-success" id="acctstb5aaa4dabfd8e23329dc621f9d57"> Active </label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=b5aaa4dabfd8e23329dc621f9d57"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="b5aaa4dabfd8e23329dc621f9d57" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="even">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=bc66d290f28df0176ee1aecc6a19" style={{color: '#000'}}>  Lola  Olasimbo </a> </td>
                            <td> <a href="userProfileDashboard?scand=bc66d290f28df0176ee1aecc6a19" style={{color: '#000'}}> fumyzee@yahoo.ca </a> </td>
                            <td> <a href="userProfileDashboard?scand=bc66d290f28df0176ee1aecc6a19" style={{color: '#000'}}> Business Analysis </a> </td>
                            <td> 2021-06-28 03:04:37</td>
                            <td> <label className="text-success" id="acctstbc66d290f28df0176ee1aecc6a19"> Active </label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=bc66d290f28df0176ee1aecc6a19"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="bc66d290f28df0176ee1aecc6a19" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="odd">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=6a7526e6e4cff5dcf2f082cf9e6e" style={{color: '#000'}}>  nkechi  Moses </a> </td>
                            <td> <a href="userProfileDashboard?scand=6a7526e6e4cff5dcf2f082cf9e6e" style={{color: '#000'}}> ukluvs11@gmail.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=6a7526e6e4cff5dcf2f082cf9e6e" style={{color: '#000'}}> Business Analysis </a> </td>
                            <td> 2022-03-08 19:58:10</td>
                            <td> <label className="text-success" id="acctst6a7526e6e4cff5dcf2f082cf9e6e"> Active </label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=6a7526e6e4cff5dcf2f082cf9e6e"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="6a7526e6e4cff5dcf2f082cf9e6e" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr><tr role="row" className="even">
                            <td className="sorting_1"> <a href="userProfileDashboard?scand=b18550ec1bf9ec2fca2bf92fe4ce" style={{color: '#000'}}>  Puneet P.M Mehta </a> </td>
                            <td> <a href="userProfileDashboard?scand=b18550ec1bf9ec2fca2bf92fe4ce" style={{color: '#000'}}> mehtapuneet06@gmail.com </a> </td>
                            <td> <a href="userProfileDashboard?scand=b18550ec1bf9ec2fca2bf92fe4ce" style={{color: '#000'}}> Business Analysis </a> </td>
                            <td> 2021-07-05 17:10:39</td>
                            <td> <label className="text-success" id="acctstb18550ec1bf9ec2fca2bf92fe4ce"> Active </label></td>
                            <td>
                              <div className="btn-group">
                                <label className="dropdown-toggle" data-toggle="dropdown">
                                  ... {/* <span class="caret"></span> */}
                                  <span className="sr-only">Toggle Dropdown</span>
                                </label>
                                <ul className="dropdown-menu" role="menu" style={{zIndex: 9000}}>
                                  <li><a href="userProfileDashboard?scand=b18550ec1bf9ec2fca2bf92fe4ce"> <i className="fa fa-file text-info" /> View Profile </a></li>
                                  <li><a href="javascript:void(0)" usx="b18550ec1bf9ec2fca2bf92fe4ce" onclick="reInvite(this)"> <i className="fa fa-refresh text-info" /> Re-invite</a></li>
                                </ul>
                              </div>
                            </td>
                            <td> <b style={{color: '#FFF'}}> ________ </b> </td>
                          </tr></tbody>
                      </table></div></div><div className="row"><div className="col-sm-5"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 11 entries</div></div><div className="col-sm-7"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={0} tabIndex={0}>Previous</a></li><li className="paginate_button active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={1} tabIndex={0}>1</a></li><li className="paginate_button "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={2} tabIndex={0}>2</a></li><li className="paginate_button next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx={3} tabIndex={0}>Next</a></li></ul></div></div></div></div>
              </div>
              {/* /.table-responsive */}
            </div>
            {/* /.box-body */}
            <div className="box-footer clearfix">
            </div>
            {/* /.box-footer */}
          </div>
          {/* /.box */}
        </div>
      </div>
    </>);
};
UserList.layout =(page)=><Layout children={page} />;
export default UserList;
