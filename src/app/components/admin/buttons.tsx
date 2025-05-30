import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const Buttons: React.FC = () => {
  return (
<>{ /* Begin Page Content */ }
                <div className="container-fluid">

                    { /* Page Heading */ }
                    <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

                    <div className="row">

                        <div className="col-lg-6">

                            { /* Circle Buttons */ }
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                                </div>
                                <div className="card-body">
                                    <p>Use Font Awesome Icons (included with this theme package) along with the circle
                                        buttons as shown in the examples below!</p>
                                    { /* Circle Buttons (Default) */ }
                                    <div className="mb-2">
                                        <code>.btn-circle</code>
                                    </div>
                                    <a href="#" className="btn btn-primary btn-circle">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" className="btn btn-success btn-circle">
                                        <i className="fas fa-check" />
                                    </a>
                                    <a href="#" className="btn btn-info btn-circle">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                    <a href="#" className="btn btn-warning btn-circle">
                                        <i className="fas fa-exclamation-triangle" />
                                    </a>
                                    <a href="#" className="btn btn-danger btn-circle">
                                        <i className="fas fa-trash" />
                                    </a>
                                    { /* Circle Buttons (Small) */ }
                                    <div className="mt-4 mb-2">
                                        <code>.btn-circle .btn-sm</code>
                                    </div>
                                    <a href="#" className="btn btn-primary btn-circle btn-sm">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" className="btn btn-success btn-circle btn-sm">
                                        <i className="fas fa-check" />
                                    </a>
                                    <a href="#" className="btn btn-info btn-circle btn-sm">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                    <a href="#" className="btn btn-warning btn-circle btn-sm">
                                        <i className="fas fa-exclamation-triangle" />
                                    </a>
                                    <a href="#" className="btn btn-danger btn-circle btn-sm">
                                        <i className="fas fa-trash" />
                                    </a>
                                    { /* Circle Buttons (Large) */ }
                                    <div className="mt-4 mb-2">
                                        <code>.btn-circle .btn-lg</code>
                                    </div>
                                    <a href="#" className="btn btn-primary btn-circle btn-lg">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#" className="btn btn-success btn-circle btn-lg">
                                        <i className="fas fa-check" />
                                    </a>
                                    <a href="#" className="btn btn-info btn-circle btn-lg">
                                        <i className="fas fa-info-circle" />
                                    </a>
                                    <a href="#" className="btn btn-warning btn-circle btn-lg">
                                        <i className="fas fa-exclamation-triangle" />
                                    </a>
                                    <a href="#" className="btn btn-danger btn-circle btn-lg">
                                        <i className="fas fa-trash" />
                                    </a>
                                </div>
                            </div>

                            { /* Brand Buttons */ }
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                                </div>
                                <div className="card-body">
                                    <p>Google and Facebook buttons are available featuring each company&apos;s respective
                                        brand color. They are used on the user login and registration pages.</p>
                                    <p>You can create more custom buttons by adding a new color variable in the
                                        <code>_variables.scss</code> file and then using the Bootstrap button variant
                                        mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                                        file.</p>
                                    <a href="#" className="btn btn-google btn-block"><i className="fab fa-google fa-fw" />
                                        .btn-google</a>
                                    <a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f fa-fw" /> .btn-facebook</a>

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                                </div>
                                <div className="card-body">
                                    <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                                        the markup in the examples below. The examples below also use the
                                        <code>.text-white-50</code> helper class on the icons for additional styling,
                                        but it is not required.</p>
                                    <a href="#" className="btn btn-primary btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-flag" />
                                        </span>
                                        <span className="text">Split Button Primary</span>
                                    </a>
                                    <div className="my-2" />
                                    <a href="#" className="btn btn-success btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-check" />
                                        </span>
                                        <span className="text">Split Button Success</span>
                                    </a>
                                    <div className="my-2" />
                                    <a href="#" className="btn btn-info btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-info-circle" />
                                        </span>
                                        <span className="text">Split Button Info</span>
                                    </a>
                                    <div className="my-2" />
                                    <a href="#" className="btn btn-warning btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-exclamation-triangle" />
                                        </span>
                                        <span className="text">Split Button Warning</span>
                                    </a>
                                    <div className="my-2" />
                                    <a href="#" className="btn btn-danger btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-trash" />
                                        </span>
                                        <span className="text">Split Button Danger</span>
                                    </a>
                                    <div className="my-2" />
                                    <a href="#" className="btn btn-secondary btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-arrow-right" />
                                        </span>
                                        <span className="text">Split Button Secondary</span>
                                    </a>
                                    <div className="my-2" />
                                    <a href="#" className="btn btn-light btn-icon-split">
                                        <span className="icon text-gray-600">
                                            <i className="fas fa-arrow-right" />
                                        </span>
                                        <span className="text">Split Button Light</span>
                                    </a>
                                    <div className="mb-4" />
                                    <p>Also works with small and large button classes!</p>
                                    <a href="#" className="btn btn-primary btn-icon-split btn-sm">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-flag" />
                                        </span>
                                        <span className="text">Split Button Small</span>
                                    </a>
                                    <div className="my-2" />
                                    <a href="#" className="btn btn-primary btn-icon-split btn-lg">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-flag" />
                                        </span>
                                        <span className="text">Split Button Large</span>
                                    </a>
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
    
    export default Buttons;