import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const CustomProfile: React.FC = () => {
  return (
<>{ /* Begin Page Content */ }
    <div className="container-fluid">
      { /* Page Heading */ }
      <h1 className="h3 mb-4 text-gray-800">Ch&#7881;nh s&#7917;a th&ocirc;ng tin c&aacute; nh&acirc;n</h1>
      { /* Card chứa form chỉnh sửa */ }
      <div className="card shadow mb-4">
        <div className="card-body">
          <form id="profileForm">
            <div className="form-group">
              <label htmlFor="lastName">H&#7885;</label>
              <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Nh\u1EADp h\u1ECD" />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">T&ecirc;n</label>
              <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Nh\u1EADp t\xEAn" />
            </div>
            <div className="form-group">
              <label htmlFor="username">T&ecirc;n &dstrok;&abreve;ng nh&#7853;p</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="Nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Nh\u1EADp email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">M&#7853;t kh&#7849;u</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gi&#7899;i t&iacute;nh</label>
              <select className="form-control" id="gender" name="gender">
                <option value={true}>Ch&#7885;n gi&#7899;i t&iacute;nh</option>
                <option value="male">Nam</option>
                <option value="female">N&#7919;</option>
                <option value="other">Kh&aacute;c</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dob">Ng&agrave;y th&aacute;ng n&abreve;m sinh</label>
              <input type="date" className="form-control" id="dob" name="dob" />
            </div>
            <button type="submit" className="btn btn-primary">C&#7853;p nh&#7853;t th&ocirc;ng tin</button>
          </form>
        </div>
      </div>
    </div>
    { /* End of Page Content */ }
        
        { /* End of Main Content */ }
        <Script src="admin/js/custom-accounts.js"/>
            <Script src="admin/js/custom-category.js" />
            <Script src="admin/js/custom-product.js"/>
            <Script src="admin/js/plugins/quan-ly-don-hang.js"/>
            <Script src="admin/js/sb-admin-2.js"/>
            <Script src="admin/js/sb-admin-2.min.js"/></>
        );
    };
    
    export default CustomProfile;