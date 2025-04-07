import '../../../public/shop-hono/assets/css/vendor/vendor.min.css'
import '../../../public/shop-hono/assets/css/plugins/plugins.min.css'
import '../../../public/shop-hono/assets/css/style.min.css'
import '../../../public/shop-hono/assets/css/style.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const Wishlist: React.FC = () => {
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
            <h3 className="breadcrumb-title">Xác nhận email</h3>
            <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
              <nav aria-label="breadcrumb">
                <ul>
                  <li>
                    <a href="index.html">Trang chủ</a>
                  </li>
                  <li>
                    <a href="#">Trang</a>
                  </li>
                  <li className="active" aria-current="page">
                    Xác nhận email
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
  {/* ...:::: Start Error Section :::... */}
  <div className="error-section">
    <div className="container">
      <div className="row">
        <div className="error-form">
          <h4 className="sub-title" data-aos="fade-up" data-aos-delay={200}>
            Trang này có tồn tại
          </h4>
        </div>
      </div>
    </div>
  </div>
  {/* ...:::: End Error Section :::... */}
  <Script src="shop-hono/assets/js/vendor/jquery-migrate-3.3.0.min.js"/>
  <Script src="shop-hono/assets/js/vendor/jquery-3.5.1.min.js" />
  <Script src="shop-hono/assets/js/vendor/vendor.min.js"/>
  <Script src="shop-hono/assets/js/plugins/plugins.min.js"/>
  <Script src="shop-hono/assets/js/main.js"/>
</>

        );
    };
    
    export default Wishlist;