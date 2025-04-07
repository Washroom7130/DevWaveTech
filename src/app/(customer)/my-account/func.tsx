"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

export async function ModifyPersonalData(formData: FormData) {
    const name = formData.get("name");
    const birthday = formData.get("birthday");
    const email = formData.get("email");
    const phone = formData.get("phone_num");
    //const staff_status = (formData.get("status") === 'true');
    const password = formData.get("new_password");
    const confirm_password = formData.get("confirm_new_password");

    // Build payload object
  const payload = {
    name,
    birthday,
    email,
    phone,
    password,
    confirm_password,
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
    
    const res = await fetch(`https://flaskbackendapi.onrender.com/setting/change-personal-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `session=${cookie};`
      },
      body: JSON.stringify( filteredPayload ),
    });
    const response_message = await res.json();
    return response_message;
}

export async function Logout() {
  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
  }

const cookie = await getCookie('session');

const cookieList = await cookies();
  
  const res = await fetch(`https://flaskbackendapi.onrender.com/logout`, {
    method: "POST",
    headers: {
      "Cookie": `session=${cookie};`
    },
  });
  const response_message = await res.json();
  if (response_message.message) {
    cookieList.delete('session');
  }

  return response_message;
}

export async function DeleteOrder(formdata: FormData) {
  const id = formdata.get('id')
  const status = formdata.get('status')

  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
  }

const cookie = await getCookie('session');

const cookieList = await cookies();
  
  const res = await fetch(`https://flaskbackendapi.onrender.com/customer/update-order-status/${id}`, {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `session=${cookie};`
      },
      body: JSON.stringify({ status }),
    });
  const response_message = await res.json();
  if (response_message.message) {
    redirect('/my-account')
  }

  return response_message;
}

