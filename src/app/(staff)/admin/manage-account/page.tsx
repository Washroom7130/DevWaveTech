"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from 'next/link';
import Script from 'next/script';
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { AddStaff, ModifyStaff, ChangeCustomerStatus } from "./func";
import { useFormHandler } from "../../../utils/useFormHandler";
import { useAuthorization } from "@/app/utils/checkAuth";
import LoadingOverlay from "@/app/components/loadingOverlay";

type Customer = {
  customer_id: number;
  customer_name: string;
  customer_email: string;
  customer_birthday: string;
  customer_phone_num: string;
  customer_status: string;
}

type Staff = {
  staff_id: number;
  staff_name: string;
  staff_email: string;
  staff_birthday: string;
  staff_phone_num: string;
  staff_status: string;
}

export default function Manage_Account() {

    // If not authorized, redirection will have happened; 
    // you can also choose to return null or a fallback UI
    //if (!authorized) return null;

    // Create a handler for the AddStaff form
    const {
        message: addMessage,
        isPending: addIsPending,
        handleSubmit: handleAddSubmit,
    } = useFormHandler(AddStaff);

    // Create a handler for the ModifyStaff form
    const {
        message: modifyMessage,
        isPending: modifyIsPending,
        handleSubmit: handleModifySubmit,
    } = useFormHandler(ModifyStaff);

    const {
        message: customerMessage,
        isPending: customerIsPending,
        handleSubmit: handleCustomerSubmit,
    } = useFormHandler(ChangeCustomerStatus);

    const [customers, setCustomers] = useState<Customer[]>([]);
    const [customer_loading, setCustomerLoading] = useState(true);
    const [customer_error, setCustomerError] = useState("");
    
    useEffect(() => {
      async function fetchCustomers() {
        try {
          const response = await fetch('https://flaskbackendapi.onrender.com/staff/get-customers', {
            // headers: {
            //   "Cookie": `session=${cookie};`
            // }
            credentials: "include"
          });
          if (!response.ok) throw new Error("Failed to fetch customers");
          const data = await response.json();
          setCustomers(data);
        } catch (err) {
          setCustomerError("Failed to fetch customers");
          if (err instanceof Error) {
            setCustomerError("Failed to fetch customers");
          }
        } finally {
          setCustomerLoading(false);
        }
      }
      fetchCustomers();
    }, [])
    
    const [staff, setStaff] = useState<Staff[]>([]);
    const [staff_loading, setStaffLoading] = useState(true);
    const [staff_error, setStaffError] = useState("");

    useEffect(() => {
      async function fetchStaff() {
        try {
          const response = await fetch('https://flaskbackendapi.onrender.com/admin/get-staff', {
            credentials: "include"
          });
          if (!response.ok) throw new Error("Failed to fetch staff");
          const data = await response.json();
          setStaff(data);
        } catch (err) {
          setStaffError("Failed to fetch staff");
          if (err instanceof Error) {
            setStaffError("Failed to fetch staff");
          }
        } finally {
          setStaffLoading(false);
        }
      }
      fetchStaff();
    }, [])

    if (customer_loading || staff_loading) return <LoadingOverlay/>

    return (
        // <>
        //     <h1>Customers List</h1>
        //     <table>
        //       <tr>
        //         {customers.map((customer) => (
        //           <><td>{customer.customer_id}</td>
        //           <td>{customer.customer_name}</td>
        //           <td>{customer.customer_email}</td>
        //           <td>{customer.customer_phone_num}</td>
        //           <td>{customer.customer_birthday}</td>
        //           <td>{customer.customer_status}</td></>
        //         ))}
        //       </tr>
        //     </table>

        //     <h1>Staff List</h1>
        //     <table>
        //       <tr>
        //         {staff.map((s) => (
        //           <><td>{s.staff_id}</td>
        //           <td>{s.staff_name}</td>
        //           <td>{s.staff_id}</td>
        //           <td>{s.staff_phone_num}</td>
        //           <td>{s.staff_birthday}</td>
        //           <td>{s.staff_status}</td>
        //           </>
        //         ))}
        //       </tr>
        //     </table>

        //     <h1>Add Staff</h1>
        //     <form onSubmit={handleAddSubmit}>
        //         <label htmlFor="name">Name</label>
        //         <input type="text" name="name" />
        //         <label htmlFor="name">Email</label>
        //         <input type="text" name="email" />
        //         <label htmlFor="name">Phone</label>
        //         <input type="text" name="phone" />
        //         <label htmlFor="name">Birthday</label>
        //         <input type="date" name="birthday" />
        //         <label htmlFor="name">Password</label>
        //         <input type="password" name="password" />
        //         <label htmlFor="name">Confirm password</label>
        //         <input type="password" name="confirm_password" />
        //         <button type="submit" disabled={addIsPending}>
        //             {addIsPending ? "Processing..." : "Add"}
        //         </button>
        //     </form>
        //     {addMessage && <p>{addMessage}</p>}

        //     <h1>Change Staff Data</h1>
        //     <form onSubmit={handleModifySubmit}>
        //         <label htmlFor="name">Name</label>
        //         <input readOnly type="text" name="id" value="3" />
        //         <label htmlFor="staff_name">Name</label>
        //         <input type="text" name="name" />
        //         <label htmlFor="name">Email</label>
        //         <input type="text" name="email" />
        //         <label htmlFor="name">Phone</label>
        //         <input type="text" name="phone" />
        //         <label htmlFor="name">Birthday</label>
        //         <input type="date" name="birthday" />
        //         <label htmlFor="name">Status</label>
        //         <input readOnly type="text" name="status" value="false" />
        //         <label htmlFor="name">Password</label>
        //         <input type="password" name="password" />
        //         <label htmlFor="name">Confirm password</label>
        //         <input type="password" name="confirm_password" />
        //         <button type="submit" disabled={modifyIsPending}>
        //             {modifyIsPending ? "Processing..." : "Add"}
        //         </button>
        //     </form>
        //     {modifyMessage && <p>{modifyMessage}</p>}

        //     <h1>Change Customer Status</h1>
        //     <form onSubmit={handleCustomerSubmit}>
        //         <label htmlFor="name">ID</label>
        //         <input type="text" name="id" value="1" readOnly />
        //         <label htmlFor="name">Status</label>
        //         <input type="text" name="status" value="true" />
        //         <button type="submit" disabled={customerIsPending}>
        //             {customerIsPending ? "Processing..." : "Add"}
        //         </button>
        //     </form>
        //     {customerMessage && <p>{customerMessage}</p>}

        // </>

        <>
        <title>Quản lí tài khoản</title>
        {/* Begin Page Content */}
  <div className="container-fluid">
    {/* Page Heading */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Quản Lý Tài Khoản</h1>
    </div>
    {/* Thẻ box Quản lý nhân viên */}
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex justify-content-between align-items-center">
        <h6 className="m-0 font-weight-bold text-primary">Quản lý nhân viên</h6>
        {/* <button class="btn btn-sm btn-primary" id="addEmployeeBtn">Thêm Nhân Viên</button> */}
        <Link href="/admin/manage-account/add-staff">
          <button className="btn btn-sm btn-primary">
          Thêm Nhân Viên
          </button>
          
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
        <table
  className="table table-bordered"
  id="employeeTable"
  width="100%"
  cellSpacing={0}
>
  <thead>
    <tr>
      <th>STT</th>
      <th>Tên nhân viên</th>
      <th>Email</th>
      <th>Birhday</th>
      <th>Phone Number</th>
      <th>Trạng thái</th>
      <th>Hành động</th>
    </tr>
  </thead>
  <tbody>
    {staff.map((s, index) => (
      <tr key={s.staff_id}>
        <td>{index + 1}</td>
        <td>{s.staff_name}</td>
        <td>{s.staff_email}</td>
        <td>{s.staff_birthday}</td>
        <td>{s.staff_phone_num}</td>
        <td>
          <span
            className={
              s.staff_status === "Active"
                ? "badge badge-success"
                : "badge badge-danger"
            }
          >
            {s.staff_status}
          </span>
        </td>
        <td>
          <Link href={`/admin/manage-account/edit-staff?staff_id=${s.staff_id}`}>
            <button className="btn btn-sm btn-info edit-employee">
              Sửa thông tin
            </button>
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
    {/* Thẻ box Quản lý tài khoản khách hàng */}
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Quản lý tài khoản khách hàng
        </h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
        <table
  className="table table-bordered"
  id="customerTable"
  width="100%"
  cellSpacing={0}
>
  <thead>
    <tr>
      <th>STT</th>
      <th>Tên khách hàng</th>
      <th>Email</th>
      <th>Birhday</th>
      <th>Phone Number</th>
      <th>Trạng thái</th>
      <th>Hành động</th>
    </tr>
  </thead>
  <tbody>
    {customers.map((customer, index) => (
      <tr key={customer.customer_id}>
        <td>{index + 1}</td>
        <td>{customer.customer_name}</td>
        <td>{customer.customer_email}</td>
        <td>{customer.customer_birthday}</td>
        <td>{customer.customer_phone_num}</td>
        <td>
          <span
            className={
              customer.customer_status === "Active"
                ? "badge badge-success"
                : "badge badge-danger"
            }
          >
            {customer.customer_status}
          </span>
        </td>
        <td>
          <Link href={`/admin/manage-account/edit-customer?customer_id=${customer.customer_id}`}>
            <button
              className="btn btn-sm btn-info edit-customer"
              data-customer-id={customer.customer_id}
            >
              Sửa thông tin
            </button>
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
        </>

    );
}