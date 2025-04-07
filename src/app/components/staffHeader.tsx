"use client";
import Link from "next/link";
import { getUserRole } from "./headerWrapper";

type HeaderProps = {
  role: string;
};

export function AdminHeader({ role }: HeaderProps) {

    return (
        <>
  {/* Sidebar */}
  <ul
    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    {/* Sidebar - Brand */}
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">
        Shop Management Panel
      </div>
    </a>
    {/* Divider */}
    <hr className="sidebar-divider my-0" />
    {role === "admin" &&

    <>
    <li className="nav-item active">
    <Link className="nav-link" href="/admin/dashboard">
      <i className="fas fa-fw fa-tachometer-alt" />
      <span>Thống kê</span>
    </Link>
  </li><hr className="sidebar-divider" /><div className="sidebar-heading">Tài khoản</div><li className="nav-item">
      <Link className="nav-link" href="/admin/manage-account">
        <i className="fas fa-user" />
        <span>Quản lý tài khoản</span>
      </Link>
    </li>
    </>
    }
    
    {/* Divider */}
    <hr className="sidebar-divider" />
    <div className="sidebar-heading">Sản phẩm</div>
    {/* Quản lý sản phẩm */}
    <li className="nav-item">
      <Link className="nav-link" href="/staff/manage-product">
        <i className="fas fa-fw fa-chart-area" />
        <span>Quản lý sản phẩm</span>
      </Link>
    </li>
    {/* Quản lý danh mục */}
    <li className="nav-item">
      <Link className="nav-link" href="/staff/manage-category">
        <i className="fas fa-fw fa-table" />
        <span>Quản lý danh mục</span>
      </Link>
    </li>
    {/* Quản lý đơn hàng */}
    <li className="nav-item">
      <Link className="nav-link" href="/staff/manage-order">
        <i className="fas fa-box" />
        <span>Quản lý đơn hàng</span>
      </Link>
    </li>
    {/* Quản lý giao hàng */}
    {/* Quản lý khách hàng */}
    <li className="nav-item">
      <Link className="nav-link" href="/staff/manage-comment">
        <i className="fas fa-box" />
        <span>Quản lý đánh giá</span>
      </Link>
    </li>
  </ul>
  {/* End of Sidebar */}
</>

    );
}