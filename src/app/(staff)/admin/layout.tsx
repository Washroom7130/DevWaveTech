import ProtectedContent from "@/app/components/loadAuthCheck"
import '../../../../public/admin_asset/css/custom-accounts.css'
import '../../../../public/admin_asset/vendor/fontawesome-free/css/all.min.css'
import '../../../../public/admin_asset/css/sb-admin-2.min.css'
import '../../../../public/admin_asset/vendor/datatables/dataTables.bootstrap4.min.css'
import Script from "next/script"
import { AdminHeader } from "@/app/components/staffHeader"
import { AdminTopBar } from "@/app/components/adminTopBar"
import { getUserRole } from "@/app/components/headerWrapper"

export default async function AdminDashBoard({
    children,
  }: {
    children: React.ReactNode
  }) {
    const role = await getUserRole();
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          
          <ProtectedContent allowedRoles={["admin"]}>
            <main>
              <div id="wrapper">
              <AdminHeader role={role}/>
                <div id="content-wrapper" className="d-flex flex-column">
                  <div id="content">
                    <AdminTopBar />
                    {children}
                  </div>
                </div>
              </div>  
              <Script src="/admin_asset/vendor/jquery/jquery.min.js"></Script>
              <Script src="/admin_asset/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
              <Script src="/admin_asset/vendor/datatables/jquery.dataTables.min.js"></Script>
              <Script src="/admin_asset/vendor/datatables/dataTables.bootstrap4.min.js"></Script>
              <Script src="/admin_asset/js/sb-admin-2.min.js"></Script>
              <Script src="/admin_asset/js/custom-accounts.js"></Script>
            </main>
          </ProtectedContent>
        </body>
      </html>
    )
  }