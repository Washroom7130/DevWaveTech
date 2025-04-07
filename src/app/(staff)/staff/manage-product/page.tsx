"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from 'next/link';
import Script from 'next/script';
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { AddProduct, ModifyProduct, DeleteProduct } from "./func";
import { useFormHandler } from "../../../utils/useFormHandler";
import { useAuthorization } from "@/app/utils/checkAuth";
import LoadingOverlay from "@/app/components/loadingOverlay";

type Product = {
  product_id: number;
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  product_stock: number;
  product_category: string;
};

export default function Manage_Product() {

    // Create a handler for the AddProduct form
    const {
        message: addMessage,
        isPending: addIsPending,
        handleSubmit: handleAddSubmit,
    } = useFormHandler(AddProduct);

    // Create a handler for the ModifyProduct form
    const {
        message: modifyMessage,
        isPending: modifyIsPending,
        handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyProduct);

    const {
        message: deleteMessage,
        isPending: deleteIsPending,
        handleSubmit: handleDeleteSubmit,
    } = useFormHandler(DeleteProduct);

    const [product, setproduct] = useState<Product[]>([]);
    const [Product_loading, setProductLoading] = useState(true);
    const [Product_error, setProductError] = useState("");

    useEffect(() => {
      async function fetchProduct() {
        try {
          const response = await fetch('https://flaskbackendapi.onrender.com/data/get-products', {
            // headers: {
            //   "Cookie": `session=${cookie};`
            // }
            credentials: "include"
          });
          if (!response.ok) throw new Error("Failed to fetch products");
          const data = await response.json();
          setproduct(data);
        } catch (err) {
          setProductError("Failed to fetch products");
          if (err instanceof Error) {
            setProductError("Failed to fetch products");
          }
        } finally {
          setProductLoading(false);
        }
      }
      fetchProduct();
    }, [])

    if (Product_loading) return <LoadingOverlay/>
    return (
      // <div className="container">
      //     <h1>Quản lý Sản phẩm</h1>

      //     {/* Thêm sản phẩm */}
      //     <div className="card">
      //         <h2>Thêm Sản phẩm</h2>
      //         <form onSubmit={handleAddSubmit}>
      //             <input type="text" name="product_name" placeholder="Tên sản phẩm" required />
      //             <input type="file" name="image" required />
      //             <input type="number" name="price" placeholder="Giá sản phẩm" required />
      //             <input type="text" name="description" placeholder="Mô tả sản phẩm" required />
      //             <input type="number" name="quantity" placeholder="Số lượng" required />
      //             <input type="text" name="category_id" placeholder="Danh mục" required />
      //             <button type="submit" disabled={addIsPending}>Thêm</button>
      //             <p>{addMessage}</p>
      //         </form>
      //     </div>

      //     {/* Sửa sản phẩm */}
      //     <div className="card">
      //         <h2>Sửa Sản phẩm</h2>
      //         <form onSubmit={handleModifySubmit}>
      //             <input type="number" name="id" placeholder="ID sản phẩm" required />
      //             <input type="text" name="product_name" placeholder="Tên sản phẩm mới" required />
      //             <input type="file" name="image" />
      //             <input type="number" name="price" placeholder="Giá mới" required />
      //             <input type="text" name="description" placeholder="Mô tả mới" required />
      //             <input type="number" name="quantity" placeholder="Số lượng mới" required />
      //             <input type="text" name="category_id" placeholder="Danh mục mới" required />
      //             <button type="submit" disabled={modifyIsPending}>Cập nhật</button>
      //             <p>{modifyMessage}</p>
      //         </form>
      //     </div>

      //     {/* Xóa sản phẩm */}
      //     <div className="card">
      //         <h2>Xóa Sản phẩm</h2>
      //         <form onSubmit={handleDeleteSubmit}>
      //             <input type="number" name="id" placeholder="ID sản phẩm" required />
      //             <button type="submit" disabled={deleteIsPending}>Xóa</button>
      //             <p>{deleteMessage}</p>
      //         </form>
      //     </div>

      //     {/* Hiển thị danh sách sản phẩm */}
      //     <div>
      //         <h2>Danh sách sản phẩm</h2>
      //         {Product_loading ? (
      //             <p>Đang tải...</p>
      //         ) : Product_error ? (
      //             <p>{Product_error}</p>
      //         ) : (
      //             <ul>
      //                 {product.map((item) => (
      //                     <li key={item.product_id}>
      //                         <img src={item.product_image} alt={item.product_name} width="50" />
      //                         {item.product_name} - {item.product_price}đ
      //                     </li>
      //                 ))}
      //             </ul>
      //         )}
      //     </div>
      // </div>
      

      <>
      <title>Quản lí sản phẩm</title>
        {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Quản Lý Sản Phẩm</h1>
      {/* <button class="btn btn-sm btn-primary" id="addProductBtn">Thêm Sản Phẩm</button> */}
      <Link href="/staff/manage-product/add-product">
        <button className="btn btn-sm btn-primary" id="addProductBtn">
          Thêm Sản Phẩm
        </button>
      </Link>
    </div>
    {/* Bảng sản phẩm sử dụng DataTables */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
        <table
  className="table table-bordered"
  id="productTable"
  width="100%"
  cellSpacing={0}
>
  <thead>
    <tr>
      <th>STT</th>
      <th>Mã sản phẩm</th>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Hành động</th>
    </tr>
  </thead>
  <tbody>
    {product.map((p, index) => (
      <tr key={p.product_id}>
        <td>{index + 1}</td>
        <td>{p.product_id}</td>
        <td>{p.product_name}</td>
        <td>{p.product_price.toLocaleString()} VND</td>
        <td>{p.product_stock}</td>
        <td>
          <Link href={`/staff/manage-product/edit-product?product_id=${p.product_id}`}>
            <button className="btn btn-sm btn-info edit-product">
              Sửa thông tin
            </button>
          </Link>
          <Link href={`/staff/manage-product/delete-product?product_id=${p.product_id}&name=${p.product_name}`}>
            <button className="btn btn-sm btn-danger delete-product">
              Dừng bán
            </button>
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
    {/* End Bảng sản phẩm */}
  </div>
  {/* End Main Content */}
      </>
  );
    
}
