"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // In a real app we would validate the email/password against a DB.
  // Here we just accept any input and mint a mock cookie session.
  const cookieStore = await cookies();
  cookieStore.set("auth_session", "authenticated_user", { 
    httpOnly: true, 
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7 // 1 week
  });
  
  return { success: true };
}

export async function signup(formData: FormData) {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // Mint mock cookie
  const cookieStore = await cookies();
  cookieStore.set("auth_session", "authenticated_user", { 
    httpOnly: true, 
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  
  return { success: true };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_session");
  redirect("/");
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("auth_session");
  return !!session?.value;
}
