"use client";
import { useFormHandler } from "@/app/utils/useFormHandler";
import { AddStaff } from "../func";
import Link from "next/link";


export default function AddStaffUI() {

    const {
        message: addMessage,
        isPending: addIsPending,
        handleSubmit: handleAddSubmit,
    } = useFormHandler(AddStaff);

    return(

        <>
        <title>Thêm nhân viên</title>
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Thêm Nhân Viên</h1>
    </div>
    {/* Nội dung: Form Thêm Nhân Viên (lấy từ nội dung modal "Sửa/Thêm Thông Tin Nhân Viên") */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <form id="addEmployeeForm" onSubmit={handleAddSubmit}>
          {/* Họ và tên */}
          <div className="form-group">
            <label htmlFor="employeeLastName">Họ và tên nhân viên</label>
            <input
              type="text"
              className="form-control"
              id="employeeLastName"
              name="name"
              placeholder="Nhập họ và tên"
            />
          </div>
          {/* Tài khoản */}
          <div className="form-group">
            <label htmlFor="employeeAccount">Email nhân viên</label>
            <input
              type="email"
              className="form-control"
              id="employeeAccount"
              name="email"
              placeholder="Nhập email"
            />
          </div>
            {/* Số điện thoại */}
            <div className="form-group">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phone"
              placeholder="Nhập số điện thoại"
            />
          </div>
          {/* Ngày sinh */}
          <div className="form-group">
            <label htmlFor="birthday">Ngày sinh</label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="birthday"
            />
          </div>
          {/* Mật khẩu */}
          <div className="form-group">
            <label htmlFor="employeePassword">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="employeePassword"
              name="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          {/* Nhập lại mật khẩu */}
          <div className="form-group">
            <label htmlFor="employeeRepeatPassword">Nhập lại mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="employeeRepeatPassword"
              name="confirm_password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          {/* Trạng thái */}
          <div className="modal-footer p-0 mt-3">
            <Link href="/admin/manage-account" className="btn btn-secondary mr-2">

                Quay lại

            </Link>
            <button type="submit" className="btn btn-primary">
              Lưu thay đổi
            </button>
            
          </div>
          {addMessage && <p>{addMessage}</p>}
        </form>
        
      </div>
      
    </div>
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
</>

    );
}