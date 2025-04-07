import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const QuanLyDonHang: React.FC = () => {
  return (
<>{ /* Begin Page Content */ }
        <div className="container-fluid">
          
          { /* Phần Quản Lý Đơn Hàng */ }
          <section id="orderManagement" className="mb-5">
            <h2 className="h4 mb-3">Qu&#7843;n L&yacute; &Dstrok;&#417;n H&agrave;ng</h2>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Danh S&aacute;ch &Dstrok;&#417;n H&agrave;ng</h6>
              </div>
              { /* Ô tìm kiếm tùy chọn cho bảng Đơn Hàng */ }
              <div className="input-group mb-3 search-bar">
                <label htmlFor="orderSearchColumn" className="search-label"><i className="fas fa-search" />    T&igrave;m ki&#7871;m &dstrok;&#417;n h&agrave;ng theo:</label>
                
                <select id="orderSearchColumn" className="custom-select column-select">
                  <option value="0">M&atilde; &Dstrok;&#417;n H&agrave;ng</option>
                  <option value="1">Ng&agrave;y T&#7841;o</option>
                  <option value="5">S&#7889; &Dstrok;i&#7879;n Tho&#7841;i</option>
                  <option value="3">Tr&#7841;ng Th&aacute;i</option>
                </select>
                <input type="text" className="form-control" id="orderSearchInput" placeholder="Nh\u1EADp t\u1EEB kh\xF3a..." />
                    { /* Dropdown trạng thái (ẩn ban đầu) */ }
                    <select id="orderStatusSelect" className="form-control" style={{ display: "none" }}>
                    <option value={true}>-- T&#7845;t c&#7843; --</option>
                    <option value="Ch\u1EDD x\u1EED l\xFD">Ch&#7901; x&#7917; l&yacute;</option>
                    <option value="X\xE1c nh\u1EADn">X&aacute;c nh&#7853;n</option>
                    <option value="Ch\u1EDD l\u1EA5y h\xE0ng">Ch&#7901; l&#7845;y h&agrave;ng</option>
                    <option value="\u0110ang giao h\xE0ng">&Dstrok;ang giao h&agrave;ng</option>
                    <option value="\u0110\xE3 giao">&Dstrok;&atilde; giao</option>
                    <option value="\u0110\xE3 hu\u1EF7">&Dstrok;&atilde; hu&#7927;</option>
                    </select>
  
                
              
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button" id="orderSearchBtn">T&igrave;m</button>
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="orderManagementTable" width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                          <th>M&atilde; &Dstrok;&#417;n H&agrave;ng</th>
                          <th>Ng&agrave;y T&#7841;o</th>
                          <th>T&#7893;ng Ti&#7873;n</th>
                          <th>Tr&#7841;ng Th&aacute;i</th>
                          <th>&Dstrok;&#7883;a Ch&#7881;</th>
                          <th>S&#7889; &Dstrok;i&#7879;n Tho&#7841;i</th>
                          <th>Ph&#432;&#417;ng Th&#7913;c Thanh To&aacute;n</th>
                          { /* Thêm cột thao tác */ }
                          <th>Thao t&aacute;c</th>
                        </tr>
                      </thead>
                      <tbody>
                        { /* Ví dụ một dòng đơn hàng */ }
                        <tr>
                          <td>DH001</td>
                          <td>2023-03-15</td>
                          <td>1,500,000 VND</td>
                          <td>&Dstrok;&atilde; giao</td>
                          <td>123 &Dstrok;&#432;&#7901;ng ABC, Qu&#7853;n 1</td>
                          <td>0901234567</td>
                          <td>COD</td>
                          { /* Nút chỉnh sửa */ }
                          <td>
                            <button className="btn btn-primary btnEditOrder" data-order-id="DH001" data-order-status="\u0110\xE3 giao">
                              Ch&#7881;nh s&#7917;a
                            </button>
                          </td>
                        </tr>
                        { /* Thêm các dòng khác tương tự */ }
                      </tbody>
                      
                  </table>
                </div>
              </div>
            </div>
          </section>

          { /* Phần Chi Tiết Đơn Hàng */ }
          <section id="orderDetails" className="mb-5">
            <h2 className="h4 mb-3">Chi Ti&#7871;t &Dstrok;&#417;n H&agrave;ng</h2>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Chi Ti&#7871;t S&#7843;n Ph&#7849;m Trong &Dstrok;&#417;n H&agrave;ng</h6>
              </div>
              { /* Ô tìm kiếm tùy chọn cho bảng Chi Tiết Đơn Hàng */ }
              <div className="input-group mb-3 search-bar">
                <label htmlFor="detailsSearchColumn" className="search-label"><i className="fas fa-search" />    T&igrave;m ki&#7871;m &dstrok;&#417;n h&agrave;ng theo:</label>
                
                <select id="detailsSearchColumn" className="custom-select column-select">
                  <option value="0">M&atilde; &Dstrok;&#417;n H&agrave;ng</option>
                  <option value="1">M&atilde; S&#7843;n Ph&#7849;m</option>
                </select>
              
                <input type="text" className="form-control" id="detailsSearchInput" placeholder="Nh\u1EADp t\u1EEB kh\xF3a..." />
              
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button" id="detailsSearchBtn">T&igrave;m</button>
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="orderDetailsTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>M&atilde; &Dstrok;&#417;n H&agrave;ng</th>
                        <th>M&atilde; S&#7843;n Ph&#7849;m</th>
                        <th>S&#7889; L&#432;&#7907;ng S&#7843;n Ph&#7849;m</th>
                        <th>&Dstrok;&#417;n Gi&aacute;</th>
                      </tr>
                    </thead>
                    <tbody>
                      { /* Ví dụ dòng dữ liệu */ }
                      <tr>
                        <td>DH001</td>
                        <td>SP001</td>
                        <td>2</td>
                        <td>750,000 VND</td>
                      </tr>
                      { /* Thêm dòng dữ liệu khác nếu cần */ }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        { /* /.container-fluid */ }
      
      { /* End of Main Content */ }
      <Script src="admin/js/custom-accounts.js"/>
            <Script src="admin/js/custom-category.js" />
            <Script src="admin/js/custom-product.js"/>
            <Script src="admin/js/plugins/quan-ly-don-hang.js"/>
            <Script src="admin/js/sb-admin-2.js"/>
            <Script src="admin/js/sb-admin-2.min.js"/>
      </>
        );
    };
    
    export default QuanLyDonHang;