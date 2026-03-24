"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReservationModal from "./ReservationModal";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Menu", href: "#menu", id: "menu" },
  { label: "Reviews", href: "#testimonials", id: "testimonials" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [reservationOpen, setReservationOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!reservationOpen) {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, reservationOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0b08]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a66b]/40 bg-[#1a1410] text-[#c6a66b] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              ☕
            </span>

            <span className="flex flex-col">
              <span className="logo-font text-2xl font-bold tracking-[0.04em] text-[#f5eee6] sm:text-3xl">
                Brew Haven
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#c6a66b] sm:text-xs">
                Luxury Coffee House
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "text-[#120d09]"
                      : "text-[#d8c7b0] hover:text-[#e7c98a]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-[#c6a66b]" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => setReservationOpen(true)}
              className="rounded-full border border-[#c6a66b]/40 bg-[#c6a66b] px-5 py-3 text-sm font-semibold text-[#120d09] transition duration-300 hover:-translate-y-1 hover:bg-[#e7c98a]"
            >
              Reserve Table
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5eee6] transition hover:bg-white/10 md:hidden"
            aria-label="Open Menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0b0806]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a66b]/40 bg-[#1a1410] text-[#c6a66b]">
                    ☕
                  </span>
                  <span className="logo-font text-2xl font-bold text-[#f5eee6]">
                    Brew Haven
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5eee6]"
                  aria-label="Close Menu"
                >
                  <span className="text-xl">✕</span>
                </button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 18 }}
                      transition={{ delay: index * 0.08 }}
                      className={`heading-font text-3xl font-bold tracking-wide transition ${
                        isActive ? "text-[#c6a66b]" : "text-[#f5eee6]"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}

                <motion.button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setReservationOpen(true);
                  }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ delay: 0.45 }}
                  className="mt-6 rounded-full bg-[#c6a66b] px-8 py-3 text-base font-semibold text-[#120d09]"
                >
                  Reserve Table
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </>
  );
}