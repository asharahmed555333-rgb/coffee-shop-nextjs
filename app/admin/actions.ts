"use server";

import { redirect } from "next/navigation";
import { removeAdminLogin } from "@/lib/auth";

export async function logoutAdmin() {
  await removeAdminLogin();
  redirect("/admin/login");
}