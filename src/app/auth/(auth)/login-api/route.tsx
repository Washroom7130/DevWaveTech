// src/app/auth/(auth)/login-api/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Read the JSON payload from the client
    const body = await request.json();

    // Forward the login request to your Flask backend
    const loginResponse = await fetch("https://flaskbackendapi.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Get the Set-Cookie header from the Flask response, if any
    const setCookieHeader = loginResponse.headers.get("set-cookie");
    const data = await loginResponse.json();

    // Create a NextResponse with the JSON payload
    const response = NextResponse.json(data, { status: loginResponse.status });

    // If a Set-Cookie header exists, pass it back to the client
    if (setCookieHeader) {
      response.headers.set("Set-Cookie", setCookieHeader);
    }

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
