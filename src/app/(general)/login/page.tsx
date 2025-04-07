"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Login() {

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    startTransition(async () => {
      const res = await fetch("/auth/login-api", {
        method: "POST",
        credentials: "include", // important to include cookies
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setMessage(data.message || data.error || "Unknown response");
    });
  };

  useEffect(() => {
      if (message === "Đăng nhập thành công!") {
        const timeoutId = setTimeout(() => {
          window.location.replace('/home');
        }, 3000);
        return () => clearTimeout(timeoutId);
      }
    }, [message]);
    
      return (
        <>
        <title>Đăng nhập</title>
          {/* Offcanvas Overlay */}
          <div className="offcanvas-overlay" />
          {/* ...:::: Start Breadcrumb Section:::... */}
          <div className="breadcrumb-section breadcrumb-bg-color--golden">
            <div className="breadcrumb-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h3 className="breadcrumb-title">Đăng nhập</h3>
                    <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                      <nav aria-label="breadcrumb">
                        <ul>
                          <li>
                            <Link href="/">Trang chủ</Link>
                          </li>
                          <li className="active" aria-current="page">
                            Đăng nhập
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ...:::: End Breadcrumb Section:::... */}
          {/* Start Login Page */}
          <div className="login-register-area section-fluid bg-gray">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="login-form-wrap text-center">
                    <h2 className="form-title">Đăng nhập</h2>
                    <p>Nhập email và mật khẩu của bạn để đăng nhập vào hệ thống.</p>
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
                        <button type="submit" className="btn btn-primary w-100" disabled={isPending}>
                        {isPending ? 'Đang xử lí' : 'Đăng nhập'}
                        </button>
                      </div>
                    </form>
                    {message && <p>{message}</p>}
                    <div className="form-footer mt-3">
                      <Link href="/forgot-password">Quên mật khẩu?</Link>
                      <span> | </span>
                      <Link href="/register">Đăng ký tài khoản</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Login Page */}
        </>
      );
    };