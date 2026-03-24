import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-full border border-[#4f3a24] px-4 py-2 text-sm text-[#c6a66b]">
          {siteData.heroBadge}
        </span>

        <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight md:text-7xl heading-font">
          {siteData.heroTitle}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d8cfc5]">
          {siteData.heroDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#menu"
            className="rounded-full bg-[#c6a66b] px-6 py-3 font-semibold text-[#120d09] transition hover:opacity-90"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#c6a66b] px-6 py-3 font-semibold text-[#f5eee6] transition hover:bg-[#c6a66b] hover:text-[#120d09]"
          >
            Reserve Now
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div>
            <div className="text-3xl font-bold heading-font">20+</div>
            <div className="mt-2 text-[#d8cfc5]">Coffee Variants</div>
          </div>
          <div>
            <div className="text-3xl font-bold heading-font">10k+</div>
            <div className="mt-2 text-[#d8cfc5]">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold heading-font">4.9★</div>
            <div className="mt-2 text-[#d8cfc5]">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}