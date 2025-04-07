"use server";
import { cookies } from "next/headers";

export async function DeleteCartItem(formdata: FormData) {
    const id = formdata.get('id')
    const quantity = Number(formdata.get('quantity'))

    const getCookie = async (name: string) => {
        return (await cookies()).get(name)?.value ?? '';
    }
    
    const cookie = await getCookie('session');

    const res = await fetch(`https://flaskbackendapi.onrender.com/customer/change-item-quantity/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `session=${cookie};`
      },
      body: JSON.stringify({ quantity }),
    });
    const response = res.json()

    return response
}