"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DeleteCartItem } from "./func";
import LoadingOverlay from "@/app/components/loadingOverlay";

type CartItemType = {
  MaAnh: string;
  MaSP: number;
  SoLuong: number;
  TenSP: string;
  TotalCost: number;
};

type CartData = {
  MaGioHang: number;
  items: CartItemType[];
};

export default function MyCart() {
  const [cart, setCart] = useState<CartData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch the cart data from the backend on mount.
  async function fetchCart() {
    setLoading(true);
    try {
      const res = await fetch("https://flaskbackendapi.onrender.com/customer/get-cart", {
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data: CartData = await res.json();
      setCart(data);
      // Optionally update other states or cookies if needed.
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // Fetch cart on mount.
  useEffect(() => {
    fetchCart();
  }, []);

  // Handler to delete a cart item.
  const handleDelete = async (itemId: number, currentQuantity: number) => {
    try {
      const formData = new FormData();
    formData.append("id", itemId.toString());
    // Here, you might want to delete the item entirely, so quantity can be set to 0.
    formData.append("quantity", "0");
    const response = await DeleteCartItem(formData);
      if (response.message) {
        // If deletion was successful, re-fetch the cart to update the table.
        await fetchCart();
      }
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  if (loading) return <LoadingOverlay />;
  if (error) return <div>Error: {error}</div>;
  if (!cart) return <div>Giỏ hàng của bạn chưa có mặt hàng nào.</div>;

  return (
    <>
    <title>Giỏ hàng</title>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section breadcrumb-bg-color--golden">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="breadcrumb-title">Giỏ hàng của tôi</h3>
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
                        Giỏ hàng
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart Section */}
      <div className="cart-section">
        <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay={0}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product_remove">Xoá</th>
                          <th className="product_thumb">Ảnh</th>
                          <th className="product_name">Tên sản phẩm</th>
                          <th className="product-price">Giá</th>
                          <th className="product_quantity">Số lượng</th>
                          <th className="product_total">Tổng tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.items.map((item, index) => (
                          <tr key={index}>
                            <td className="product_remove">
                              <button onClick={() => handleDelete(item.MaSP, item.SoLuong)}>
                                <i className="fa fa-trash-o" />
                              </button>
                            </td>
                            <td className="product_thumb">

                                <img style={{'display': 'block', 'margin': 'auto'}}
                                  src={`https://flaskbackendapi.onrender.com/data/images/${item.MaAnh}`}
                                  alt={item.TenSP}
                                />

                            </td>
                            <td className="product_name">
                              <Link href={`/product/${item.MaSP}`}>
                                {item.TenSP}
                              </Link>
                            </td>
                            <td className="product-price">{(item.TotalCost / item.SoLuong).toLocaleString()} VND</td>
                            <td className="product_quantity">
                                {item.SoLuong}
                            </td>
                            <td className="product_total">
                              {item.TotalCost.toLocaleString()} VND
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart_submit">
                    <Link
                      className="btn btn-md btn-black-default-hover"
                      href='/check-out'
                    >
                      Thanh toán
                    </Link>
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
