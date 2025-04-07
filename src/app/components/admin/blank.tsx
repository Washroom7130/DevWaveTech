import '../../../public/admin/css/custom-account.css'
import '../../../public/admin/css/custom-category.css'
import '../../../public/admin/css/custom-products.css'
import '../../../public/admin/css/squan-ly-don-hang.css'
import '../../../public/admin/css/sb-admin-2.css'
import '../../../public/admin/css/sb-admin-2.min.css'
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const Blank: React.FC = () => {
  return (
<>{ /* Begin Page Content */ }
                <div className="container-fluid">

                    { /* Page Heading */ }
                    <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>

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
    
    export default Blank;