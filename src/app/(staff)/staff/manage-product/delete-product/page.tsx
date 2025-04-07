"use client";
import { useFormHandler } from "@/app/utils/useFormHandler";
import Link from "next/link";
import { DeleteProduct } from "../func";
import { useSearchParams } from "next/navigation";

export default function DeleteCommentUI() {
    
    const searchParam = useSearchParams();
    const product_id = searchParam.get('product_id')
    const product_name = searchParam.get('name')

    const {
        message: deleteMessage,
        isPending: deleteIsPending,
        handleSubmit: handleDeleteSubmit,
    } = useFormHandler(DeleteProduct);

    return(
        <>
        <title>Xóa đánh giá</title>
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dừng bán sản phẩm</h1>
          </div>
          {/* Nội dung: Form Thêm Danh Mục (lấy từ nội dung modal "Thêm Danh Mục") */}
          <div className="card shadow mb-4">
            <div className="card-body">
              <form id="categoryForm" onSubmit={handleDeleteSubmit}>
                  <div className="form-group">
                  <label htmlFor="categoryName">Bạn muốn dừng bán sản phẩm <b>{product_name || 'không xác định'}</b> ?</label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    name="id"
                    value={product_id || ''}
                    readOnly
                    hidden
                  />
                </div>
                <div className="d-flex justify-content-end">
                  {/* <button type="reset" class="btn btn-secondary mr-2">Đóng</button> */}
                  <Link href="/staff/manage-comment">
                    <button type="button" className="btn btn-secondary mr-2">
                      Quay lại
                    </button>
                  </Link>
                  <button
                    type="submit"
                    id="saveCategoryBtn"
                    className="btn btn-danger"
                    disabled={product_id === ''}
                  >
                    Dừng bán
                  </button>
                </div>
                {deleteMessage && <p>{deleteMessage}</p>}
              </form>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
        {/* End of Main Content */}
      </>
    );
}