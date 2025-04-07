"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logout } from "../(customer)/my-account/func";
import { useRouter } from "next/navigation";

type Staff = {
    name: string;
    email: string;
    phone: string;
    birthday: string;
  };
  
  export function AdminTopBar() {

    const router = useRouter();

    const [staffData, setStaffData] = useState<Staff | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      async function fetchStaff() {
        try {
          const response = await fetch("https://flaskbackendapi.onrender.com/data/get-personal-data", {
            credentials: "include",
          });
          if (!response.ok) throw new Error("Failed to fetch data");
          const data: Staff = await response.json();
          setStaffData(data);
        } catch (err: any) {
          setError("Failed to fetch data");
        } finally {
          setLoading(false);
        }
      }
      fetchStaff();
    }, []);

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const response = await Logout();
      if (response.message) {
        router.push("/home");
      }
    };

    return(
        <>
  {/* Topbar */}
  <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    {/* Topbar Navbar */}
    <ul className="navbar-nav ml-auto">
      {/* Nav Item - User Information */}
      <li className="nav-item dropdown no-arrow">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
            {staffData?.name}
          </span>
          <img
            className="img-profile rounded-circle"
            src={`https://ui-avatars.com/api/?name=${staffData?.name}`}
          />
        </a>
        {/* Dropdown - User Information */}
        <div
          className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <Link className="dropdown-item" href="/staff/setting">
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
            Thông tin
          </Link>
          <div className="dropdown-divider" />
          <Link
            className="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
            onClick={handleLogout}
          >
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
            Đăng xuất
          
            
          </Link>
        </div>
      </li>
    </ul>
  </nav>
  {/* End of Topbar */}
</>

    );
}