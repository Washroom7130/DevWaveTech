"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

  type Comments = {
    comment_id: number,
    comment_value: string,
    comment_date: number,
    customer_id: number,
    product_id: number,
  };


  export async function DeleteComment(formData: FormData) {
    const comment_id = formData.get("comment_id");

    const getCookie = async (name: string) => {
      return (await cookies()).get(name)?.value ?? '';
    }
    const cookie = await getCookie('session');
    
    const res = await fetch(`https://flaskbackendapi.onrender.com/staff/delete-comment/${comment_id}`, {
      method: "DELETE",
      headers: {
        "Cookie": `session=${cookie};`
      },
    });
  
    const response_message = await res.json();
    if(response_message.message) {
      redirect('/staff/manage-comment')
    }
    return response_message;
  };
  