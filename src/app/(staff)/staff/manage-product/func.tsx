"use server";
import { cookies } from "next/headers";
import  Manage_Products  from "./page";
import { redirect } from "next/navigation";

type Product = {
  product_id: number;
  product_name: string;
  product_image: string;
  product_price: number;
  product_description: string;
  product_stock: number;
  product_category: number;
};

export async function AddProduct(formData: FormData) {
  const product_name = formData.get("product_name");
  const image = formData.get("image"); // Đây phải là File hoặc Blob
  const price = formData.get("price");
  const description = formData.get("description");
  const quantity = formData.get("quantity");
  const product_category = formData.get("category_id");

  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
  };

  const cookie = await getCookie("session");

  const data = new FormData();
  data.append("product_name", product_name as string);
  data.append("image", image as Blob); 
  data.append("price", price as number);
  data.append("description", description as string);
  data.append("quantity", quantity as number);
  data.append("category_id", product_category as number);

  const res = await fetch("https://flaskbackendapi.onrender.com/staff/add-product", {
    method: "POST",
    headers: {
      Cookie: `session=${cookie};`, // Không cần "Content-Type" khi dùng FormData
    },
    body: data,
  });

  const response_message = await res.json();
  if (response_message.message) {
    redirect('/staff/manage-product');
  }
  return response_message;
}


// Sửa sản phẩm
export async function ModifyProduct(formData: FormData) {
  const id = formData.get('id');
  const product_name = formData.get("product_name");
  const product_image = formData.get("image");
  const product_price = formData.get("price");
  const product_description = formData.get("description");
  const product_stock = formData.get("quantity");
  const product_category = formData.get("category_id");

  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? "";
  };

  const cookie = await getCookie("session");

  const data = new FormData();

  data.append("product_name", product_name as string);
  data.append("image_file", product_image as Blob); 
  data.append("price", product_price as number);
  data.append("description", product_description as string);
  data.append("stock", product_stock as number);
  data.append("category_id", product_category as string);

  const res = await fetch(`https://flaskbackendapi.onrender.com/staff/change-product-data/${id}`, {
    method: "POST",
    headers: {
      Cookie: `session=${cookie};`,
    },
    body: data,
  });

  const response_message = await res.json();
  if (response_message.message) {
    redirect('/staff/manage-product');
  }
  return response_message;
}

// Xóa sản phẩm
export async function DeleteProduct(formData: FormData) {
  const product_id = formData.get("id");

  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
  }
  const cookie = await getCookie('session');
  
  const res = await fetch(`https://flaskbackendapi.onrender.com/staff/delete-product/${product_id}`, {
    method: "DELETE",
    headers: {
      "Cookie": `session=${cookie};`
    },
  });

  const response_message = await res.json();
  if (response_message.message) {
    redirect('/staff/manage-product');
  }
  return response_message;
}