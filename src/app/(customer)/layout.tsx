import ProtectedContent from "@/app/components/loadAuthCheck"
import '../../../public/updated_asset/shop-hono/assets/css/vendor/vendor.min.css'
import '../../../public/updated_asset/shop-hono/assets/css/plugins/plugins.min.css';
import '../../../public/updated_asset/shop-hono/assets/css/style.min.css';
import '../../../public/updated_asset/shop-hono/assets/css/style.css';
import { Header } from "../components/header"
import { getUserRole } from "../components/headerWrapper";
import Script from "next/script";
import { Footer } from "../components/footer";

export default async function AdminDashBoard({
    children,
  }: {
    children: React.ReactNode
  }) {

    const role = await getUserRole();

    return (
      <html lang="en">
        <body>
          <Header role={role} />
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <ProtectedContent allowedRoles={["user"]}>
            <main>
              {children}
              <Script src="/updated_asset/shop-hono/assets/js/vendor/jquery-migrate-3.3.0.min.js" />
              <Script src="/updated_asset/shop-hono/assets/js/vendor/jquery-3.5.1.min.js" />
              <Script src="/updated_asset/shop-hono/assets/js/vendor/vendor.min.js" />
              <Script src="/updated_asset/shop-hono/assets/js/plugins/plugins.min.js" />
              <Script src="/updated_asset/shop-hono/assets/js/main.js" />
            </main>
          </ProtectedContent>
          <Footer />
        </body>
      </html>
    )
  }