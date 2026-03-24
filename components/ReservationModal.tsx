"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        guests: "",
        date: "",
        time: "",
        notes: "",
      });
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-[#16110d] shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          >
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c6a66b]">
                    Reservation
                  </p>
                  <h2 className="heading-font mt-2 text-3xl font-bold text-[#f5eee6] sm:text-4xl">
                    Book Your Table
                  </h2>
                  <p className="mt-2 text-sm text-[#b7a792]">
                    Reserve your premium coffee experience at Brew Haven.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5eee6] transition hover:bg-white/10"
                  aria-label="Close reservation modal"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[24px] border border-[#c6a66b]/20 bg-[#1d1611] p-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c6a66b] text-2xl text-[#120d09]">
                    ✓
                  </div>
                  <h3 className="heading-font mt-5 text-2xl font-bold text-[#f5eee6]">
                    Reservation Received
                  </h3>
                  <p className="mt-3 text-[#b7a792]">
                    Thank you. Your booking request has been recorded.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
                    >
                      <option value="">Guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6+">6+ Guests</option>
                    </select>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
                    />

                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
                    />
                  </div>

                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Special notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
                  />

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="rounded-full bg-[#c6a66b] px-6 py-3 font-semibold text-[#120d09] transition duration-300 hover:-translate-y-1 hover:bg-[#e7c98a]"
                    >
                      Confirm Reservation
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-[#f5eee6] transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}