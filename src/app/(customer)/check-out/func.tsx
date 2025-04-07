"use server";
import { cookies } from "next/headers";

export async function PlaceOrder(formdata: FormData) {
    const address = formdata.get('address');
    const phone = formdata.get('phone');

    const getCookie = async (name: string) => {
        return (await cookies()).get(name)?.value ?? '';
    }
    
    const cookie = await getCookie('session');
    const cookieList = await cookies();
      
      const res = await fetch("https://flaskbackendapi.onrender.com/customer/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cookie": `session=${cookie};`
        },
        body: JSON.stringify({ address, phone }),
      });
      const response_message = await res.json();
      if (response_message.message) {
        cookieList.delete('cartTotal');
        cookieList.delete('cartTotalCost');
      }
      return response_message;
}