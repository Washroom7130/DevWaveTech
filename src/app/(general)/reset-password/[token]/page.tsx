"use client";
import React, { useState, useTransition, useEffect } from "react";
import Link from 'next/link';
import { useParams } from 'next/navigation'
import { ResetPass } from "./reset_pass_func";
import LoadingOverlay from "@/app/components/loadingOverlay";

export default function Reset_Password() {

    const { token } = useParams();
  const [message, setMessage] = useState("");
  const [reset_message, setResetMessage] = useState("");
  const [tokenStatus, setTokenStatus] = useState<"loading" | "valid" | "invalid">("loading");
  const [isPending, startTransition] = useTransition();

  // Check the token when it becomes available
  useEffect(() => {
    if (!token) return;
    const checkToken = async () => {
      try {
        const res = await fetch(`https://flaskbackendapi.onrender.com/check-reset-password-token/${token}`);
        const data = await res.json();
        if (res.ok && data.message) {
          // Token exists and is valid; show success message or any info
          setTokenStatus("valid");
          setMessage(data.message);
        } else {
          setTokenStatus("invalid");
          setMessage(data.error || "Token is invalid or expired.");
        }
      } catch (error: any) {
        setTokenStatus("invalid");
        setMessage(error.message || "An error occurred while checking the token.");
      }
    };


    checkToken();
  }, [token]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!token) {
      setResetMessage("Token is missing or invalid.");
      return; // Prevent calling ResetPass if token is undefined
    }

    startTransition(async () => {
      const res = await ResetPass(formData, token);
      setResetMessage(res.message || res.error || "Unknown response");
    });
  };

    return (
        <>
        <title>Đặt lại mật khẩu</title>
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
  {
    tokenStatus === "loading" &&
    <div className="error-section">
    <div className="container">
      <div className="row">
        <div className="error-form">
          <h4 className="sub-title" data-aos="fade-up" data-aos-delay={200}>
            <LoadingOverlay />
          </h4>
        </div>
      </div>
    </div>
  </div>
  }
  {
    tokenStatus === "invalid" &&
    <div className="error-section">
    <div className="container">
      <div className="row">
        <div className="error-form">
          <h4 className="sub-title" data-aos="fade-up" data-aos-delay={200}>
          Token đổi mật khẩu hết hạn hoặc không tồn tại
          </h4>
        </div>
      </div>
    </div>
  </div>
  }
  {/* Start Reset Password Page */}
  {
    tokenStatus === "valid" &&
    <div className="login-register-area section-fluid bg-gray">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="login-form-wrap text-center">
            <h2 className="form-title">Đặt lại mật khẩu</h2>
            <p>Nhập email để đặt lại mật khẩu tài khoản.</p>
            <form id="login-form" onSubmit={handleSubmit} method="POST">
              <div className="single-input-item">
                <label htmlFor="email">Mật khẩu mới *</label>
                <input
                  type="password"
                  id="new_password"
                  name="new_password"
                  className="form-control"
                  required
                />
                <label htmlFor="email">Xác nhận mật khẩu mới *</label>
                <input
                  type="password"
                  id="confirm_new_password"
                  name="confirm_new_password"
                  className="form-control"
                  required
                />
              </div>
              <div className="single-input-item">
                <button type="submit" className="btn btn-primary w-100" disabled={isPending}>
                  {isPending ? 'Đang xử lí' : 'Đặt lại mật khẩu'}
                </button>
              </div>
              {reset_message && <p>{reset_message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  }

        </>
    );

}