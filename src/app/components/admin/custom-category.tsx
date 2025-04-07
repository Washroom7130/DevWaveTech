import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const CustomCategory: React.FC = () => {
  return (
<>{ /* Begin Page Content */ }
        <div className="container-fluid">
          { /* Page Heading */ }
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Qu&#7843;n L&yacute; Danh M&#7909;c S&#7843;n Ph&#7849;m</h1>
          </div>

          { /* Content Row */ }
          <div className="row">
            <div className="col-lg-12">
              { /* Card chứa bảng danh mục */ }
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Danh S&aacute;ch Danh M&#7909;c S&#7843;n Ph&#7849;m</h6>
                </div>
                <div className="card-body">
                  { /* Nút Thêm Danh Mục */ }
                  <button id="addCategoryBtn" className="btn btn-sm btn-primary">Th&ecirc;m Danh M&#7909;c</button>
                  { /* Bảng danh mục sản phẩm */ }
                  <div className="table-responsive">
                    <table className="table table-bordered" id="categoryTable" width="100%" cellSpacing={0}>
                      <thead>
                        <tr>
                          <th>M&atilde; Danh M&#7909;c</th>
                          <th>T&ecirc;n Danh M&#7909;c</th>
                          <th>H&agrave;nh &Dstrok;&#7897;ng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>DM001</td>
                          <td>Th&#7901;i Trang</td>
                          <td>
                            <button className="btn btn-primary btn-sm edit-btn">S&#7917;a</button>
                            <button className="btn btn-danger btn-sm delete-btn">Xo&aacute;</button>
                          </td>
                        </tr>
                        <tr>
                          <td>DM002</td>
                          <td>&Dstrok;i&#7879;n T&#7917;</td>
                          <td>
                            <button className="btn btn-primary btn-sm edit-btn">S&#7917;a</button>
                            <button className="btn btn-danger btn-sm delete-btn">Xo&aacute;</button>
                          </td>
                        </tr>
                        { /* Thêm các dòng dữ liệu khác nếu cần, theo mẫu DM003, DM004, ... */ }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { /* End Content Row */ }
        </div>
        { /* /.container-fluid */ }
      
      { /* End of Main Content */ }

      { /* Modal Popup cho Thêm/Sửa Danh Mục */ }
  <div className="modal fade" id="categoryModal" tabIndex={-1} role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 id="categoryModalLabel" className="modal-title">Th&ecirc;m Danh M&#7909;c</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="\u0110\xF3ng">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form id="categoryForm">
            <div className="form-group">
              <label htmlFor="categoryCode">M&atilde; Danh M&#7909;c</label>
              <input type="text" className="form-control" id="categoryCode" placeholder="Nh\u1EADp m\xE3 danh m\u1EE5c" required />
            </div>
            <div className="form-group">
              <label htmlFor="categoryName">T&ecirc;n Danh M&#7909;c</label>
              <input type="text" className="form-control" id="categoryName" placeholder="Nh\u1EADp t\xEAn danh m\u1EE5c" required />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" id="saveCategoryBtn" className="btn btn-primary">L&#432;u</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">&Dstrok;&oacute;ng</button>
        </div>
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
    
    export default CustomCategory;