"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from 'next/link';
import Script from 'next/script';
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { AddCategory, ModifyCategory, DeleteCategory } from "./func";
import { useFormHandler } from "../../../utils/useFormHandler";
import { useAuthorization } from "@/app/utils/checkAuth";
import LoadingOverlay from "@/app/components/loadingOverlay";

type Category = {
  category_id: number;
  category_name: string;
};

export default function Manage_Category() {

const {
  message: addMessage,
  isPending: addIsPending,
  handleSubmit: handleAddSubmit,
} = useFormHandler(AddCategory);

const {
  message: modifyMessage,
  isPending: modifyIsPending,
  handleSubmit: handleModifySubmit,
} = useFormHandler(ModifyCategory);

const {
  message: deleteMessage,
  isPending: deleteIsPending,
  handleSubmit: handleDeleteSubmit,
} = useFormHandler(DeleteCategory);

const [category, setcategory] = useState<Category[]>([]);
const [category_loading, setcategoryLoading] = useState(true);
const [category_error, setcategoryError] = useState("");

useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('https://flaskbackendapi.onrender.com/data/get-categories', {
          // headers: {
          //   "Cookie": `session=${cookie};`
          // }
          credentials: "include"
        });
        if (!response.ok) throw new Error("Failed to fetch customers");
        const data = await response.json();
        setcategory(data);
      } catch (err) {
        setcategoryError("Failed to fetch categories");
        if (err instanceof Error) {
          setcategoryError("Failed to fetch categories");
        }
      } finally {
        setcategoryLoading(false);
      }
    }
    fetchCategories();
  }, [])

  if (category_loading) return <LoadingOverlay/>

  return (
    //   <>
    // <h1>Category List</h1>
    // <table>
    //   <tr>
    //     {category.map((s) => (
    //       <><td>{s.category_id}</td>
    //       <td>{s.category_name}</td>
    //       </>
    //     ))}
    //   </tr>
    // </table>

    // <h1>Add Category</h1>
    // <form onSubmit={handleAddSubmit}>
    // <label htmlFor="name">Name</label>
    // <input type="text" name="name" />
    // <button type="submit" disabled={addIsPending}>
    //         {addIsPending ? "Processing..." : "Add"}
    //     </button>
    // </form>
    // {addMessage && <p>{addMessage}</p>}

    // <h1>Modify Category</h1>
    // <form onSubmit={handleModifySubmit}>
    // <label htmlFor="category_id">Category ID</label>
    // <input type="number" name="category_id" />
    // <label htmlFor="name">Name</label>
    // <input type="text" name="name" />
    // <button type="submit" disabled={addIsPending}>
    //         {modifyIsPending? "Processing..." : "Modify"}
    //     </button>
    // </form>
    // {modifyMessage && <p>{modifyMessage}</p>}

    // <h1>Delete Category</h1>
    // <form onSubmit={handleDeleteSubmit}>
    // <label htmlFor="category_id">Category ID</label>
    // <input type="number" name="category_id" />
    // <button type="submit" disabled={deleteIsPending}>
    //         {deleteIsPending? "Processing..." : "Delete"}
    //     </button>
    // </form>
    // {deleteMessage && <p>{deleteMessage}</p>}

    // </>
    <>
    <title>Quản lí danh mục</title>
    {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Quản Lý Danh Mục Sản Phẩm</h1>
      <Link href="/staff/manage-category/add-category">
            <button className="btn btn-sm btn-primary">
              Thêm Danh Mục
            </button>
          </Link>
    </div>
    {/* Content Row */}
    <div className="row">
      <div className="col-lg-12">
        {/* Card chứa bảng danh mục */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Danh Sách Danh Mục Sản Phẩm
            </h6>
          </div>
          
          <div className="card-body">
            {/* Nút Thêm Danh Mục */}
            {/* <button id="addCategoryBtn" class="btn btn-sm btn-primary">Thêm Danh Mục</button> */}
            <br/>
            {/* Bảng danh mục sản phẩm */}
            <div className="table-responsive">
            <table
  className="table table-bordered"
  id="categoryTable"
  width="100%"
  cellSpacing={0}
>
  <thead>
    <tr>
      <th>Mã Danh Mục</th>
      <th>Tên Danh Mục</th>
      <th>Hành Động</th>
    </tr>
  </thead>
  <tbody>
    {category.map((c) => (
      <tr key={c.category_id}>
        <td>{c.category_id}</td>
        <td>{c.category_name}</td>
        <td>
          <Link href={`/staff/manage-category/edit-category?category_id=${c.category_id}`}>
            <button className="btn btn-primary btn-sm edit-btn">Sửa</button>
          </Link>
          <Link href={`/staff/manage-category/delete-category?category_id=${c.category_id}&name=${c.category_name}`}>
            <button className="btn btn-danger btn-sm delete-btn">Xoá</button>
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Content Row */}
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
    </>
  );
    
}
