import { redirect } from "next/navigation";
import { isAdminLoggedIn } from "@/lib/auth";
import AdminSidebar from "@/components/AdminSidebar";
import Link from "next/link";
import { logoutAdmin } from "./actions";

export default async function AdminDashboardPage() {
  const loggedIn = await isAdminLoggedIn();

  if (!loggedIn) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-[#0f0b08] px-6 py-10 text-[#f5eee6]">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[280px_1fr]">
        <AdminSidebar />

        <section className="rounded-3xl border border-[#2b2118] bg-[#17110d] p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold heading-font">Dashboard</h1>
              <p className="mt-2 text-[#d8cfc5]">
                Manage your coffee shop website from here.
              </p>
            </div>

            <form action={logoutAdmin}>
              <button
                type="submit"
                className="rounded-xl border border-[#2b2118] px-4 py-2 hover:bg-[#120d09]"
              >
                Logout
              </button>
            </form>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              href="/admin/settings"
              className="rounded-2xl border border-[#2b2118] bg-[#120d09] p-6 hover:border-[#c6a66b]"
            >
              <h2 className="text-xl font-semibold">Site Settings</h2>
              <p className="mt-2 text-[#d8cfc5]">
                Update brand, hero section, contact details, and WhatsApp.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}