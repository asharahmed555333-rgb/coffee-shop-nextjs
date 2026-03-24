import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="rounded-3xl border border-[#2b2118] bg-[#17110d] p-5">
      <h2 className="text-xl font-bold heading-font">Admin Panel</h2>

      <nav className="mt-6 flex flex-col gap-3">
        <Link
          href="/admin"
          className="rounded-xl border border-[#2b2118] px-4 py-3 hover:bg-[#120d09]"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/settings"
          className="rounded-xl border border-[#2b2118] px-4 py-3 hover:bg-[#120d09]"
        >
          Site Settings
        </Link>
      </nav>
    </aside>
  );
}