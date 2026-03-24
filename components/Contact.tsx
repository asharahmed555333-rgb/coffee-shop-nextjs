import { siteData } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#2b2118] bg-[#17110d] p-8 md:p-12">
        <h2 className="text-3xl font-bold md:text-5xl heading-font">Contact Us</h2>

        <p className="mt-4 max-w-2xl text-[#d8cfc5]">
          {siteData.reservationText}
        </p>

        <div className="mt-8 grid gap-4 text-[#f5eee6]">
          <p>
            <strong>Phone:</strong> {siteData.phone}
          </p>
          <p>
            <strong>Email:</strong> {siteData.email}
          </p>
          <p>
            <strong>Address:</strong> {siteData.address}
          </p>

          <a
            href={`https://wa.me/${siteData.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-fit rounded-full bg-[#25D366] px-6 py-3 font-semibold text-black"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}