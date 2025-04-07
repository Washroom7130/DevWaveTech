"use client";
import { useFormHandler } from "@/app/utils/useFormHandler";
import { useSearchParams } from "next/navigation";
import { ModifyStaff } from "../func";
import Link from "next/link";


export default function EditStaffUI() {

    const searchParam = useSearchParams();
    const staff_id = searchParam.get('staff_id')

    // Create a handler for the ModifyStaff form
    const {
        message: modifyMessage,
        isPending: modifyIsPending,
        handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyStaff);

    return(
        <>
        <title>Sửa thông tin nhân viên</title>
  {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Sửa Thông Tin Nhân Viên</h1>
    </div>
    {/* Nội dung: Form Sửa Thông Tin Nhân Viên (lấy từ nội dung modal "Sửa/Thêm Thông Tin Nhân Viên") */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <form id="editEmployeeForm" onSubmit={handleModifySubmit}>
            <div className="form-group">
            <label htmlFor="employeeLastName">ID</label>
            <input
              type="text"
              className="form-control"
              id="employeeLastName"
              name="id"
              value={staff_id || ''}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeLastName">Họ và tên nhân viên</label>
            <input
              type="text"
              className="form-control"
              id="employeeLastName"
              name="staff_name"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeAccount">Email nhân viên</label>
            <input
              type="email"
              className="form-control"
              id="employeeAccount"
              name="staff_email"
              placeholder="Nhập email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="staff_phone_num"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Ngày sinh</label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="staff_birthday"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeePassword">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="employeePassword"
              name="new_password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeRepeatPassword">Nhập lại mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="employeeRepeatPassword"
              name="confirm_new_password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeStatus">Trạng thái</label>
            <select
              className="form-control"
              id="employeeStatus"
              name="status"
            >
              <option value="true">Hoạt động</option>
              <option value="false">Dừng hoạt động</option>
            </select>
          </div>
          <div className="modal-footer p-0 mt-3">
            <Link href="/admin/manage-account" className="btn btn-secondary mr-2">
                Quay lại

            </Link>
            <button type="submit" className="btn btn-primary" disabled={staff_id === ''}>
              Lưu thay đổi
            </button>
            
          </div>
          {modifyMessage && <p>{modifyMessage}</p>}
        </form>
      </div>
    </div>
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
</>

    )
}