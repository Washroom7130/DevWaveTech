"use server";
import { cookies } from "next/headers";

export async function addToCart(formData: FormData) {
    const product_id = formData.get('id');
    const quantity = Number(formData.get('quantity'));

    const getCookie = async (name: string) => {
        return (await cookies()).get(name)?.value ?? '';
    }
    
    const cookie = await getCookie('session');

    const res = await fetch(`https://flaskbackendapi.onrender.com/customer/add-to-cart/${product_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `session=${cookie};`
        },
        body: JSON.stringify({ quantity }),
    });

    const response = await res.json();
    return response
}