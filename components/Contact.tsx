"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setStatusMessage("Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setIsSuccess(false);
        setStatusMessage(data.message || "Something went wrong.");
      }
    } catch {
      setIsSuccess(false);
      setStatusMessage("Unable to send message right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#120d09] py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c6a66b]">
            Contact Us
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#f5eee6] sm:text-4xl">
            Reserve a Table or Send a Message
          </h2>
          <p className="mt-5 max-w-lg text-[#b7a792]">
            Reach out for reservations, events, catering, or general questions.
            We would love to hear from you.
          </p>

          <div className="mt-8 space-y-4 text-[#cdbca7]">
            <p>📍 Karachi, Pakistan</p>
            <p>📞 +92 300 1234567</p>
            <p>✉️ hello@brewhaven.com</p>
            <p>🕒 Mon - Sun: 8:00 AM - 11:00 PM</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-white/10 bg-[#1a1410] p-6 text-[#f5eee6] shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:p-8"
        >
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
              required
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              className="rounded-2xl border border-white/10 bg-[#120d09] px-4 py-3 text-[#f5eee6] outline-none transition focus:border-[#c6a66b] focus:ring-2 focus:ring-[#c6a66b]/20"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#c6a66b] px-6 py-3 font-semibold text-[#120d09] transition duration-300 hover:-translate-y-1 hover:bg-[#e7c98a] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p
                className={`text-sm font-medium ${
                  isSuccess ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

<button
  type="button"
  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-[#f5eee6] transition duration-300 hover:-translate-y-1 hover:bg-white/10"
>
  Book Table Instead
</button>