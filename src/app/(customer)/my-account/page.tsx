"use client";
import React, { useEffect, useState } from "react";
import { useFormHandler } from "@/app/utils/useFormHandler";
import { ModifyPersonalData, Logout, DeleteOrder } from "./func";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoadingOverlay from "@/app/components/loadingOverlay";

type OrderItem = {
    SoLuong: number;
    TenSP: string;
  };
  
  type Order = {
    MaDonHang: number;
    NgayTao: string;
    TongTien: number;
    TrangThai: string;
    items: OrderItem[];
  };

export default function MyAccount() {

    const router = useRouter();

    const {
        message: modifyMessage,
        isPending: modifyIsPending,
        handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyPersonalData);

    const {
        message: modifyPassMessage,
        isPending: modifyPassIsPending,
        handleSubmit: handleModifyPassSubmit,
    } = useFormHandler(ModifyPersonalData);

    const {
      message: cancelMessage,
      isPending: cancelIsPending,
      handleSubmit: handleCancelSubmit,
  } = useFormHandler(DeleteOrder);

    const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
  });
  

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("https://flaskbackendapi.onrender.com/customer/get-order-detail", {
          credentials: "include", // Include cookies if required
        });
  
        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }
  
        const data = await res.json();
  
        if (data.message === "No orders found for this customer.") {
          setOrders([]);
        } else {
          const ordersArray = Array.isArray(data) ? data : [data];
          setOrders(ordersArray);
        }
      } catch (err: any) {
        setError(err.message || "Error fetching orders");
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  useEffect(() => {
    async function fetchPersonalData() {
      try {
        const res = await fetch("https://flaskbackendapi.onrender.com/data/get-personal-data", {
          credentials: "include",
        });
  
        if (!res.ok) throw new Error("Failed to fetch personal data");
  
        const data = await res.json();
        setPersonalData(data);
      } catch (err) {
        console.error("Error fetching personal data:", err);
      }
    }
  
    fetchPersonalData();
  }, []);  

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await Logout();
    if (response.message) {
      router.push("/home");
    }
  };

  if (loading) return <LoadingOverlay />;
  if (error) return <div>Error: {error}</div>;

    return (
      //   <>
        
      //   <h1>Change Personal Data</h1>
      //       <form onSubmit={handleModifySubmit}>
      //           <label htmlFor="staff_name">Name</label>
      //           <input type="text" name="name" />
      //           <label htmlFor="name">Email</label>
      //           <input type="text" name="email" />
      //           <label htmlFor="name">Phone</label>
      //           <input type="text" name="phone" />
      //           <label htmlFor="name">Birthday</label>
      //           <input type="date" name="birthday" />
      //           <button type="submit" disabled={modifyIsPending}>
      //               {modifyIsPending ? "Processing..." : "Add"}
      //           </button>
      //       </form>
      //       {modifyMessage && <p>{modifyMessage}</p>}

      //   <h1>Change Password</h1>
      //       <form onSubmit={handleModifyPassSubmit}>
      //           <label htmlFor="staff_name">New Password</label>
      //           <input type="password" name="new_password" />
      //           <label htmlFor="name">Confirm New Password</label>
      //           <input type="password" name="confirm_new_password" />
      //           <button type="submit" disabled={modifyPassIsPending}>
      //               {modifyPassIsPending ? "Processing..." : "Add"}
      //           </button>
      //       </form>
      //       {modifyPassMessage && <p>{modifyPassMessage}</p>}

      //       <h1>Customer Orders</h1>
      // <table border={1} cellPadding={5}>
      //   <thead>
      //     <tr>
      //       <th>Order ID</th>
      //       <th>Date Created</th>
      //       <th>Total Amount</th>
      //       <th>Status</th>
      //       <th>Items</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {orders.map((order) => (
      //       <tr key={order.MaDonHang}>
      //         <td>{order.MaDonHang}</td>
      //         <td>{order.NgayTao}</td>
      //         <td>{order.TongTien}</td>
      //         <td>{order.TrangThai}</td>
      //         <td>
      //           <ul>
      //             {order.items.map((item, idx) => (
      //               <li key={idx}>
      //                 {item.TenSP} (Qty: {item.SoLuong})
      //               </li>
      //             ))}
      //           </ul>
      //         </td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>

      // <button onClick={handleLogout}>Logout</button>
      //   </>

      <>
      <title>Trang của tôi</title>
  {/* ...:::: Start Breadcrumb Section:::... */}
  <div className="breadcrumb-section breadcrumb-bg-color--golden">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Trang của tôi</h3>
            <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
              <nav aria-label="breadcrumb">
                <ul>
                  <li>
                    <Link href="/home">Trang chủ</Link>
                  </li>
                  <li>
                    <Link href="/products">Cửa hàng</Link>
                  </li>
                  <li className="active" aria-current="page">
                  Trang của tôi
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
  {/* ...:::: Start Account Dashboard Section:::... */}
  <div className="account-dashboard">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          {/* Nav tabs */}
          <div
            className="dashboard_tab_button"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <ul role="tablist" className="nav flex-column dashboard-list">
              <li>
                <Link
                  href="#account-details"
                  data-bs-toggle="tab"
                  className="nav-link btn btn-block btn-md btn-black-default-hover"
                >
                  Thông tin cá nhân
                </Link>
              </li>
              {/* <li><a href="#address" data-bs-toggle="tab" class="nav-link btn btn-block btn-md btn-black-default-hover">Địa chỉ</a></li> */}
              <li>
                <Link
                  href="#changePassword"
                  data-bs-toggle="tab"
                  className="nav-link btn btn-block btn-md btn-black-default-hover"
                >
                  Đổi mật khẩu
                </Link>
              </li>
              <li>
                <Link
                  href="#orders"
                  data-bs-toggle="tab"
                  className="nav-link btn btn-block btn-md btn-black-default-hover"
                >
                  Đơn hàng của bạn
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}
                  className="nav-link btn btn-block btn-md btn-black-default-hover"
                >
                  Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-9">
  {/* Tab panes */}
  <div
    className="tab-content dashboard_content"
    data-aos="fade-up"
    data-aos-delay={200}
  >
    <div className="tab-pane fade show active" id="dashboard">
      <h4>Tổng quan </h4>
      <p>
        Từ trang tổng quan bạn có thể dễ dàng xem{" "}
        <Link href="#orders" data-bs-toggle="tab">
          đơn hàng của bạn
        </Link>
        , và{" "}
        <Link href="#account-details" data-bs-toggle="tab">
          chỉnh sửa thông tin cá nhân.
        </Link>
      </p>
    </div>
    <div className="tab-pane fade" id="orders">
      <h4>Đơn hàng</h4>
      <div className="table_page table-responsive">
      <table>
  <thead>
    <tr>
      <th>Đơn hàng</th>
      <th>Tên sản phẩm</th>
      <th>Số lượng</th>
      <th>Tổng tiền</th>
      <th>Trạng thái</th>
      <th>Phương thức thanh toán</th>
      <th>Hành động</th>
    </tr>
  </thead>
  <tbody>
  {orders.length === 0 ? (
    <tr>
      <td colSpan={7} style={{ textAlign: "center", padding: "20px" }}>
        Bạn chưa có đơn hàng nào.
      </td>
    </tr>
  ) : (
    orders.map((order) => {
      const rowSpan = order.items.length;
      return order.items.map((item: any, index: number) => (
        <tr key={`${order.MaDonHang}-${index}`}>
          {index === 0 && (
            <>
              <td rowSpan={rowSpan}>#{order.MaDonHang}</td>
              <td>{item.TenSP}</td>
              <td>{item.SoLuong}</td>
              <td rowSpan={rowSpan}>{order.TongTien.toLocaleString()} VND</td>
              <td rowSpan={rowSpan}>{order.TrangThai}</td>
              <td rowSpan={rowSpan}>Thanh toán khi nhận hàng</td>
              <td rowSpan={rowSpan}>
                <form onSubmit={handleCancelSubmit}>
                  <input name="id" value={order.MaDonHang} readOnly hidden />
                  <input name="status" value="Đã hủy" readOnly hidden />
                  <button
                    className="btn btn-block btn-lg btn-black-default-hover"
                    disabled={order.TrangThai === "Đã hủy" || order.TrangThai === 'Đã giao'}
                  >
                    Hủy đơn
                  </button>
                </form>
              </td>
            </>
          )}
          {index > 0 && (
            <>
              <td>{item.TenSP}</td>
              <td>{item.SoLuong}</td>
            </>
          )}
        </tr>
      ));
    })
  )}
</tbody>

</table>

      </div>
    </div>
    {/* Tab-pane đổi mật khẩu */}
  <div className="tab-pane fade" id="changePassword">
    <h4>Đổi mật khẩu</h4>
    <form id="changePasswordForm" onSubmit={handleModifyPassSubmit}>
      <div className="default-form-box mb-20">
        <label>Mật khẩu mới</label>
        <input
          type="password"
          name="new_password"
          id="newPassword"
          placeholder="Nhập mật khẩu mới"
          required
        />
      </div>
      <div className="default-form-box mb-20">
        <label>Nhập lại mật khẩu mới</label>
        <input
          type="password"
          name="confirm_new_password"
          id="confirmNewPassword"
          placeholder="Nhập lại mật khẩu mới"
          required
        />
      </div>
      <div className="save_button mt-3">
        <button className="btn btn-md btn-black-default-hover" type="submit" disabled={modifyPassIsPending}>
          {modifyPassIsPending ? 'Đang xử lí' : 'Đổi mật khẩu'}
        </button>
      </div><br/>
      {modifyPassMessage && <p>{modifyPassMessage}</p>}
    </form>
  </div>
  <div className="tab-pane fade" id="account-details">
  <div>
    <h3>THÔNG TIN CÁ NHÂN</h3>
  </div>
  <div className="login">
    <div className="login_form_container">
      <div className="account_login_form">
      <form onSubmit={handleModifySubmit}>
  <div className="default-form-box mb-20">
    <label>Họ và tên</label>
    <input type="text" name="name" placeholder={personalData.name} />
  </div>
  <div className="default-form-box mb-20">
    <label>Email</label>
    <input type="text" name="email" placeholder={personalData.email} />
  </div>
  <div className="default-form-box mb-20">
    <label>Số điện thoại</label>
    <input type="text" name="phone" placeholder={personalData.phone} />
  </div>
  <div className="default-form-box mb-20">
    <label>Ngày sinh</label>
    <input type="date" name="birthday" defaultValue={personalData.birthday} />
  </div>
  <div className="save_button mt-3">
    <button
      className="btn btn-md btn-black-default-hover"
      type="submit"
      disabled={modifyIsPending}
    >
      {modifyIsPending ? "Đang xử lí" : "Lưu"}
    </button>
  </div>
  <br />
  {modifyMessage && <p>{modifyMessage}</p>}
</form>

      </div>
    </div>
  </div>
</div>

  </div>
</div>

      </div>
    </div>
  </div>
</>

    );
}