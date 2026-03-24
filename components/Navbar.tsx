import { siteData } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2b2118] bg-[#120d09]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="text-2xl font-bold heading-font">
          {siteData.brand}
        </a>

        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="transition hover:text-[#c6a66b]">
            About
          </a>
          <a href="#menu" className="transition hover:text-[#c6a66b]">
            Menu
          </a>
          <a href="#reviews" className="transition hover:text-[#c6a66b]">
            Reviews
          </a>
          <a href="#contact" className="transition hover:text-[#c6a66b]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}