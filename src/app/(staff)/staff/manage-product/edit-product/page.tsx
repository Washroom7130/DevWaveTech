"use client";
import { useFormHandler } from "@/app/utils/useFormHandler";
import Link from "next/link";
import { ModifyProduct } from "../func";
import { useSearchParams } from "next/navigation";

export default function ModifyProductUI() {

    const searchParam = useSearchParams();
    const product_id = searchParam.get('product_id')

    const {
        message: modifyMessage,
        isPending: modifyIsPending,
        handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyProduct);

    return (
        <>
        <title>Sửa thông tin sản phẩm</title>
  {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Sửa Sản Phẩm</h1>
    </div>
    {/* Nội dung: Form Sửa Sản Phẩm (lấy từ modal "Sửa/Thêm Sản Phẩm") */}
    <div className="card shadow mb-4">
      <div className="card-body">
        <form id="editProductForm" onSubmit={handleModifySubmit}>
          <div className="row">
            {/* Cột bên trái: Upload hình ảnh */}
            <div className="col-md-4">
              <div
                className="upload-container"
              >
                <img id="addProductImagePreview" style={{ display: "inline" }} />
                <div className="placeholder">
                  <p>Upload photos</p>
                </div>
                <input
                  type="file"
                  name="image"
                  style={{ display: "block" }}
                />
              </div>
            </div>
            {/* Cột bên phải: Thông tin sản phẩm */}
            <div className="col-md-8">
                <div className="form-group">
                <label htmlFor="newProductName">Mã sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  id="newProductName"
                  name="id"
                  value={product_id || ''}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="newProductName">Tên sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  id="newProductName"
                  name="product_name"
                  placeholder="Nhập tên sản phẩm"
                />
              </div>
              <div className="form-group">
                <label htmlFor="newCategoryCode">Mã danh mục</label>
                <input
                  type="text"
                  className="form-control"
                  id="newCategoryCode"
                  name="category_id"
                  placeholder="Nhập mã danh mục"
                />
              </div>
              <div className="form-group">
                <label htmlFor="newProductDescription">Mô tả</label>
                <textarea
                  className="form-control"
                  id="newProductDescription"
                  name="description"
                  rows={3}
                  placeholder="Nhập mô tả sản phẩm"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="newProductPrice">Giá</label>
                <input
                  type="number"
                  className="form-control"
                  id="newProductPrice"
                  name="price"
                  placeholder="Nhập giá sản phẩm"
                />
              </div>
              <div className="form-group">
                <label htmlFor="newProductQuantity">Số lượng</label>
                <input
                  type="number"
                  className="form-control"
                  id="newProductQuantity"
                  name="quantity"
                  placeholder="Nhập số lượng sản phẩm"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer p-0 mt-3">
            <Link href="/staff/manage-product">
              <button type="button" className="btn btn-secondary mr-2">
                Quay lại
              </button>
            </Link>
            <button type="submit" className="btn btn-primary" disabled={product_id === ''}>
              Lưu thay đổi
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