"use client";
import { useFormHandler } from "@/app/utils/useFormHandler";
import Link from "next/link";
import { ModifyOrder } from "../func";
import { useSearchParams } from "next/navigation";

export default function ModifyOrderUI() {

    const searchParam = useSearchParams();
    const order_id = searchParam.get('order_id')

    console.log(order_id)

    const {
        message: modifyMessage,
        isPending: modifyIsPending,
        handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyOrder);

    return (
<>
<title>Chỉnh sửa đơn hàng</title>
  {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Chỉnh sửa đơn hàng</h1>
    </div>
    {/* Nội dung: Form Chỉnh sửa đơn hàng (nội dung của modal "Chỉnh sửa đơn hàng") */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <form id="editOrderForm" onSubmit={handleModifySubmit}>
          {/* Hiển thị mã đơn hàng (read-only) */}
          <div className="form-group">
            <label htmlFor="editOrderId">Mã đơn hàng</label>
            <input
              type="text"
              className="form-control"
              id="editOrderId"
              value={order_id || ''}
              name="id"
              readOnly
            />
          </div>
          {/* Chọn trạng thái */}
          <div className="form-group">
            <label htmlFor="editOrderStatus">Trạng thái</label>
            <select className="form-control" id="editOrderStatus" name="order_status">
              <option value="Chờ xử lý">Chờ xử lý</option>
              <option value="Xác nhận">Xác nhận</option>
              <option value="Đang giao">Đang giao</option>
              <option value="Đã giao">Đã giao</option>
              <option value="Đã hủy">Đã hủy</option>
            </select>
          </div>
          {/* Nút hành động */}
          <div className="d-flex justify-content-end">
            <Link href="/staff/manage-order">
              <button type="button" className="btn btn-secondary mr-2">
                Quay lại
              </button>
            </Link>
            <button type="submit" className="btn btn-primary" id="btnSaveOrder" disabled={order_id === ''}>
              Lưu
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

    );
}