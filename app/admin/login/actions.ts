"use server";

import { redirect } from "next/navigation";
import { setAdminLogin } from "@/lib/auth";

export async function loginAdmin(formData: FormData) {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    await setAdminLogin();
    redirect("/admin");
  }

  redirect("/admin/login?error=Invalid credentials");
}