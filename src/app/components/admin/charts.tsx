import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const Charts: React.FC = () => {
  return (
<>{ /* Begin Page Content */ }
                <div className="container-fluid">

                    { /* Page Heading */ }
                    <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                    <p className="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                        The charts below have been customized - for further customization options, please visit the <a target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
                            documentation</a>.</p>

                    { /* Content Row */ }
                    <div className="row">

                        <div className="col-xl-8 col-lg-7">

                            { /* Area Chart */ }
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart" />
                                    </div>
                                    <hr />
                                    Styling for the area chart can be found in the
                                    <code>/js/demo/chart-area-demo.js</code> file.
                                </div>
                            </div>

                            { /* Bar Chart */ }
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-bar">
                                        <canvas id="myBarChart" />
                                    </div>
                                    <hr />
                                    Styling for the bar chart can be found in the
                                    <code>/js/demo/chart-bar-demo.js</code> file.
                                </div>
                            </div>

                        </div>

                        { /* Donut Chart */ }
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                { /* Card Header - Dropdown */ }
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                </div>
                                { /* Card Body */ }
                                <div className="card-body">
                                    <div className="chart-pie pt-4">
                                        <canvas id="myPieChart" />
                                    </div>
                                    <hr />
                                    Styling for the donut chart can be found in the
                                    <code>/js/demo/chart-pie-demo.js</code> file.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                { /* /.container-fluid */ }

            
            { /* End of Main Content */ }
            <Script src="admin/js/custom-accounts.js"/>
            <Script src="admin/js/custom-category.js" />
            <Script src="admin/js/custom-product.js"/>
            <Script src="admin/js/plugins/quan-ly-don-hang.js"/>
            <Script src="admin/js/sb-admin-2.js"/>
            <Script src="admin/js/sb-admin-2.min.js"/>
            </>
        );
    };
    
    export default Charts;