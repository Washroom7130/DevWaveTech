import '../../../public/shop-hono/assets/css/vendor/vendor.min.css'
import '../../../public/shop-hono/assets/css/plugins/plugins.min.css'
import '../../../public/shop-hono/assets/css/style.min.css'
import '../../../public/shop-hono/assets/css/style.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const ResetPassword: React.FC = () => {
  return (
<>
  {/* Offcanvas Overlay */}
  <div className="offcanvas-overlay" />
  {/* ...:::: Start Breadcrumb Section:::... */}
  <div className="breadcrumb-section breadcrumb-bg-color--golden">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Đặt lại mật khẩu</h3>
            <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
              <nav aria-label="breadcrumb">
                <ul>
                  <li>
                    <a href="index.html">Trang chủ</a>
                  </li>
                  <li className="active" aria-current="page">
                    Đặt lại mật khẩu
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* ...:::: End Breadcrumb Section:::... */}
  {/* Start Reset Password Page */}
  <div className="login-register-area section-fluid bg-gray">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="login-form-wrap text-center">
            <h2 className="form-title">Đặt lại mật khẩu</h2>
            <p>Nhập email để đặt lại mật khẩu tài khoản.</p>
            <form id="login-form" action="#" method="POST">
              <div className="single-input-item">
                <label htmlFor="email">Địa chỉ email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="single-input-item">
                <button type="submit" className="btn btn-primary w-100">
                  Đặt lại mật khẩu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Reset Password Page */}
  <Script src="shop-hono/assets/js/vendor/jquery-migrate-3.3.0.min.js"/>
  <Script src="shop-hono/assets/js/vendor/jquery-3.5.1.min.js" />
  <Script src="shop-hono/assets/js/vendor/vendor.min.js"/>
  <Script src="shop-hono/assets/js/plugins/plugins.min.js"/>
  <Script src="shop-hono/assets/js/main.js" />
</>

        );
    };
    
    export default ResetPassword;