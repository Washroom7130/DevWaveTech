import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";


export function useAuthorization(allowedRoles: string[]) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkRole() {
      try {
        const getCookie = async (name: string) => {
            return (await cookies()).get(name)?.value ?? '';
        }
        
        const cookie = await getCookie('session');
        // Always fetch the role from the backend; no client storage caching.
        const res = await fetch("https://flaskbackendapi.onrender.com/my-role", {
          headers: {
              "Cookie": `session=${cookie};`
          }
        });
        const data = await res.json();
        const role = data.role;

        console.log(role)

        if (role === "none") {
          router.replace("/login");
        } else if (!allowedRoles.includes(role)) {
          router.replace("/home");
        } else {
          setAuthorized(true);
        }
      } catch (error) {
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    }
    checkRole();
  }, [allowedRoles, router]);

  return { authorized, loading };
}
