"use server";
export async function RegisterUser(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const birthday = formData.get("birthday");
    const phone = formData.get("phone");
    const password = formData.get("password");
    const confirm_password = formData.get("confirm password");
    
    const res = await fetch("https://flaskbackendapi.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, birthday, phone, password, confirm_password }),
    });
    const response_message = await res.json();
    return response_message;
  }
  