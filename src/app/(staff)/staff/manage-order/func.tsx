"use server";
import { cookies } from "next/headers";
import  Manage_order  from "./page";
import { redirect } from "next/navigation";

export async function ModifyOrder(formData: FormData){
  const order_id = Number(formData.get("id"));
  const status = formData.get("order_status");

  console.log(status)

  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
  }

  const cookie = await getCookie('session');

  const res = await fetch(`https://flaskbackendapi.onrender.com/staff/change-order-status/${order_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": `session=${cookie};`
    },
    body: JSON.stringify({ status }),
  });
  const response_message = await res.json();
  if (response_message.message) {
    redirect('/staff/manage-order')
  }
  return response_message;
}