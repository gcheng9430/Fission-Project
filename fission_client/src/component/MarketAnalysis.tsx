
import {Component} from "react";


export class MarketAnalysis extends Component {

    constructor(props:{}) {
        super(props);
    }
    render(){
        return(
            <div className="container-fluid mx-1">
                {/*page heading*/}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Market Analysis</h1>
                    <p>Time: {Date.now()}</p>
                </div>
                {/*content row*/}
                <div className="row">
                    {/*PV*/}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    {/*字*/}
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            PV</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">2,683 次</div>
                                    </div>
                                    {/*图*/}
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*UV*/}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            UV</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">2,578 人</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*分享次数*/}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">总分享次数Total Sending Out
                                        </div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">2,889次</div>
                                            </div>
                                            <div className="col">
                                                {/*<div class="progress progress-sm mr-2">*/}
                                                {/*    /!*<div class="progress-bar bg-info" role="progressbar"*!/*/}
                                                {/*    /!*     style="width: 50%" aria-valuenow="50" aria-valuemin="0"*!/*/}
                                                {/*    /!*     aria-valuemax="100"></div>*!/*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*分享人数*/}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Total Senders总分享人数</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">15,116 人</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end of content row*/}

                {/*another content row*/}
                <div className = "row">
                    {/*/!*分享/启动用户 *!/ 这里可以放每天的或者迄今为止的participation count参与度/fission count成功裂变次数/Acquisition Count拉新人数*/}
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            {/*card header*/}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Fission Count Overview</h6>
                            </div>
                            {/*card body*/}
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*再裂变用户趋势 这里可以放每天的或者迄今为止的participation count参与度/fission count成功裂变次数/Acquisition Count拉新人数 */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            {/*card header*/}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">User Activation Overview</h6>
                            </div>
                            {/*card body*/}
                            <div className="card-body">
                                <div className="chart-pie pt-4 pb-2">
                                    <canvas id="myPieChart"></canvas>
                                </div>
                                <div className="mt-4 text-center small">
                                        <span className="mr-2">
                                            <i className="fas fa-circle text-primary"></i> Participated More than once
                                        </span>
                                    <span className="mr-2">
                                            <i className="fas fa-circle text-success"></i> Participated Once
                                        </span>
                                    <span className="mr-2">
                                            <i className="fas fa-circle text-info"></i> No participation
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                {/*end of content row*/}



                {/*not working */}
                <script src="../../js/char-area-demo.js"></script>


            </div>





        );
    }


}