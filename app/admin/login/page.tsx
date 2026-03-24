import { loginAdmin } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const error = params.error;

  return (
    <main className="min-h-screen bg-[#0f0b08] px-6 py-16 text-[#f5eee6]">
      <div className="mx-auto max-w-md rounded-3xl border border-[#2b2118] bg-[#17110d] p-8">
        <h1 className="text-3xl font-bold heading-font">Admin Login</h1>
        <p className="mt-3 text-[#d8cfc5]">
          Sign in to manage website content.
        </p>

        {error && (
          <div className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <form action={loginAdmin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm">Email</label>
            <input
              name="email"
              type="email"
              className="w-full rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Password</label>
            <input
              name="password"
              type="password"
              className="w-full rounded-xl border border-[#2b2118] bg-[#120d09] px-4 py-3 outline-none"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#c6a66b] px-5 py-3 font-semibold text-[#120d09]"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}