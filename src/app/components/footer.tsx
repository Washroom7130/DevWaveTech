"use client";

import Link from "next/link";

export function Footer() {

    return (
        <>
  {/* Start Footer Section */}
  <footer className="footer-section footer-bg">
    <div className="footer-wrapper">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row mb-n6">
            <div className="col-lg-3 col-sm-6 mb-6">
              {/* Start Footer Single Item */}
              <div
                className="footer-widget-single-item footer-widget-color--golden"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <h5 className="title">Thông tin</h5>
                <ul className="footer-nav">
                  <li>
                    <Link href="#">Thông tin vận chuyển</Link>
                  </li>
                  <li>
                    <Link href="#">Điều khoản &amp; Điều kiện</Link>
                  </li>
                  <li>
                    <Link href="#">Liên hệ</Link>
                  </li>
                </ul>
              </div>
              {/* End Footer Single Item */}
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              {/* Start Footer Single Item */}
              <div
                className="footer-widget-single-item footer-widget-color--golden"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h5 className="title">Chính sách</h5>
                <ul className="footer-nav">
                  <li>
                    <Link href="#">Chính sách</Link>
                  </li>
                  <li>
                    <Link href="#">Câu hỏi thường gặp</Link>
                  </li>
                </ul>
              </div>
              {/* End Footer Single Item */}
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              {/* Start Footer Single Item */}
              <div
                className="footer-widget-single-item footer-widget-color--golden"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <h5 className="title">Danh mục sản phẩm</h5>
                <ul className="footer-nav">
                  <li>
                    <Link href="/products?category=1">Gốm sứ</Link>
                  </li>
                  <li>
                    <Link href="/products?category=2">Mây tre đan</Link>
                  </li>
                  <li>
                    <Link href="/products?category=3">Trang sức</Link>
                  </li>
                  <li>
                    <Link href="/products?category=4">Tranh nghệ thuật</Link>
                  </li>
                  <li>
                    <Link href="/products?category=5">Tượng điêu khắc</Link>
                  </li>
                </ul>
              </div>
              {/* End Footer Single Item */}
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              {/* Start Footer Single Item */}
              <div
                className="footer-widget-single-item footer-widget-color--golden"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <h5 className="title">Giới thiệu</h5>
                <div className="footer-about">
                  <p>
                    Chúng tôi là đội ngũ thiết kế cho môn đồ án với chủ để:
                    Website bán hàng thủ công mỹ nghệ
                  </p>
                  <address className="address">
                    <span>Địa chỉ: CMC UNIVERSITY - IT5</span>
                    <span>Email: cmc@mail.com</span>
                  </address>
                </div>
              </div>
              {/* End Footer Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top */}
      {/* Start Footer Center */}
      <div className="footer-center">
        <div className="container">
          <div className="row mb-n6">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-6">
              <div
                className="footer-social"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <h4 className="title">Theo dõi chúng tôi</h4>
                <ul className="footer-social-link">
                  <li>
                    <Link href="#">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6 mb-6">
              <div
                className="footer-newsletter"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h4 className="title">ĐỪNG BỎ LỠ NHỮNG THÔNG BÁO MỚI NHẤT</h4>
                <div className="form-newsletter">
                  <form>
                    <div className="form-fild-newsletter-single-item input-color--golden">
                      <input
                        type="email"
                        placeholder="Your email address..."
                        required
                      />
                      <button type="submit">ĐĂNG KÝ!</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer Center */}
      {/* Start Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-between align-items-center align-items-center flex-column flex-md-row mb-n6">
            <div className="col-auto mb-6">
              <div className="footer-copyright">
                <p>
                  {" "}
                  COPYRIGHT ©{" "}
                  <Link href="https://hasthemes.com/" target="_blank">
                    HasThemes
                  </Link>
                  . ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>
            <div className="col-auto mb-6">
              <div className="footer-payment">
                <div className="image">
                  <img src="../../../updated_asset/shop-hono/assets/images/company-logo/payment.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer Bottom */}
    </div>
  </footer>
  {/* End Footer Section */}
  {/* material-scrolltop button */}
  <button className="material-scrolltop" type="button" />
</>

    );
}