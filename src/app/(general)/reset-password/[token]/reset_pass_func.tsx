"use server";
export async function ResetPass(formData: FormData, token: string) {
    const new_password = formData.get("new_password");
    const confirm_new_password = formData.get("confirm_new_password");
    
    const res = await fetch(`https://flaskbackendapi.onrender.com/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ new_password, confirm_new_password }),
    });
    const response_message = await res.json();
    return response_message;
  }