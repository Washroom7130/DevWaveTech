"use client";

import { useFormHandler } from "@/app/utils/useFormHandler";
import { useRouter } from "next/navigation";
import { ModifyPersonalData } from "./func";

export default function StaffSetting() {

    const router = useRouter();

    const {
        message: modifyMessage,
        isPending: modifyIsPending,
        handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyPersonalData);

    return(
        <>
        <title>Chỉnh sửa thông tin cá nhân</title>
  <div className="container-fluid">
    {/* Page Heading */}
    <h1 className="h3 mb-4 text-gray-800">Chỉnh sửa thông tin cá nhân</h1>
    {/* Card chứa form chỉnh sửa */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <form id="profileForm" onSubmit={handleModifySubmit}>
          <div className="form-group">
            <label htmlFor="lastName">Họ và tên</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="name"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phone_num"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Nhập email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Ngày tháng năm sinh</label>
            <input type="date" className="form-control" id="dob" name="birthday" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="new_password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Nhập lại mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="confirm_new_password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Cập nhật thông tin
          </button>
        </form><br/>
        {modifyMessage && <p>{modifyMessage}</p>}
      </div>
    </div>
  </div>
  {/* End of Page Content */}
</>

    )
}