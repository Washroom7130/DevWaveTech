import React from 'react';
import Link from 'next/link';

type Params = Promise<{ token: string[] }>;

export default async function VerifyEmail({ params }: { params: Params}) {

    const { token } = await params;

    const res = await fetch(`https://flaskbackendapi.onrender.com/verify-email/${token}`, {});
    const data = await res.json();

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
                    <Link href="/">Trang chủ</Link>
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
            {data.message || data.error}
          </h4>
        </div>
      </div>
    </div>
  </div>
          {/* ...:::: End Error Section :::... */}
        </>
        
  );

};