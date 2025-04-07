"use client";
import React, { useEffect, useState } from "react";
import { PlaceOrder } from "./func";
import { useFormHandler } from "@/app/utils/useFormHandler";
import Link from "next/link";
import LoadingOverlay from "@/app/components/loadingOverlay";

type CartItem = {
    SoLuong: number;
    TenSP: string;
    TotalCost: number;
  };
  
  type CartData = {
    MaGioHang: number;
    items: CartItem[];
  };

export default function Checkout() {

    const {
          message: placeMessage,
          isPending: placeIsPending,
          handleSubmit: handlePlaceSubmit,
      } = useFormHandler(PlaceOrder);

    const [cart, setCart] = useState<CartData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchCheckoutCart() {
      try {
        const res = await fetch("https://flaskbackendapi.onrender.com/customer/get-cart", {
          credentials: "include", // include session cookie if needed
        });
        if (!res.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data: CartData = await res.json();
        setCart(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchCheckoutCart();
  }, []);

  //When the message indicates success, wait 3 seconds then reload the page
  useEffect(() => {
    if (placeMessage === "Đặt hàng thành công!") {
      const timeoutId = setTimeout(() => {
        window.location.replace('/my-account#orders');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [placeMessage]);

  if (loading) return <LoadingOverlay />;
  if (error) return <div>Error: {error}</div>;
  if (!cart) return <div>No cart data available.</div>;

  

  return (
    // <>
    //     <div>
    //       <h1>Shopping Cart (ID: {cart.MaGioHang})</h1>
    //       {cart.items.length > 0 ? (
    //           <ul>
    //               {cart.items.map((item, index) => (
    //                   <li key={index}>
    //                       <strong>{item.TenSP}</strong> – Quantity: {item.SoLuong} - Cost: {item.TotalCost}
    //                   </li>
    //               ))}
    //           </ul>
    //       ) : (
    //           <p>Your cart is empty.</p>
    //       )}
    //   </div>
    //   <h1>Place order</h1>
    //         <form onSubmit={handlePlaceSubmit}>
    //             <label htmlFor="name">Phone number</label>
    //             <input type="tel" name="phone" />
    //             <label htmlFor="name">Address</label>
    //             <input type="text" name="address" />
    //             <button type="submit" disabled={placeIsPending}>
    //                 {placeIsPending ? "Processing..." : "Add"}
    //             </button>
    //         </form>
    //         {placeMessage && <p>{placeMessage}</p>}
    // </>

    <>
    <title>Thanh toán</title>
  <div className="breadcrumb-section breadcrumb-bg-color--golden">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">THANH TOÁN</h3>
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
                    Thanh toán
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

  {/* ...:::: Start Checkout Section:::... */}
  <div className="checkout-section">
    <div className="container">
      <div className="row">{/* User Quick Action Form */}</div>
      {/* Start User Details Checkout Form */}
      <div className="checkout_form" data-aos="fade-up" data-aos-delay={400}>
        <form onSubmit={handlePlaceSubmit}>
          <h3 style={{ textAlign: "center" }}>THANH TOÁN</h3>
          <div className="order_table table-responsive">
            <table style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Giá tiền</th>
                </tr>
              </thead>
              <tbody id="order-items">
  {cart.items.length > 0 ? (
    cart.items.map((item, index) => (
      <tr key={index}>
        <td>
          <strong>{item.TenSP}</strong> x {item.SoLuong}
        </td>
        <td>
          <strong>{item.TotalCost.toLocaleString()} VND</strong>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={2}>Giỏ của bạn rỗng</td>
    </tr>
  )}
</tbody>
{cart.items.length > 0 && (
  <tfoot id="order-summary">
    {(() => {
      const totalCost = cart.items.reduce(
        (sum, item) => sum + item.TotalCost,
        0
      );
      const shippingFee = 0; // Fixed shipping fee
      return (
        <>
          <tr>
            <th>Tổng tiển hàng</th>
            <td>
              <strong>{totalCost.toLocaleString()} VND</strong>
            </td>
          </tr>
          <tr>
            <th>Phí vận chuyển</th>
            <td>
              <strong>{shippingFee.toLocaleString()} VND</strong>
            </td>
          </tr>
          <tr className="order_total">
            <th>Tổng tiền</th>
            <td>
              <strong>{(totalCost + shippingFee).toLocaleString()} VND</strong>
            </td>
          </tr>
        </>
      );
    })()}
  </tfoot>
)}

            </table>
          </div>
          <div className="payment_method">
            <div className="panel-default">
              <div>
                <div className="card-body1">
                  <b>
                    <p>
                      Vui lòng điền chính xác thông tin về phương thức thanh
                      toán, số điện thoại, địa chỉ nhận hàng:
                    </p>
                  </b>
                  <div className="default-form-box">
                    <input
                      type="text"
                      id="paymentType"
                      className="form-control"
                      defaultValue="Thanh toán khi nhận hàng"
                      readOnly
                      required
                    />
                  </div>
                  <div className="default-form-box">
                    <input
                      type="text"
                      id="shippingAddressInput"
                      name="address"
                      className="form-control"
                      placeholder="Nhập địa chỉ nhận hàng (Số nhà, Tên đường, Xã/Phường, Quận/Huyện, Tỉnh/Thành phố, Quốc gia)"
                      required
                    />
                  </div>
                  <div className="default-form-box">
                    <input
                      type="text"
                      id="phoneNumberInput"
                      name="phone"
                      className="form-control"
                      placeholder="Nhập số điện thoại của bạn"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order_button pt-3">
              <button
                className="btn btn-md btn-black-default-hover"
                type="submit"
                id="btnConfirmPayment"
                disabled={cart.items.length === 0 || placeIsPending}
              >
                {placeIsPending ? 'Đang xử lí' : 'Xác nhận thanh toán'}
              </button>
            </div>
          </div>
        </form><br/>
        {placeMessage && <p>{placeMessage}</p>}
      </div>
      {/* Start User Details Checkout Form */}
    </div>
  </div>
  {/* ...:::: End Checkout Section:::... */}
</>

  );
}