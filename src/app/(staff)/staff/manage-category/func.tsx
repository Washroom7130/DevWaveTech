"use server";
import { cookies } from "next/headers";
import  Manage_Category  from "./page";
import { redirect } from "next/navigation";

type Category = {
  category_id: number;
  category_name: string;
};

//
export async function AddCategory(formData: FormData) {

  const category_name = formData.get("name");

  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
  }

  const cookie = await getCookie('session');

  const res = await fetch("https://flaskbackendapi.onrender.com/staff/add-category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": `session=${cookie};`
    },
    body: JSON.stringify({ category_name }),
  });
  const response_message = await res.json();
  if (response_message.message) {
        redirect('/staff/manage-category');
  }
  return response_message;
}
//
export async function ModifyCategory(formData: FormData){
  const category_id = Number(formData.get("category_id"));
  const category_name = formData.get("name");

  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
  }

  const cookie = await getCookie('session');

  const res = await fetch(`https://flaskbackendapi.onrender.com/staff/change-category-data/${category_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": `session=${cookie};`
    },
    body: JSON.stringify({ category_name }),
  });
  const response_message = await res.json();
  if (response_message.message) {
    redirect('/staff/manage-category');
}
  return response_message;
  //
}
//
 export async function DeleteCategory(formData: FormData) {
    const category_id = formData.get("category_id");

    const getCookie = async (name: string) => {
      return (await cookies()).get(name)?.value ?? '';
    }
    const cookie = await getCookie('session');
    
    const res = await fetch(`https://flaskbackendapi.onrender.com/staff/delete-category/${category_id}`, {
      method: "DELETE",
      headers: {
        "Cookie": `session=${cookie};`
      },
    });
  
    const response_message = await res.json();
    if (response_message.message) {
      redirect('/staff/manage-category');
    }
    return response_message;
    //
  }
  
