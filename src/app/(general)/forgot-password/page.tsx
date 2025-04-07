"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from 'next/link';
import { ForgotPass } from './forgotpass_func';
import { useRouter } from "next/navigation";

export default function Forgot_Password() {

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
          const res = await ForgotPass(formData);
          setMessage(res.message || res.error || "Unknown response");
        });
      };

    return (
        <>
        <title>Quên mật khẩu</title>
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
                    <Link href="/">Trang chủ</Link>
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
            <form id="login-form" onSubmit={handleSubmit} method="POST">
              <div className="single-input-item">
                <label htmlFor="email">Địa chỉ email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="single-input-item">
                <button type="submit" className="btn btn-primary w-100" disabled={isPending}>
                  {isPending ? 'Đang xử lí' : 'Đặt lại mật khẩu'}
                </button>
              </div>
              {message && <p>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Reset Password Page */}
</>
    );

};