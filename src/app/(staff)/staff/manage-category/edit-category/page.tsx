"use client";
import { useFormHandler } from "@/app/utils/useFormHandler";
import Link from "next/link";
import { ModifyCategory } from "../func";
import { useSearchParams } from "next/navigation";

export default function ModifyCategoryUI() {

    const searchParam = useSearchParams();
    const category_id = searchParam.get('category_id')

    const {
      message: modifyMessage,
      isPending: modifyIsPending,
      handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyCategory);

    return (
        <>
        <title>Chỉnh sửa danh mục</title>
  {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Sửa Danh Mục</h1>
    </div>
    {/* Nội dung: Form Thêm Danh Mục (lấy từ nội dung modal "Thêm Danh Mục") */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <form id="categoryForm" onSubmit={handleModifySubmit}>
            <div className="form-group">
            <label htmlFor="categoryName">ID</label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              placeholder="Nhập tên danh mục"
              name="category_id"
              value={category_id || ''}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoryName">Tên Danh Mục Mới</label>
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
              disabled={category_id === ''}
            >
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