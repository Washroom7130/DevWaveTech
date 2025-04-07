"use server";
export async function ForgotPass(formData: FormData) {
    const email = formData.get("email");
    
    const res = await fetch("https://flaskbackendapi.onrender.com/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email }),
    });
    const response_message = await res.json();
    return response_message;
  }
  