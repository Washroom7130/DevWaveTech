"use client";
import { useFormHandler } from "@/app/utils/useFormHandler";
import Link from "next/link";
import { AddCategory } from "../func";

export default function AddCategoryUI() {

    const {
      message: addMessage,
      isPending: addIsPending,
      handleSubmit: handleAddSubmit,
    } = useFormHandler(AddCategory);

    return (
        <>
        <title>Thêm danh mục</title>
  {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Thêm Danh Mục</h1>
    </div>
    {/* Nội dung: Form Thêm Danh Mục (lấy từ nội dung modal "Thêm Danh Mục") */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <form id="categoryForm" onSubmit={handleAddSubmit}>
          <div className="form-group">
            <label htmlFor="categoryName">Tên Danh Mục</label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              placeholder="Nhập tên danh mục"
              name="name"
              required
            />
          </div>
          <div className="d-flex justify-content-end">
            {/* <button type="reset" class="btn btn-secondary mr-2">Đóng</button> */}
            <Link href="/staff/manage-category">
              <button type="button" className="btn btn-secondary mr-2">
                Quay lại
              </button>
            </Link>
            <button
              type="submit"
              id="saveCategoryBtn"
              className="btn btn-primary"
            >
              Lưu
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

    )
}