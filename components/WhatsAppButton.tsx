"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "923190367965";
  const message = "Hello, I want to know more about your coffee shop.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full border border-white/10 bg-[#1b140f] px-4 py-3 text-white shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:bg-[#25D366]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-6 w-6 fill-current"
        >
          <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.66-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          <path d="M16.02 3C8.83 3 3 8.73 3 15.8c0 2.28.6 4.5 1.74 6.46L3 29l6.98-1.81a13.14 13.14 0 0 0 6.04 1.46h.01C23.2 28.65 29 22.92 29 15.84 29 8.77 23.2 3 16.02 3Zm0 23.4h-.01a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-4.14 1.08 1.11-4.02-.26-.41a10.67 10.67 0 0 1-1.64-5.61c0-5.92 4.9-10.74 10.91-10.74 6.01 0 10.9 4.82 10.9 10.74 0 5.93-4.9 10.75-10.91 10.75Z" />
        </svg>
      </span>

      <span className="hidden pr-1 text-sm font-semibold sm:inline">
        WhatsApp Us
      </span>
    </motion.a>
  );
}