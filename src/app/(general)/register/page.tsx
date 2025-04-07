"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { RegisterUser } from "./register_func";
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();
  
    useEffect(() => {
      async function checkRole() {
        try {
          const res = await fetch('https://flaskbackendapi.onrender.com/my-role', {
            credentials: 'include'
          });
          const data = await res.json();
  
          if (data.role && data.role !== 'none') {
            // Already logged in, redirect to home
            router.replace('/home');
          }
        } catch (err) {
          console.error("Error checking user role", err);
        }
      }
  
      checkRole();
    }, [router]);

  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await RegisterUser(formData);
      setMessage(res.message || res.error || "Unknown response");
    });
  };

  return (
    <>
  {/* ...:::: Start Breadcrumb Section:::... */}
  <div className="breadcrumb-section breadcrumb-bg-color--golden">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Đăng ký</h3>
            <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
              <nav aria-label="breadcrumb">
                <ul>
                  <li>
                    <Link href="/homel">Trang chủ</Link>
                  </li>
                  <li className="active" aria-current="page">
                    {" "}
                    Đăng ký
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
  <br />
  <br />
  <br />
  <br />
  <br />
  {/* Start Register Page */}
  <div className="login-register-area section-fluid bg-gray">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="register-form-wrap text-center">
            <h2 className="form-title">Đăng ký</h2>
            <p>Vui lòng điền đầy đủ thông tin để tạo tài khoản.</p>
            <form id="register-form" onSubmit={handleSubmit}>
              {/* Dòng 1: Họ và Tên */}
              <div className="input-row">
                <div className="single-input-item">
                  <label htmlFor="first-name">Họ tên</label>
                  <input
                    type="text"
                    id="first-name"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="single-input-item">
                  <label htmlFor="last-name">Email</label>
                  <input
                    type="text"
                    id="last-name"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              {/* Dòng 2: Ngày sinh */}
              <div className="single-input-item">
                <label htmlFor="dob">Ngày sinh *</label>
                <input
                  type="date"
                  id="dob"
                  name="birthday"
                  className="form-control"
                  required
                />
              </div>
              <div className="single-input-item">
                <label htmlFor="dob">Số điện thoại *</label>
                <input
                  type="tel"
                  id="dob"
                  name="phone"
                  className="form-control"
                  required
                />
              </div>
              {/* Dòng 4: Mật khẩu và Xác nhận mật khẩu */}
              <div className="input-row">
                <div className="single-input-item">
                  <label htmlFor="password">Mật khẩu *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="single-input-item">
                  <label htmlFor="confirm-password">Xác nhận mật khẩu *</label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm password"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="single-input-item">
                <button
                  type="submit"
                  className="btn w-100 btn-black-default-hover"
                  disabled={isPending}
                >
                  {isPending ? 'Đang xử lí' : 'Đăng kí'}
                </button>
              </div>
            </form>
            {message && <p>{message}</p>}
            <div className="form-footer mt-3">
              <Link href="/login">Đã có tài khoản? Đăng nhập</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}
