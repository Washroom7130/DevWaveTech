"use client";
import { useFormHandler } from "@/app/utils/useFormHandler";
import { useSearchParams } from "next/navigation";
import { ChangeCustomerStatus } from "../func";
import Link from "next/link";


export default function EditStaffUI() {

    const searchParam = useSearchParams();
    const customer_id = searchParam.get('customer_id')

    // Create a handler for the ModifyStaff form
    const {
        message: customerMessage,
        isPending: customerIsPending,
        handleSubmit: handleCustomerSubmit,
    } = useFormHandler(ChangeCustomerStatus);

    return(
        <>
        <title>Sửa thông tin khách hàng</title>
  {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Sửa Thông Tin Nhân Viên</h1>
    </div>
    {/* Nội dung: Form Sửa Thông Tin Nhân Viên (lấy từ nội dung modal "Sửa/Thêm Thông Tin Nhân Viên") */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <form id="editEmployeeForm" onSubmit={handleCustomerSubmit}>
            <div className="form-group">
            <label htmlFor="employeeLastName">ID</label>
            <input
              type="text"
              className="form-control"
              id="employeeLastName"
              name="id"
              value={customer_id || ''}
              readOnly
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
            <button type="submit" className="btn btn-primary" disabled={customer_id === ''}>
              Lưu thay đổi
            </button>
          </div>
          {customerMessage && <p>{customerMessage}</p>}
        </form>
      </div>
    </div>
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
</>

    )
}