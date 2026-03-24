"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ReservationModal from "./ReservationModal";

export default function Hero() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#c6a66b]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#6c4c28]/15 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-[#c6a66b]/30 bg-[#c6a66b]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e7c98a]">
              Premium Coffee Experience
            </span>

            <h1 className="heading-font mt-6 text-5xl font-bold leading-[1.05] text-[#f8f2ea] sm:text-6xl lg:text-7xl">
              Sip the Taste of
              <span className="mt-2 block text-[#c6a66b]">Luxury.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#b7a792] sm:text-lg">
              Brew Haven blends artisan coffee, elegant interiors, and a refined
              atmosphere into a café experience that feels rich, warm, and
              unforgettable.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#menu"
                className="rounded-full bg-[#c6a66b] px-6 py-3 text-center font-semibold text-[#120d09] transition duration-300 hover:-translate-y-1 hover:bg-[#e7c98a]"
              >
                View Menu
              </a>
              <button
                type="button"
                onClick={() => setReservationOpen(true)}
                className="rounded-full border border-[#c6a66b]/40 bg-white/5 px-6 py-3 text-center font-semibold text-[#f5eee6] transition duration-300 hover:-translate-y-1 hover:bg-[#c6a66b] hover:text-[#120d09]"
              >
                Reserve Now
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <h2 className="heading-font text-3xl font-bold text-[#f5eee6] sm:text-4xl">
                  20+
                </h2>
                <p className="text-sm text-[#b7a792]">Coffee Variants</p>
              </div>
              <div>
                <h2 className="heading-font text-3xl font-bold text-[#f5eee6] sm:text-4xl">
                  10k+
                </h2>
                <p className="text-sm text-[#b7a792]">Happy Customers</p>
              </div>
              <div>
                <h2 className="heading-font text-3xl font-bold text-[#f5eee6] sm:text-4xl">
                  4.9★
                </h2>
                <p className="text-sm text-[#b7a792]">Average Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-500 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
                alt="Coffee hero"
                className="h-[320px] w-full rounded-[24px] object-cover sm:h-[440px] lg:h-[540px]"
              />

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#1d1611] p-4 transition duration-300 hover:scale-[1.02]">
                  <p className="text-sm text-[#c6a66b]">Today&apos;s Special</p>
                  <h3 className="heading-font mt-1 text-xl font-bold text-[#f5eee6]">
                    Caramel Latte
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#1d1611] p-4 transition duration-300 hover:scale-[1.02]">
                  <p className="text-sm text-[#c6a66b]">Best Seller</p>
                  <h3 className="heading-font mt-1 text-xl font-bold text-[#f5eee6]">
                    Mocha Delight
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </>
  );
}