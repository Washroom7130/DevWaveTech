"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from 'next/link';
import Script from 'next/script';
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { ModifyOrder } from "./func";
import { useFormHandler } from "../../../utils/useFormHandler";
import { useAuthorization } from "@/app/utils/checkAuth";
import LoadingOverlay from "@/app/components/loadingOverlay";

type Order = {
  order_id: number;
  creation_date: number;
  total: number;
  order_status: string;
  delivery_address: string;
  customer_phone_number: string;
  order_payment_type: string;
}
type OrderDetails = {
  order_id: number;
  product_id: number;
  total: number;
  cost_per_piece: number;
}

export default function Manage_order() {

    // If not authorized, redirection will have happened; 
    // you can also choose to return null or a fallback UI
    //if (!authorized) return null;

    // Create a handler for the ModifyOrder form
    const {
        message: modifyMessage,
        isPending: modifyIsPending,
        handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyOrder);

      const [order, setOrder] = useState<Order[]>([]);
      const [order_loading, setOrderLoading] = useState(true);
      const [order_error, setOrderError] = useState("");

         useEffect(() => {
          async function fetchOrder() {
            try {
              const response = await fetch('https://flaskbackendapi.onrender.com/staff/get-orders', {
                // headers: {
                //   "Cookie": `session=${cookie};`
                // }
                credentials: "include"
              });
              if (!response.ok) throw new Error("Failed to fetch order");
              const data = await response.json();
              setOrder(data);
            } catch (err) {
              setOrderError("Failed to fetch order");
              if (err instanceof Error) {
                setOrderError("Failed to fetch order");
              }
            } finally {
              setOrderLoading(false);
            }
          }
          fetchOrder();
         },[])

      const [orderDetail, setOrderdetails] = useState<OrderDetails[]>([]);
      const [orderDetail_loading, setOrderdetailsLoading] = useState(true);
      const [orderDetail_error, setOrderdetailsError] = useState("");   

          useEffect(() => {
            async function fetchOrderDetails() {
              try {
                const response = await fetch('https://flaskbackendapi.onrender.com/staff/get-order-detail', {
                  // headers: {
                  //   "Cookie": `session=${cookie};`
                  // }
                  credentials: "include"
                });
                if (!response.ok) throw new Error("Failed to fetch order details");
                const data = await response.json();
                setOrderdetails(data);
              } catch (err) {
                setOrderdetailsError("Failed to fetch order details");
                if (err instanceof Error) {
                  setOrderdetailsError("Failed to fetch order details");
                }
              } finally {
                setOrderdetailsLoading(false);
              }
            }
            fetchOrderDetails();
          },[])

    if (order_loading || orderDetail_loading) return <LoadingOverlay/>

    return (
    // <>
    // <h1>Order List</h1>
    //   <table>
    //     <tr>
    //       {order.map((s) => (
    //         <>
    //         <td>{s.order_id}</td>
    //         <td>{s.creation_date}</td>
    //         <td>{s.total}</td>
    //         <td>{s.order_status}</td>
    //         <td>{s.delivery_status}</td>
    //         <td>{s.customer_phone_number}</td>
    //         </>
    //       ))}
    //     </tr>
    //   </table>

    //   <h1>Order Detail List</h1>
    //   <table>
    //     <tr>
    //       {orderDetail.map((s) => (
    //         <>
    //         <td>{s.order_id}</td>
    //         <td>{s.product_id}</td>
    //         <td>{s.total}</td>
    //         <td>{s.cost_per_piece}</td>

    //         </>
    //       ))}
    //     </tr>
    //   </table>

    //   <h1>Change Order Data</h1>
    //   <form onSubmit={handleModifySubmit}>
    //       <label htmlFor="name">order_id</label>
    //       <input type="text" name="id"/>
    //       <label htmlFor="name">order_status</label>
    //       <input type="text" name="order_status" />
          
    //       <button type="submit" disabled={modifyIsPending}>
    //           {modifyIsPending ? "Processing..." : "Add"}
    //       </button>
    //   </form>
    //   {modifyMessage && <p>{modifyMessage}</p>}
    // </>
    <>
    <title>Quản lí đơn hàng</title>
    
  {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Phần Quản Lý Đơn Hàng */}
    <section id="orderManagement" className="mb-5">
      <h2 className="h4 mb-3">Quản Lý Đơn Hàng</h2>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Danh Sách Đơn Hàng
          </h6>
        </div>
        {/* Ô tìm kiếm tùy chọn cho bảng Đơn Hàng */}
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="orderManagementTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Mã Đơn Hàng</th>
                  <th>Ngày Tạo</th>
                  <th>Tổng Tiền</th>
                  <th>Trạng Thái</th>
                  <th>Địa Chỉ</th>
                  <th>Số Điện Thoại</th>
                  <th>Phương Thức Thanh Toán</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {/* Ví dụ một dòng đơn hàng */}
                {order.map((o) => (
                <tr>
                <td>{o.order_id}</td>
                <td>{o.creation_date}</td>
                <td>{o.total.toLocaleString()} VND</td>
                <td>{o.order_status}</td>
                <td>{o.delivery_address}</td>
                <td>{o.customer_phone_number}</td>
                <td>{o.order_payment_type}</td>
                {/* Nút chỉnh sửa */}
                <td>
                  {/* <button class="btn btn-primary btnEditOrder" data-order-id="DH001" data-order-status="Đã giao">
                      Chỉnh sửa
                    </button> */}
                  <Link href={`/staff/manage-order/edit-order?order_id=${o.order_id}`}>
                    <button
                      className="btn btn-primary btnEditOrder"
                    >
                      Chỉnh sửa
                    </button>
                  </Link>
                </td>
              </tr>
                ))}

                {/* Thêm các dòng khác tương tự */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    {/* Phần Chi Tiết Đơn Hàng */}
    <section id="orderDetails" className="mb-5">
      <h2 className="h4 mb-3">Chi Tiết Đơn Hàng</h2>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Chi Tiết Sản Phẩm Trong Đơn Hàng
          </h6>
        </div>
        {/* Ô tìm kiếm tùy chọn cho bảng Chi Tiết Đơn Hàng */}
        
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="orderDetailsTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Mã Đơn Hàng</th>
                  <th>Mã Sản Phẩm</th>
                  <th>Số Lượng Sản Phẩm</th>
                  <th>Đơn Giá</th>
                </tr>
              </thead>
              <tbody>
                {orderDetail.map((o) => (
                <tr>
                  <td>{o.order_id}</td>
                  <td>{o.product_id}</td>
                  <td>{o.total}</td>
                  <td>{o.cost_per_piece.toLocaleString()} VND</td>
                </tr>
                ))}
                
                {/* Thêm dòng dữ liệu khác nếu cần */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
</>

    );
  }
