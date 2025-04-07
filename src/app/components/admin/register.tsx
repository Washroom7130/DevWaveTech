import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const Register: React.FC = () => {
  return (
<>

<div className="container">

    <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            { /* Nested Row within Card Body */ }
            <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form className="user">
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                                </div>
                            </div>
                            <a href="login.html" className="btn btn-primary btn-user btn-block">
                                Register Account
                            </a>
                            <hr />
                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw" /> Register with Google
                            </a>
                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw" /> Register with Facebook
                            </a>
                        </form>
                        <hr />
                        <div className="text-center">
                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                            <a className="small" href="login.html">Already have an account? Login!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<Script src="admin/js/custom-accounts.js"/>
            <Script src="admin/js/custom-category.js" />
            <Script src="admin/js/custom-product.js"/>
            <Script src="admin/js/plugins/quan-ly-don-hang.js"/>
            <Script src="admin/js/sb-admin-2.js"/>
            <Script src="admin/js/sb-admin-2.min.js"/>
</>
        );
    };
    
    export default Register;