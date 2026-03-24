import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#2b2118] px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#bca892] md:flex-row md:items-center md:justify-between">
        <p>© 2026 {siteData.brand}. All rights reserved.</p>
        <p>{siteData.tagline}</p>
      </div>
    </footer>
  );
}