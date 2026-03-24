import { cookies } from "next/headers";

const ADMIN_COOKIE = "coffee_admin_logged_in";

export async function setAdminLogin() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, "true", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });
}

export async function removeAdminLogin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
}

export async function isAdminLoggedIn() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === "true";
}