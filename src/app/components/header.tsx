// Header.tsx (Client Component)
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
  role: string;
};

export function Header({ role }: HeaderProps) {
  let href: string;
  let text: string;

  if (role === "none") {
    href = "/login";
    text = "Đăng nhập";
  } else if (role === "user") {
    href = "/my-account";
    text = "Trang của tôi";
  } else if (role === "staff" || role === "admin") {
    href = "/staff/setting";
    text = "Trang quản lí";
  } else {
    href = "/login";
    text = "Đăng nhập";
  }

  return (
    // <>
    //   <p>This is header</p>
    //   <Link href={href}>{text}</Link>
    //   {role === "user" && <CartItem />}
    // </>
    <>
  {/* Start Header Area */}
  <header className="header-section d-none d-xl-block">
    <div className="header-wrapper">
      <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              {/* Start Header Logo */}
              <div className="header-logo">
                <div className="logo">
                  <Link href="/home">
                    <img src="../../../updated_asset/shop-hono/assets/images/logo/logo_black.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* End Header Logo */}
              {/* Start Header Main Menu */}
              <div className="main-menu menu-color--black menu-hover-color--golden">
                <nav>
                  <ul>
                    <li className="has-dropdown">
                      <Link className="active main-menu-link" href="/home">
                        Trang chủ
                      </Link>
                    </li>
                    <li className="has-dropdown has-megaitem">
                      <Link href="/products">Cửa hàng</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link href="#">
                        Trang <i className="fa fa-angle-down" />
                      </Link>
                      {/* Sub Menu */}
                      <ul className="sub-menu">
                        <li>
                          <Link href="#">Câu hỏi thường gặp</Link>
                        </li>
                        <li>
                          <Link href="privacy-policy.html">Chính sách</Link>
                        </li>
                      </ul>
                    </li>
                  {role === "user" &&
                  <li>
                    <Link href="/my-cart">Giỏ hàng</Link>
                  </li>
                  }
                  
                    
                    <li>
                      <Link href="#">Giới thiệu</Link>
                    </li>
                    <li>
                      <Link href="#">Liên hệ</Link>
                    </li>
                    <li>
                      <div className="single-input-item">
                        <Link href={href} className="btn btn-login w-100">
                          {text}
                        </Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* End Header Main Menu Start */}
              {/* Start Header Action Link */}
              <ul className="header-action-link action-color--black action-hover-color--golden">
                <li>
                  {/* {role === "user" &&
                  <a href="#offcanvas-add-cart">
                  <i className="icon-bag" />
                  <span className="item-count">0</span>
                </a>
                  } */}
                </li>
              </ul>
              {/* End Header Action Link */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Start Header Area */}
  {/* MOBILE HEADER */}
  <div className="mobile-header mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-between">
          {/* Phần bên trái: Logo */}
          <div className="mobile-header-left">
            <ul className="mobile-menu-logo">
              <li>
                <a href="index.html">
                  <div className="logo">
                    <img src="../../../updated_asset/shop-hono/assets/images/logo/logo_black.png" alt="Logo" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* Phần bên phải: Các action (tìm kiếm, wishlist, giỏ hàng, menu) */}
          <div className="mobile-header-right">
            <ul className="header-action-link action-color--black action-hover-color--golden">
              {/* Nút giỏ hàng */}
              <li>
                <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                  <i className="icon-bag" />
                  <span className="item-count">3</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END MOBILE HEADER */}
  {/* MOBILE OFFCANVAS MENU */}
  <div
    id="mobile-menu-offcanvas"
    className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section"
  >
    {/* Offcanvas Header: Nút đóng */}
    <div className="offcanvas-header text-right">
      <button className="offcanvas-close">
        <i className="ion-android-close" />
      </button>
    </div>
    {/* Wrapper chứa menu di động */}
    <div className="offcanvas-mobile-menu-wrapper">
      {/* Menu di động: Sửa nội dung menu theo yêu cầu website */}
      <nav className="offcanvas-menu">
        <ul>
          <li>
            <a href="index.html">Trang chủ</a>
          </li>
          <li>
            <a href="shop-grid-sidebar-left.html">Cửa hàng</a>
          </li>
          <li>
            <a href="#">Trang</a>
            {/* Sub menu */}
            <ul className="mobile-sub-menu">
              <li>
                <a href="faq.html">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="privacy-policy.html">Chính sách</a>
              </li>
              <li>
                <a href="404.html">404 Page</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about-us.html">Giới thiệu</a>
          </li>
          <li>
            <a href="contact-us.html">Liên hệ</a>
          </li>
          <li>
            <a href="login.html">Đăng nhập</a>
          </li>
        </ul>
      </nav>
      {/* End Mobile contact Info */}{" "}
    </div>
  </div>
  {/* END MOBILE OFFCANVAS MENU */}
  {/* Offcanvas Addcart Section */}
  <div
    id="offcanvas-add-cart"
    className="offcanvas offcanvas-rightside offcanvas-add-cart-section"
  >
    {/* Start Offcanvas Header */}
    <div className="offcanvas-header text-right">
      <button className="offcanvas-close">
        <i className="ion-android-close" />
      </button>
    </div>
    
    {/* End Offcanvas Header */}
    {/* Start Offcanvas Addcart Wrapper */}
    {/* <div className="offcanvas-add-cart-wrapper">
      <h4 className="offcanvas-title">GIỎ HÀNG</h4>
      <ul className="offcanvas-cart">
      {role === "user" && <p>Hi</p>}
      </ul>
      <div className="offcanvas-cart-total-price">
        <span className="offcanvas-cart-total-price-text">TỔNG TIỀN:</span>
        <span className="offcanvas-cart-total-price-value">0 VND</span>
      </div>
      <ul className="offcanvas-cart-action-button">
        <li>
          <Link href="/check-out" className="btn btn-block btn-golden mt-5">
            THANH TOÁN
          </Link>
        </li>
      </ul>
    </div> */}
    {/* End Offcanvas Addcart Wrapper */}
  </div>
  {/* End Offcanvas Addcart Section */}
  {/* Start Offcanvas Mobile Menu Section */}
  <div
    id="offcanvas-wishlish"
    className="offcanvas offcanvas-rightside offcanvas-add-cart-section"
  >
    {/* Start Offcanvas Header */}
    <div className="offcanvas-header text-right">
      <button className="offcanvas-close">
        <i className="ion-android-close" />
      </button>
    </div>
  </div>
</>

  );
}
