"use server";
import { cookies } from "next/headers";
import  Manage_Account  from "./page";
import { redirect } from "next/navigation";
//import { redirect } from "next/dist/server/api-utils";

type Customer = {
  customer_id: number;
  customer_name: string;
  customer_email: string;
  customer_birthday: string;
  customer_phone_num: string;
  customer_status: boolean;
}

export async function AddStaff(formData: FormData) {
    const staff_name = formData.get("name");
    const staff_birthday = formData.get("birthday");
    const staff_email = formData.get("email");
    const staff_phone_num = formData.get("phone");
    const staff_password = formData.get("password");
    const confirm_staff_password = formData.get("confirm_password");

    const getCookie = async (name: string) => {
      return (await cookies()).get(name)?.value ?? '';
  }
  
  const cookie = await getCookie('session');
    
    const res = await fetch("https://flaskbackendapi.onrender.com/admin/add-new-staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `session=${cookie};`
      },
      body: JSON.stringify({ staff_name, staff_birthday, staff_email, staff_phone_num, staff_password, confirm_staff_password }),
    });
    const response_message = await res.json();
    if (response_message.message) {
      redirect('/admin/manage-account');
    }
    return response_message;
  }

  export async function ModifyStaff(formData: FormData) {
    const id = formData.get("id");
    const staff_name = formData.get("staff_name");
    const staff_birthday = formData.get("staff_birthday");
    const staff_email = formData.get("staff_email");
    const staff_phone_num = formData.get("staff_phone_num");
    const staff_status = (formData.get("status") === 'true');
    const new_password = formData.get("new_password");
    const confirm_new_password = formData.get("confirm_new_password");

    // Build payload object
  const payload = {
    staff_name,
    staff_birthday,
    staff_email,
    staff_phone_num,
    staff_status,
    new_password,
    confirm_new_password,
  };

  // Filter out keys that are null, undefined, or empty string
  const filteredPayload = Object.keys(payload).reduce((acc, key) => {
    const value = payload[key as keyof typeof payload];
    if (value !== null && value !== undefined && value !== "") {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, any>);

    const getCookie = async (name: string) => {
      return (await cookies()).get(name)?.value ?? '';
    }
  
  const cookie = await getCookie('session');

  //console.log(filteredPayload)
    
    const res = await fetch(`https://flaskbackendapi.onrender.com/admin/change-staff-data/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `session=${cookie};`
      },
      body: JSON.stringify( filteredPayload ),
    });
    const response_message = await res.json();
    if (response_message.message) {
      redirect('/admin/manage-account');
    }
    return response_message;
}

export async function ChangeCustomerStatus(formData: FormData) {
  const id = formData.get("id");
  const status = (formData.get("status") === 'true');

  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
}


const cookie = await getCookie('session');
  
  const res = await fetch(`https://flaskbackendapi.onrender.com/admin/change-customer-status/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": `session=${cookie};`
    },
    body: JSON.stringify({ status }),
  });
  const response_message = await res.json();
  if (response_message.message) {
    redirect('/admin/manage-account');
  }
  return response_message;
}