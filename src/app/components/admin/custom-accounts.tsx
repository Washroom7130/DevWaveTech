import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const CustomAccount: React.FC = () => {
  return (
<>{ /* Begin Page Content */ }
        <div className="container-fluid">
            { /* Page Heading */ }
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Qu&#7843;n L&yacute; T&agrave;i Kho&#7843;n</h1>
            </div>
  
            { /* Thẻ box Quản lý nhân viên */ }
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 className="m-0 font-weight-bold text-primary">Qu&#7843;n l&yacute; nh&acirc;n vi&ecirc;n</h6>
                <button className="btn btn-sm btn-primary" id="addEmployeeBtn">Th&ecirc;m Nh&acirc;n Vi&ecirc;n</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="employeeTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>T&ecirc;n nh&acirc;n vi&ecirc;n</th>
                        <th>Email</th>
                        <th>Ch&#7913;c v&#7909;</th>
                        <th>Tr&#7841;ng th&aacute;i</th>
                        <th>H&agrave;nh &dstrok;&#7897;ng</th>
                      </tr>
                    </thead>
                    <tbody>
                      { /* Ví dụ dữ liệu tạm */ }
                      <tr>
                        <td>1</td>
                        <td>Nguy&#7877;n V&abreve;n A</td>
                        <td>vana@example.com</td>
                        <td>Nh&acirc;n vi&ecirc;n</td>
                        <td><span className="badge badge-success">Ho&#7841;t &dstrok;&#7897;ng</span></td>
                        <td>
                          <button className="btn btn-sm btn-info edit-employee">S&#7917;a th&ocirc;ng tin</button>
                        </td>
                      </tr>
                      { /* Các dòng dữ liệu khác */ }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  
            { /* Thẻ box Quản lý tài khoản khách hàng (Cập nhật) */ }
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Qu&#7843;n l&yacute; t&agrave;i kho&#7843;n kh&aacute;ch h&agrave;ng</h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="customerTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>T&ecirc;n kh&aacute;ch h&agrave;ng</th>
                        <th>Email</th>
                        <th>Tr&#7841;ng th&aacute;i</th>
                        <th>H&agrave;nh &dstrok;&#7897;ng</th>
                      </tr>
                    </thead>
                    <tbody>
                      { /* Ví dụ dữ liệu tạm */ }
                      <tr>
                        <td>1</td>
                        <td>Tr&#7847;n Th&#7883; B</td>
                        <td>thib@example.com</td>
                        <td><span className="badge badge-success">Ho&#7841;t &dstrok;&#7897;ng</span></td>
                        <td>
                          <button className="btn btn-sm btn-info edit-customer" data-customer-id="1">S&#7917;a th&ocirc;ng tin</button>
                        </td>
                      </tr>
                      { /* Các dòng dữ liệu khác */ }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  
          </div>
          { /* /.container-fluid */ }
        
        { /* End of Main Content */ }

        { /* Modal Popup: Sửa Thông Tin Tài Khoản Khách Hàng */ }
  <div className="modal fade" id="editCustomerModal" tabIndex={-1} role="dialog" aria-labelledby="editCustomerModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <form id="editCustomerForm">
          <div className="modal-header">
            <h5 className="modal-title" id="editCustomerModalLabel">S&#7917;a Th&ocirc;ng Tin T&agrave;i Kho&#7843;n Kh&aacute;ch H&agrave;ng</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="\u0110\xF3ng">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { /* Họ */ }
            <div className="form-group">
              <label htmlFor="customerLastName">H&#7885;</label>
              <input type="text" className="form-control" id="customerLastName" name="customerLastName" placeholder="Nh\u1EADp h\u1ECD" />
            </div>
            { /* Tên */ }
            <div className="form-group">
              <label htmlFor="customerFirstName">T&ecirc;n</label>
              <input type="text" className="form-control" id="customerFirstName" name="customerFirstName" placeholder="Nh\u1EADp t\xEAn" />
            </div>
            { /* Tài khoản */ }
            <div className="form-group">
              <label htmlFor="customerAccount">T&agrave;i kho&#7843;n</label>
              <input type="text" className="form-control" id="customerAccount" name="customerAccount" placeholder="Nh\u1EADp t\xE0i kho\u1EA3n" />
            </div>
            { /* Mật khẩu */ }
            <div className="form-group">
              <label htmlFor="customerPassword">M&#7853;t kh&#7849;u</label>
              <input type="password" className="form-control" id="customerPassword" name="customerPassword" placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u" />
            </div>
            { /* Trạng thái */ }
            <div className="form-group">
              <label htmlFor="customerStatus">Tr&#7841;ng th&aacute;i</label>
              <select className="form-control" id="customerStatus" name="customerStatus">
                <option value="active">Ho&#7841;t &dstrok;&#7897;ng</option>
                <option value="inactive">D&#7915;ng ho&#7841;t &dstrok;&#7897;ng</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">&Dstrok;&oacute;ng</button>
            <button type="submit" className="btn btn-primary">L&#432;u thay &dstrok;&#7893;i</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  { /* Modal Popup: Sửa/Thêm Thông Tin Nhân Viên */ }
  <div className="modal fade" id="editEmployeeModal" tabIndex={-1} role="dialog" aria-labelledby="editEmployeeModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <form id="editEmployeeForm">
          <div className="modal-header">
            <h5 className="modal-title" id="editEmployeeModalLabel">S&#7917;a Th&ocirc;ng Tin Nh&acirc;n Vi&ecirc;n</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="\u0110\xF3ng">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { /* Họ */ }
            <div className="form-group">
              <label htmlFor="employeeLastName">H&#7885;</label>
              <input type="text" className="form-control" id="employeeLastName" name="employeeLastName" placeholder="Nh\u1EADp h\u1ECD" />
            </div>
            { /* Tên */ }
            <div className="form-group">
              <label htmlFor="employeeFirstName">T&ecirc;n</label>
              <input type="text" className="form-control" id="employeeFirstName" name="employeeFirstName" placeholder="Nh\u1EADp t\xEAn" />
            </div>
            { /* Tài khoản */ }
            <div className="form-group">
              <label htmlFor="employeeAccount">T&agrave;i kho&#7843;n</label>
              <input type="text" className="form-control" id="employeeAccount" name="employeeAccount" placeholder="Nh\u1EADp t\xEAn t\xE0i kho\u1EA3n" />
            </div>
            { /* Mật khẩu */ }
            <div className="form-group">
              <label htmlFor="employeePassword">M&#7853;t kh&#7849;u</label>
              <input type="password" className="form-control" id="employeePassword" name="employeePassword" placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u" />
            </div>
            { /* Chức vụ */ }
            <div className="form-group">
              <label htmlFor="employeeRole">Ch&#7913;c v&#7909;</label>
              <select className="form-control" id="employeeRole" name="employeeRole">
                <option value="manager">Qu&#7843;n l&yacute;</option>
                <option value="staff" selected={true}>Nh&acirc;n vi&ecirc;n</option>
              </select>
            </div>
            { /* Trạng thái */ }
            <div className="form-group">
              <label htmlFor="employeeStatus">Tr&#7841;ng th&aacute;i</label>
              <select className="form-control" id="employeeStatus" name="employeeStatus">
                <option value="active">Ho&#7841;t &dstrok;&#7897;ng</option>
                <option value="inactive">D&#7915;ng ho&#7841;t &dstrok;&#7897;ng</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">&Dstrok;&oacute;ng</button>
            <button type="submit" className="btn btn-primary">L&#432;u thay &dstrok;&#7893;i</button>
          </div>
        </form>
      </div>
    </div>
  </div>

      { /* Footer: include file footer chung nếu có */ }
      { /* <?php include 'footer.php'; ?> */ }
    
    { /* End of Content Wrapper */ }
  
  { /* End of Page Wrapper */ }
  <Script src="admin/js/custom-accounts.js"/>
            <Script src="admin/js/custom-category.js" />
            <Script src="admin/js/custom-product.js"/>
            <Script src="admin/js/plugins/quan-ly-don-hang.js"/>
            <Script src="admin/js/sb-admin-2.js"/>
            <Script src="admin/js/sb-admin-2.min.js"/></>
        );
    };
    
    export default CustomAccount;