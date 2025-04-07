// getUserRole.ts (Server Function)
import { cookies } from "next/headers";

export async function getUserRole() {
  const getCookie = async (name: string) => {
    return (await cookies()).get(name)?.value ?? '';
  }

  const cookie = await getCookie('session');

  const res = await fetch("https://flaskbackendapi.onrender.com/my-role", {
    headers: {
      "Cookie": `session=${cookie};`
    }
  });
  const data = await res.json();
  return data.role; // e.g. "none", "user", "staff", or "admin"
}
