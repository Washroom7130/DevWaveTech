import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const CustomProducts: React.FC = () => {
  return (
<>{ /* Begin Page Content */ }
        <div className="container-fluid">
          { /* Page Heading */ }
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Qu&#7843;n L&yacute; S&#7843;n Ph&#7849;m</h1>
            <button className="btn btn-sm btn-primary" id="addProductBtn">Th&ecirc;m S&#7843;n Ph&#7849;m</button>
        </div>
        
        { /* Ô tìm kiếm sản phẩm */ }
    <div className="input-group" style={{ width: 300 }}>
        <input type="text" className="form-control bg-light border-0 small" placeholder="Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn s\u1EA3n ph\u1EA9m..." id="searchProductInput" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" id="searchProductBtn">
            <i className="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    
          { /* Product Table Card */ }
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="productTable" width="100%" cellSpacing={0}>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>M&atilde; s&#7843;n ph&#7849;m</th>
                      <th>T&ecirc;n s&#7843;n ph&#7849;m</th>
                      <th>Gi&aacute;</th>
                      <th>S&#7889; l&#432;&#7907;ng</th>
                      <th>Tr&#7841;ng Th&aacute;i</th>
                      <th>H&agrave;nh &dstrok;&#7897;ng</th>
                    </tr>
                  </thead>
                  <tbody>
                    { /* Ví dụ dữ liệu tạm */ }
                    <tr>
                      <td>1</td>
                      <td>SP001</td>
                      <td>S&#7843;n ph&#7849;m A</td>
                      <td>100,000 VND</td>
                      <td>50</td>
                      <td><span className="badge badge-success">&Dstrok;ang b&aacute;n</span></td>
                      <td>
                        <button className="btn btn-sm btn-info edit-product" data-product-id="1" data-product-code="SP001" data-product-name="S\u1EA3n ph\u1EA9m A" data-category-code="DM001" data-product-description="M\xF4 t\u1EA3 s\u1EA3n ph\u1EA9m A" data-product-price="100000" data-product-quantity="50" data-product-image="http://via.placeholder.com/200x200" data-product-status="dangban">S&#7917;a th&ocirc;ng tin</button>
                      </td>
                    </tr>
                    { /* Các dòng dữ liệu khác sẽ được load từ backend */ }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          { /* End Product Table Card */ }
        </div>
      
      { /* End Main Content */ }

{ /* Modal Popup: Sửa/Thêm Sản Phẩm */ }
<div className="modal fade" id="editProductModal" tabIndex={-1} role="dialog" aria-labelledby="editProductModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document"> 
      <div className="modal-content">
        <form id="editProductForm">
          <div className="modal-header">
            <h5 className="modal-title" id="editProductModalLabel">S&#7917;a Th&ocirc;ng Tin S&#7843;n Ph&#7849;m</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="\u0110\xF3ng">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              { /* Cột bên trái: Upload hình ảnh */ }
        <div className="col-md-4">
            <div className="upload-container" onClick={event => { document.getElementById('newProductImage').click(); }}>
                <img id="newProductImagePreview" style={{ display: "none" }} />
                <div className="placeholder">
                  <p>Upload photos</p>
                </div>
                <input type="file" id="newProductImage" accept="image/*" style={{ display: "none" }} />
              </div>
          </div>
              { /* Cột bên phải: Thông tin sản phẩm */ }
              <div className="col-md-8">
                { /* Mã sản phẩm */ }
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">M&atilde; s&#7843;n ph&#7849;m</label>
                  <div className="col-md-4">
                    <p className="form-control-plaintext" id="originalProductCode">SP001</p>
                  </div>
                  <div className="col-md-5">
                    <input type="text" className="form-control" id="productCodeNew" name="productCodeNew" placeholder="Nh\u1EADp m\xE3 s\u1EA3n ph\u1EA9m m\u1EDBi" />
                  </div>
                </div>
                { /* Tên sản phẩm */ }
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">T&ecirc;n s&#7843;n ph&#7849;m</label>
                  <div className="col-md-4">
                    <p className="form-control-plaintext" id="originalProductName">S&#7843;n ph&#7849;m A</p>
                  </div>
                  <div className="col-md-5">
                    <input type="text" className="form-control" id="productNameNew" name="productNameNew" placeholder="Nh\u1EADp t\xEAn m\u1EDBi" />
                  </div>
                </div>
                { /* Mã danh mục */ }
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">M&atilde; danh m&#7909;c</label>
                  <div className="col-md-4">
                    <p className="form-control-plaintext" id="originalCategoryCode">DM01</p>
                  </div>
                  <div className="col-md-5">
                    <input type="text" className="form-control" id="categoryCodeNew" name="categoryCodeNew" placeholder="Nh\u1EADp m\xE3 danh m\u1EE5c m\u1EDBi" />
                  </div>
                </div>
                { /* Mô tả sản phẩm */ }
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">M&ocirc; t&#7843;</label>
                  <div className="col-md-4">
                    <p className="form-control-plaintext" id="originalProductDescription">M&ocirc; t&#7843; s&#7843;n ph&#7849;m A</p>
                  </div>
                  <div className="col-md-5">
                    <textarea className="form-control" id="productDescriptionNew" name="productDescriptionNew" rows={3} placeholder="Nh\u1EADp m\xF4 t\u1EA3 m\u1EDBi" />
                  </div>
                </div>
                { /* Giá sản phẩm */ }
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">Gi&aacute;</label>
                  <div className="col-md-4">
                    <p className="form-control-plaintext" id="originalProductPrice">100000</p>
                  </div>
                  <div className="col-md-5">
                    <input type="number" className="form-control" id="productPriceNew" name="productPriceNew" placeholder="Nh\u1EADp gi\xE1 m\u1EDBi" />
                  </div>
                </div>
                { /* Số lượng sản phẩm */ }
                <div className="form-group row">
                  <label className="col-md-3 col-form-label">S&#7889; l&#432;&#7907;ng</label>
                  <div className="col-md-4">
                    <p className="form-control-plaintext" id="originalProductQuantity">50</p>
                  </div>
                  <div className="col-md-5">
                    <input type="number" className="form-control" id="productQuantityNew" name="productQuantityNew" placeholder="Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng m\u1EDBi" />
                  </div>
                </div>
                { /* Trạng thái sản phẩm (Mới thêm) */ }
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Tr&#7841;ng th&aacute;i</label>
                    <div className="col-md-4">
                      { /* Hiển thị trạng thái gốc */ }
                      <p className="form-control-plaintext" id="originalProductStatus">&Dstrok;ang b&aacute;n</p>
                    </div>
                    <div className="col-md-5">
                      { /* Người dùng có thể chọn lại trạng thái */ }
                      <select className="form-control" id="productStatusNew" name="productStatusNew">
                        <option value={true}>-- Ch&#7885;n tr&#7841;ng th&aacute;i m&#7899;i --</option>
                        <option value="dangban">&Dstrok;ang b&aacute;n</option>
                        <option value="dungban">D&#7915;ng b&aacute;n</option>
                      </select>
                    </div>
                  </div>
              </div>
            </div> { /* end row */ }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" id="deleteProductBtn">X&oacute;a s&#7843;n ph&#7849;m</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">&Dstrok;&oacute;ng</button>
            <button type="submit" className="btn btn-primary">L&#432;u thay &dstrok;&#7893;i</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  { /* Modal: Thêm sản phẩm */ }
<div className="modal fade" id="addProductModal" tabIndex={-1} role="dialog" aria-labelledby="addProductModalLabel" aria-hidden="true">
<div className="modal-dialog modal-lg" role="document"> 
<div className="modal-content">
 <form id="addProductForm">
   <div className="modal-header">
     <h5 className="modal-title" id="addProductModalLabel">Th&ecirc;m S&#7843;n Ph&#7849;m M&#7899;i</h5>
     <button type="button" className="close" data-dismiss="modal" aria-label="\u0110\xF3ng">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
   <div className="modal-body">
     <div className="row">
        { /* Cột bên trái: Upload hình ảnh */ }
        <div className="col-md-4">
          <div className="upload-container" onClick={event => { document.getElementById('addProductImage').click(); }}>
            <img id="addProductImagePreview" style={{ display: "none" }} />
            <div className="placeholder"><p>Upload photos</p></div>
            <input type="file" id="addProductImage" accept="image/*" style={{ display: "none" }} />
          </div>
        </div>
       { /* Cột phải: Thông tin sản phẩm mới */ }
       <div className="col-md-8">
         <div className="form-group">
           <label htmlFor="newProductCode">M&atilde; s&#7843;n ph&#7849;m</label>
           <input type="text" className="form-control" id="newProductCode" name="newProductCode" placeholder="Nh\u1EADp m\xE3 s\u1EA3n ph\u1EA9m" />
         </div>
         <div className="form-group">
           <label htmlFor="newProductName">T&ecirc;n s&#7843;n ph&#7849;m</label>
           <input type="text" className="form-control" id="newProductName" name="newProductName" placeholder="Nh\u1EADp t\xEAn s\u1EA3n ph\u1EA9m" />
         </div>
         <div className="form-group">
           <label htmlFor="newCategoryCode">M&atilde; danh m&#7909;c</label>
           <input type="text" className="form-control" id="newCategoryCode" name="newCategoryCode" placeholder="Nh\u1EADp m\xE3 danh m\u1EE5c" />
         </div>
         <div className="form-group">
           <label htmlFor="newProductDescription">M&ocirc; t&#7843;</label>
           <textarea className="form-control" id="newProductDescription" name="newProductDescription" rows={3} placeholder="Nh\u1EADp m\xF4 t\u1EA3 s\u1EA3n ph\u1EA9m" />
         </div>
         <div className="form-group">
           <label htmlFor="newProductPrice">Gi&aacute;</label>
           <input type="number" className="form-control" id="newProductPrice" name="newProductPrice" placeholder="Nh\u1EADp gi\xE1 s\u1EA3n ph\u1EA9m" />
         </div>
         <div className="form-group">
           <label htmlFor="newProductQuantity">S&#7889; l&#432;&#7907;ng</label>
           <input type="number" className="form-control" id="newProductQuantity" name="newProductQuantity" placeholder="Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m" />
         </div>
       </div>
     </div> { /* end row */ }
   </div>
   <div className="modal-footer">
     <button type="button" className="btn btn-secondary" data-dismiss="modal">&Dstrok;&oacute;ng</button>
     <button type="submit" className="btn btn-primary">L&#432;u</button>
   </div>
 </form>
</div>
</div>
</div>
<Script src="admin/js/custom-accounts.js"/>
            <Script src="admin/js/custom-category.js" />
            <Script src="admin/js/custom-product.js"/>
            <Script src="admin/js/plugins/quan-ly-don-hang.js"/>
            <Script src="admin/js/sb-admin-2.js"/>
            <Script src="admin/js/sb-admin-2.min.js"/></>
        );
    };
    
    export default CustomProducts;