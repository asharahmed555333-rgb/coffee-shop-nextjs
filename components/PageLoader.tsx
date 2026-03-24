"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0b0806]"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#c6a66b]/40 bg-[#1a1410] text-3xl text-[#c6a66b] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              ☕
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="logo-font mt-6 text-4xl font-bold text-[#f5eee6]"
            >
              Brew Haven
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-2 text-sm uppercase tracking-[0.35em] text-[#c6a66b]"
            >
              Luxury Coffee House
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}