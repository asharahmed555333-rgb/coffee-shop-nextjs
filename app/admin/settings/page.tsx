import { redirect } from "next/navigation";
import { isAdminLoggedIn } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase";
import AdminSidebar from "@/components/AdminSidebar";
import { updateSiteSettings } from "./actions";

export default async function AdminSettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: string }>;
}) {
  const loggedIn = await isAdminLoggedIn();

  if (!loggedIn) {
    redirect("/admin/login");
  }

  const params = await searchParams;

  const { data } = await supabaseAdmin
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  return (
    <main className="min-h-screen bg-[#0f0b08] px-6 py-10 text-[#f5eee6]">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[280px_1fr]">
        <AdminSidebar />

        <section className="rounded-3xl border border-[#2b2118] bg-[#17110d] p-8">
          <h1 className="text-3xl font-bold heading-font">Site Settings</h1>
          <p className="mt-2 text-[#d8cfc5]">
            Update the main content used on the website.
          </p>

          {params.success && (
            <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-300">
              {params.success}
            </div>
          )}

          {params.error && (
            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300">
              {params.error}
            </div>
          )}

          <form action={updateSiteSettings} className="mt-8 grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="brand"
                defaultValue={data?.brand}
                placeholder="Brand"
                className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
              />
              <input
                name="tagline"
                defaultValue={data?.tagline}
                placeholder="Tagline"
                className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
              />
            </div>

            <input
              name="hero_badge"
              defaultValue={data?.hero_badge}
              placeholder="Hero badge"
              className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
            />

            <input
              name="hero_title"
              defaultValue={data?.hero_title}
              placeholder="Hero title"
              className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
            />

            <textarea
              name="hero_description"
              defaultValue={data?.hero_description}
              placeholder="Hero description"
              rows={4}
              className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="whatsapp_number"
                defaultValue={data?.whatsapp_number}
                placeholder="WhatsApp number"
                className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
              />
              <input
                name="phone"
                defaultValue={data?.phone}
                placeholder="Phone"
                className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="email"
                defaultValue={data?.email}
                placeholder="Email"
                className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
              />
              <input
                name="address"
                defaultValue={data?.address}
                placeholder="Address"
                className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
              />
            </div>

            <textarea
              name="reservation_text"
              defaultValue={data?.reservation_text}
              placeholder="Reservation text"
              rows={3}
              className="rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="w-fit rounded-xl bg-[#c6a66b] px-6 py-3 font-semibold text-[#120d09]"
            >
              Save Settings
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}