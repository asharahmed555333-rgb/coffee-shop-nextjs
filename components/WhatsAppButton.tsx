import { siteData } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteData.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-black shadow-lg transition hover:scale-105"
    >
      WhatsApp
    </a>
  );
}