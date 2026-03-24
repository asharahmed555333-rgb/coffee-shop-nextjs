export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0907] py-8">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="heading-font text-2xl font-bold text-[#f5eee6]">
            Brew Haven
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#b7a792]">
            A luxury coffee shop experience built around taste, elegance, and
            atmosphere.
          </p>
        </div>

        <div>
          <h4 className="heading-font text-xl font-bold text-[#f5eee6]">
            Quick Links
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#b7a792]">
            <a href="#home" className="transition duration-300 hover:translate-x-1 hover:text-[#e7c98a]">
              Home
            </a>
            <a href="#about" className="transition duration-300 hover:translate-x-1 hover:text-[#e7c98a]">
              About
            </a>
            <a href="#menu" className="transition duration-300 hover:translate-x-1 hover:text-[#e7c98a]">
              Menu
            </a>
            <a href="#contact" className="transition duration-300 hover:translate-x-1 hover:text-[#e7c98a]">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h4 className="heading-font text-xl font-bold text-[#f5eee6]">
            Opening Hours
          </h4>
          <div className="mt-3 space-y-2 text-sm text-[#b7a792]">
            <p>Monday - Friday: 8 AM - 10 PM</p>
            <p>Saturday - Sunday: 8 AM - 11 PM</p>
          </div>
        </div>

        <div>
          <h4 className="heading-font text-xl font-bold text-[#f5eee6]">
            Follow Us
          </h4>
          <div className="mt-3 space-y-2 text-sm text-[#b7a792]">
            <p>Instagram: @brewhaven</p>
            <p>Facebook: Brew Haven</p>
            <p>WhatsApp: +92 300 1234567</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-sm text-[#8f806e] sm:px-6 lg:px-8">
        © 2026 Brew Haven. All rights reserved.
      </div>
    </footer>
  );
}