"use client";

import MotionWrapper from "./MotionWrapper";
import ReservationModal from "./ReservationModal";
import { useState } from "react";

export default function PromoBanner() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionWrapper>
            <div className="overflow-hidden rounded-[36px] border border-[#c6a66b]/20 bg-gradient-to-r from-[#1b140f] via-[#241a13] to-[#130e0b] px-6 py-10 text-white shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition duration-300 hover:shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:px-10 lg:px-12">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c6a66b]">
                    Limited Time Offer
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-[#f5eee6] sm:text-4xl">
                    Buy 1 Coffee, Get 1 Pastry Free
                  </h2>
                  <p className="mt-4 max-w-xl text-[#c8b8a3]">
                    Visit Brew Haven and enjoy a rich coffee experience with a
                    fresh pastry on the house.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <a
                    href="#menu"
                    className="rounded-full bg-[#c6a66b] px-6 py-3 text-center font-semibold text-[#120d09] transition duration-300 hover:-translate-y-1 hover:bg-[#e7c98a]"
                  >
                    See Offer
                  </a>
                  <button
                    type="button"
                    onClick={() => setReservationOpen(true)}
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#120d09]"
                  >
                    Book a Table
                  </button>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </>
  );
}